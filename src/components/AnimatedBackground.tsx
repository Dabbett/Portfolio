'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useCallback, useRef } from 'react';

interface Blob {
  id: string;
  x: number;
  y: number;
  size: number;
  color: string;
  targetX: number;
  targetY: number;
  targetSize: number;
  speed: number;
  groupId?: string;
  hasMet?: boolean;
  lastMeetingTime?: number;
  movementPhase?: 'random' | 'meeting' | 'post-meeting';
  isInteracting?: boolean;
  interactionSpeed?: number;
  opacity?: number;
}

export default function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);
  const [blobs, setBlobs] = useState<Blob[]>([]);
  const [isInteracting, setIsInteracting] = useState(false);
  const [hasRejoined, setHasRejoined] = useState(true);
  const [fadeTimer, setFadeTimer] = useState<NodeJS.Timeout | null>(null);
  const [interactionStartTime, setInteractionStartTime] = useState<number>(0);
  const [hasLoggedWelcome, setHasLoggedWelcome] = useState(false);
  const [hasLoggedInteraction, setHasLoggedInteraction] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Use refs to avoid dependency issues
  const isInteractingRef = useRef(isInteracting);
  const hasRejoinedRef = useRef(hasRejoined);
  const mountedRef = useRef(mounted);
  const isMobileRef = useRef(isMobile);
  
  // Update refs when state changes
  useEffect(() => {
    isInteractingRef.current = isInteracting;
    hasRejoinedRef.current = hasRejoined;
    mountedRef.current = mounted;
    isMobileRef.current = isMobile;
  }, [isInteracting, hasRejoined, mounted, isMobile]);
  


  // Helper function to check if blobs are meeting (close together)
  const checkForMeeting = (blobs: Blob[]) => {
    const meetingThreshold = 15; // Distance threshold for meeting
    let hasMeeting = false;
    
    // Only check non-interacting blobs for meetings
    const nonInteractingBlobs = blobs.filter(blob => !blob.isInteracting);
    
    for (let i = 0; i < nonInteractingBlobs.length; i++) {
      for (let j = i + 1; j < nonInteractingBlobs.length; j++) {
        const dist = Math.sqrt((nonInteractingBlobs[i].x - nonInteractingBlobs[j].x) ** 2 + (nonInteractingBlobs[i].y - nonInteractingBlobs[j].y) ** 2);
        if (dist < meetingThreshold) {
          hasMeeting = true;
          break;
        }
      }
      if (hasMeeting) break;
    }
    
    return hasMeeting;
  };


  // Helper function to get extreme screen positions for dramatic movement

  // Function to get random direction for each orb (different directions)
  const getRandomDirection = () => {
    return {
      x: Math.random() * 100, // Truly random across entire screen width
      y: Math.random() * 100, // Truly random across entire screen height
    };
  };

  // Function to trigger orb movement on interaction
  const triggerOrbMovement = useCallback((buttonPosition?: { x: number; y: number }) => {
    if (isInteractingRef.current || !hasRejoinedRef.current || !mountedRef.current) return; // Prevent multiple interactions or clicks before rejoining
    
    if (!hasLoggedInteraction) {
      console.log("Button clicked! Time to show off some smooth animations...");
      console.log("Pro tip: I built this parabolic speed curve from scratch. Imagine what I could do for your product!");
      setHasLoggedInteraction(true);
    }
    
    // Clear any existing fade timers
    if (fadeTimer) {
      clearTimeout(fadeTimer);
      setFadeTimer(null);
    }
    
    // Generate target positions for all blobs (converge on button or random)
    const newTargets: {x: number, y: number}[] = [];
    
    if (buttonPosition) {
      // Create random scatter directions for each blob
      const directions: {x: number, y: number}[] = [];
      for (let i = 0; i < 8; i++) {
        const angle = Math.random() * Math.PI * 2; // Completely random direction
        const radius = 150 + Math.random() * 100; // Much larger distance to go completely off screen
        
        const targetX = buttonPosition.x + Math.cos(angle) * radius;
        const targetY = buttonPosition.y + Math.sin(angle) * radius;
        
        newTargets.push({ x: targetX, y: targetY });
        directions.push({ x: targetX, y: targetY }); // Store for return journey
      }
    } else {
      // Fallback to random if no button position
      for (let i = 0; i < 8; i++) {
        newTargets.push(getRandomDirection());
      }
    }
    
    // Update all blobs with new targets and start interaction
    setBlobs(prevBlobs => 
      prevBlobs.map((blob, index) => ({
        ...blob,
        targetX: newTargets[index].x,
        targetY: newTargets[index].y,
        speed: 0.08, // Higher speed for dramatic race-off effect
        // Keep current x, y positions - don't jump to targets
      }))
    );
    
    setIsInteracting(true);
    setHasRejoined(false);
    setInteractionStartTime(Date.now());
    
    // Start gradual fade after they've had time to race off
    setTimeout(() => {
      if (!hasLoggedInteraction) {
        console.log("Poof! Orbs are fading away... (Don't worry, they'll be back!)");
      }
      setBlobs(prevBlobs => 
        prevBlobs.map(blob => ({
          ...blob,
          // opacity: 0.1, // Start fading gradually
        }))
      );
    }, 1000); // Start fading after 1 second
    
        // Complete fade out after more time
        const timer2 = setTimeout(() => {
          if (!hasLoggedInteraction) {
            console.log("And they're gone! (Like my bugs after a good debugging session)");
          }
          setBlobs(prevBlobs =>
            prevBlobs.map(blob => ({
              ...blob,
              // opacity: 0, // Fade completely out
            }))
          );
        }, 1200); // Complete fade after 1.2 seconds
        
        setFadeTimer(timer2);
        
        // Start movement back to normal behavior and fade-in simultaneously
        setTimeout(() => {
          if (!hasLoggedInteraction) {
            console.log("Ta-da! Orbs are back and better than ever!");
            console.log("Ready to bring this level of creativity to your team? Let's chat!");
          }
          setIsInteracting(false);
          setHasRejoined(true);
          
          // Position orbs off-screen initially, then animate them in
          setBlobs(prevBlobs => 
            prevBlobs.map((blob) => {
              // Generate off-screen starting positions (from various edges)
              const edge = Math.floor(Math.random() * 4); // 0=top, 1=right, 2=bottom, 3=left
              let startX, startY;
              
              switch(edge) {
                case 0: // Top edge
                  startX = Math.random() * 100;
                  startY = -20;
                  break;
                case 1: // Right edge
                  startX = 120;
                  startY = Math.random() * 100;
                  break;
                case 2: // Bottom edge
                  startX = Math.random() * 100;
                  startY = 120;
                  break;
                case 3: // Left edge
                  startX = -20;
                  startY = Math.random() * 100;
                  break;
              }
              
              return {
                ...blob,
                x: startX || 0, // Start off-screen
                y: startY || 0, // Start off-screen
                speed: 0.02, // Slightly faster for smooth entry
                targetX: Math.random() * 100, // Target random on-screen position
                targetY: Math.random() * 100, // Target random on-screen position
                targetSize: Math.random() * 60 + 40, // Random target size
                movementPhase: 'random' as const, // Reset to random movement
                hasMet: false, // Reset meeting state
                lastMeetingTime: 0, // Reset meeting time
                opacity: 0.1, // Start with low opacity
              };
            })
          );
        }, 3000); // Start movement and fade-in at 3 seconds
        
        // Gradually fade in the orbs as they enter
        setTimeout(() => {
          setBlobs(prevBlobs => 
            prevBlobs.map(blob => ({
              ...blob,
              opacity: 0.3 + (blob.size / 200), // Fade to normal opacity
            }))
          );
        }, 3200); // Start fade-in 200ms after movement starts
  }, [fadeTimer, hasLoggedInteraction]);

  useEffect(() => {
    if (!hasLoggedWelcome) {
      console.log("AnimatedBackground loaded! Built with love and attention to detail.");
      console.log("Hi there! I'm Dylan, and I made this interactive background just for you!");
      setHasLoggedWelcome(true);
    }
    setMounted(true);
    
    // Detect mobile for performance optimizations - do this once on mount
    const isMobileDevice = window.innerWidth < 768 || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setIsMobile(isMobileDevice);
    
    // Only initialize blobs if they don't exist
    setBlobs(prevBlobs => {
      if (prevBlobs.length > 0) return prevBlobs; // Don't reinitialize if blobs exist
      const blobCount = isMobileDevice ? 4 : 8; // Fewer blobs on mobile
      const initialBlobs: Blob[] = Array.from({ length: blobCount }, (_, i) => {
        // Generate off-screen starting positions (from various edges)
        const edge = Math.floor(Math.random() * 4); // 0=top, 1=right, 2=bottom, 3=left
        let startX, startY;
        
        switch(edge) {
          case 0: // Top edge
            startX = Math.random() * 100;
            startY = -20;
            break;
          case 1: // Right edge
            startX = 120;
            startY = Math.random() * 100;
            break;
          case 2: // Bottom edge
            startX = Math.random() * 100;
            startY = 120;
            break;
          case 3: // Left edge
            startX = -20;
            startY = Math.random() * 100;
            break;
        }
        
        return {
          id: `blob-${i}`,
          x: startX || 0, // Start off-screen
          y: startY || 0, // Start off-screen
          size: Math.random() * 60 + 40,
          color: ['#8B5CF6', '#06B6D4', '#3B82F6', '#EC4899', '#10B981', '#F59E0B', '#6366F1', '#A855F7'][i],
          targetX: Math.random() * 100, // Target random on-screen position
          targetY: Math.random() * 100, // Target random on-screen position
          targetSize: Math.random() * 60 + 40,
          speed: 0.02, // Slightly faster for smooth entry
          hasMet: false,
          lastMeetingTime: 0,
          movementPhase: 'random' as const,
          isInteracting: false,
          interactionSpeed: 0,
          opacity: 0.1, // Start with low opacity
        };
      });
      
      return initialBlobs;
    });
    
    // Gradually fade in the initial orbs as they enter
    setTimeout(() => {
      setBlobs(prevBlobs => 
        prevBlobs.map(blob => ({
          ...blob,
          opacity: 0.3 + (blob.size / 200), // Fade to normal opacity
        }))
      );
    }, 1000); // Start fade-in after 1 second
  }, [hasLoggedWelcome]); // Remove isMobile dependency to prevent re-renders

  // Separate effect for resize handling (without causing re-renders)
  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth < 768 || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      // Only update if the mobile state actually changed
      setIsMobile(prevIsMobile => {
        if (prevIsMobile !== newIsMobile) {
          return newIsMobile;
        }
        return prevIsMobile;
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array - only run once

  // Separate effect for event listener
  useEffect(() => {
    const handleButtonClick = (event: Event) => {
      const target = event.target as HTMLElement;
      const button = target.tagName === 'BUTTON' ? target : target.closest('button');
      
      if (button) {
        // Get button position relative to viewport
        const rect = button.getBoundingClientRect();
        const buttonX = (rect.left + rect.width / 2) / window.innerWidth * 100;
        const buttonY = (rect.top + rect.height / 2) / window.innerHeight * 100;
        
        // Adjust for better centering
        const adjustedX = Math.max(10, Math.min(90, buttonX));
        const adjustedY = Math.max(10, Math.min(90, buttonY));
        
        triggerOrbMovement({ x: adjustedX, y: adjustedY });
      }
    };

    document.addEventListener('click', handleButtonClick);
    
    return () => {
      document.removeEventListener('click', handleButtonClick);
    };
  }, [triggerOrbMovement]);

  useEffect(() => {
    if (!mounted) return;

    const interval = setInterval(() => {
      setBlobs(prevBlobs => {
        const currentTime = Date.now();
        
        // If interacting, use parabolic speed movement logic
        if (isInteracting) {
          return prevBlobs.map(blob => {
            const dx = blob.targetX - blob.x;
            const dy = blob.targetY - blob.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            let newX = blob.x;
            let newY = blob.y;
            
            if (distance > 1) {
              // Calculate parabolic speed based on time elapsed
              const elapsed = currentTime - interactionStartTime;
              const totalDuration = 2000; // 2 seconds total for faster movement
              const progress = Math.min(elapsed / totalDuration, 1); // 0 to 1
              const parabolicSpeed = 3 * progress * (1 - progress); // Smoother parabolic curve
              
              // Smoother movement with easing
              const easeFactor = 0.08 + (parabolicSpeed * 0.15); // Smoother easing
              const moveX = (dx / distance) * easeFactor * 100;
              const moveY = (dy / distance) * easeFactor * 100;
              newX += moveX;
              newY += moveY;
            } else {
              newX = blob.targetX;
              newY = blob.targetY;
            }
            
            return {
              ...blob,
              x: newX, // Allow off-screen movement during interaction
              y: newY, // Allow off-screen movement during interaction
            };
          });
        }
        
        
        // Normal movement logic
        const isCurrentlyMeeting = checkForMeeting(prevBlobs);
        
        // Occasional fun logs during normal behavior (only once)
        if (prevBlobs.some(blob => blob.movementPhase === 'random' && Math.random() < 0.001) && !hasLoggedInteraction) {
          console.log("Orbs are doing their thing... (Just like me, always learning and adapting!)");
        }
        
        return prevBlobs.map(blob => {
          const dx = blob.targetX - blob.x;
          const dy = blob.targetY - blob.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          let newX = blob.x;
          let newY = blob.y;
          let newSize = blob.size;
          let newMovementPhase = blob.movementPhase;
          let newHasMet = blob.hasMet;
          let newLastMeetingTime = blob.lastMeetingTime;
          
          if (distance > 1) {
            newX += (dx / distance) * blob.speed * 100;
            newY += (dy / distance) * blob.speed * 100;
          } else {
            newX = blob.targetX;
            newY = blob.targetY;
          }
          
          // Smooth size transitions
          const sizeDiff = blob.targetSize - blob.size;
          newSize += sizeDiff * 0.05;
          
          // Check for blob interactions (grouping/absorbing)
          let newTargetX = blob.targetX;
          let newTargetY = blob.targetY;
          let newTargetSize = blob.targetSize;
          
          prevBlobs.forEach(otherBlob => {
            if (otherBlob.id !== blob.id) {
              const dist = Math.sqrt((newX - otherBlob.x) ** 2 + (newY - otherBlob.y) ** 2);
              const minDist = (blob.size + otherBlob.size) / 2;
              
              if (dist < minDist * 2) {
                const attractForce = 0.1;
                const attractX = (otherBlob.x - newX) * attractForce;
                const attractY = (otherBlob.y - newY) * attractForce;
                
                newTargetX = newX + attractX;
                newTargetY = newY + attractY;
                
                if (blob.size > otherBlob.size) {
                  newTargetSize = Math.min(blob.size + otherBlob.size * 0.1, 120);
                }
              }
            }
          });
          
          // Handle meeting detection and phase transitions
          if (isCurrentlyMeeting && !blob.hasMet) {
            newHasMet = true;
            newLastMeetingTime = currentTime;
            newMovementPhase = 'meeting';
          }
          
          
          
          // Random movement for non-meeting blobs - more frequent exploration
          const randomChance = isMobileRef.current ? 0.008 : 0.015; // Use ref instead of state
          if (blob.movementPhase === 'random' && Math.random() < randomChance) {
            // Allow orbs to explore beyond screen edges for natural movement
            newTargetX = Math.random() * 120 - 10; // -10% to 110% range
            newTargetY = Math.random() * 120 - 10; // -10% to 110% range
            newTargetSize = Math.random() * 60 + 40;
          }
          
          return {
            ...blob,
            x: isInteracting ? newX : Math.max(-5, Math.min(105, newX)), // Allow slight off-screen exploration
            y: isInteracting ? newY : Math.max(-5, Math.min(105, newY)), // Allow slight off-screen exploration
            size: Math.max(20, Math.min(120, newSize)),
            targetX: newTargetX,
            targetY: newTargetY,
            targetSize: newTargetSize,
            hasMet: newHasMet,
            lastMeetingTime: newLastMeetingTime,
            movementPhase: newMovementPhase,
          };
        });
      });
    }, isMobileRef.current ? 50 : 33); // Use ref instead of state

    return () => clearInterval(interval);
  }, [mounted, isInteracting, hasRejoined, interactionStartTime, hasLoggedInteraction]); // No isMobile dependency needed

  // This effect is no longer needed since fade-in happens at 3 seconds

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      if (fadeTimer) {
        clearTimeout(fadeTimer);
      }
    };
  }, [fadeTimer]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 5, overflow: 'visible' }}>
      {/* Dynamic lava lamp blobs */}
      {blobs.map((blob) => (
        <motion.div
          key={blob.id}
          className="absolute blur-3xl"
          style={{
            left: `${blob.x}%`,
            top: `${blob.y}%`,
            width: `${blob.size}px`,
            height: `${blob.size}px`,
            background: `radial-gradient(circle, ${blob.color} 0%, ${blob.color}80 50%, ${blob.color}40 100%)`,
            borderRadius: '50%',
            boxShadow: `0 0 ${blob.size * 0.8}px ${blob.color}, inset 0 0 ${blob.size * 0.4}px ${blob.color}80`,
            transform: 'translate(-50%, -50%)',
            // iOS optimizations
            willChange: 'transform, opacity',
            WebkitTransform: 'translate(-50%, -50%)',
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden',
          }}
          animate={{
            opacity: blob.opacity !== undefined ? blob.opacity : (0.3 + (blob.size / 200)),
            scale: isMobile ? [1, 1.05, 0.95, 1] : [1, 1.1, 0.9, 1], // Less intense on mobile
          }}
          transition={{
            opacity: { duration: 1.5, ease: "easeInOut" },
            scale: {
              duration: isMobile ? 4 + Math.random() * 2 : 3 + Math.random() * 2, // Slower on mobile
              repeat: Infinity,
              ease: "easeInOut",
            }
          }}
        />
      ))}
    </div>
  );
}
