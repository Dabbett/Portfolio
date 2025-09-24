import { useRef, useEffect, useState } from 'react';

interface TiltOptions {
  maxTilt?: number;
  perspective?: number;
  scale?: number;
  speed?: number;
  magnetism?: number;
  glareEffect?: boolean;
  proximityThreshold?: number; // Distance in pixels to activate effect
}

export function useTiltEffect<T extends HTMLElement = HTMLElement>(options: TiltOptions = {}) {
  const {
    maxTilt = 15,
    perspective = 1000,
    scale = 1.02,
    speed = 300,
    magnetism = 0.1,
    glareEffect = true,
    proximityThreshold = 0
  } = options;

  const ref = useRef<T>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [transform, setTransform] = useState('');
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({});


  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let animationFrame: number;

    const handleMouseMove = (event: MouseEvent) => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }

      animationFrame = requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Calculate distance from center
        const deltaX = event.clientX - centerX;
        const deltaY = event.clientY - centerY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        
        // Check if within proximity threshold
        const isWithinProximity = proximityThreshold > 0 ? 
          distance <= (Math.max(rect.width, rect.height) / 2 + proximityThreshold) : 
          true; // If no proximity threshold, always active when hovering
        
        // Calculate effect intensity based on distance (for proximity mode)
        let intensity = 1;
        if (proximityThreshold > 0) {
          const maxDistance = Math.max(rect.width, rect.height) / 2 + proximityThreshold;
          intensity = Math.max(0, 1 - (distance / maxDistance));
          
          // Update hover state based on proximity
          const wasHovered = isHovered;
          const nowHovered = intensity > 0;
          if (wasHovered !== nowHovered) {
            setIsHovered(nowHovered);
          }
        }
        
        if (isWithinProximity && intensity > 0) {
          // Calculate rotation values with intensity
          const rotateX = ((-deltaY / rect.height) * maxTilt * intensity);
          const rotateY = ((deltaX / rect.width) * maxTilt * intensity);
          
          // Apply magnetism effect (attraction to mouse) with intensity
          const magnetX = deltaX * magnetism * intensity;
          const magnetY = deltaY * magnetism * intensity;
          
          // Scale based on proximity
          const currentScale = 1 + ((scale - 1) * intensity);
          
          // Create transform string
          const newTransform = `
            perspective(${perspective}px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(${currentScale})
            translateX(${magnetX}px)
            translateY(${magnetY}px)
          `;
          
          setTransform(newTransform);

          // Holographic glare effect with intensity
          if (glareEffect) {
            const glareX = (deltaX / rect.width) * 100;
            const glareY = (deltaY / rect.height) * 100;
            
            setGlareStyle({
              background: `
                radial-gradient(
                  circle at ${50 + glareX}% ${50 + glareY}%,
                  rgba(255, 255, 255, ${0.1 * intensity}) 0%,
                  rgba(255, 255, 255, ${0.05 * intensity}) 20%,
                  transparent 70%
                ),
                linear-gradient(
                  ${45 + glareX}deg,
                  transparent 30%,
                  rgba(255, 255, 255, ${0.1 * intensity}) 50%,
                  transparent 70%
                )
              `,
              opacity: intensity,
              transition: intensity > 0 ? 'none' : `opacity ${speed}ms ease-out`
            });
          }
        } else {
          // Reset when outside proximity
          if (proximityThreshold > 0 && intensity === 0) {
            setIsHovered(false);
            setTransform(`
              perspective(${perspective}px)
              rotateX(0deg)
              rotateY(0deg)
              scale(1)
              translateX(0px)
              translateY(0px)
            `);
            
            if (glareEffect) {
              setGlareStyle({
                opacity: 0,
                transition: `opacity ${speed}ms ease-out`
              });
            }
          }
        }
      });
    };

    const handleMouseEnter = () => {
      if (proximityThreshold === 0) {
        setIsHovered(true);
      }
    };

    const handleMouseLeave = () => {
      if (proximityThreshold === 0) {
        setIsHovered(false);
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
        
        // Reset transform with smooth transition
        setTransform(`
          perspective(${perspective}px)
          rotateX(0deg)
          rotateY(0deg)
          scale(1)
          translateX(0px)
          translateY(0px)
        `);
        
        if (glareEffect) {
          setGlareStyle({
            opacity: 0,
            transition: `opacity ${speed}ms ease-out`
          });
        }
      }
    };

    // Add event listeners
    if (proximityThreshold > 0) {
      // For proximity detection, listen to document mouse move
      document.addEventListener('mousemove', handleMouseMove);
    } else {
      // For normal hover, listen to element events
      element.addEventListener('mousemove', handleMouseMove);
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      
      if (proximityThreshold > 0) {
        document.removeEventListener('mousemove', handleMouseMove);
      } else {
        element.removeEventListener('mousemove', handleMouseMove);
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [maxTilt, perspective, scale, speed, magnetism, glareEffect, isHovered, proximityThreshold]);

  return {
    ref,
    transform,
    glareStyle,
    isHovered,
    style: {
      transform,
      transition: isHovered ? 'none' : `transform ${speed}ms ease-out`,
      transformStyle: 'preserve-3d' as const,
    }
  };
}
