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
  
  // Use refs to avoid dependency issues
  const isInteractingRef = useRef(isInteracting);
  const hasRejoinedRef = useRef(hasRejoined);
  const mountedRef = useRef(mounted);
  
  // Update refs when state changes
  useEffect(() => {
    isInteractingRef.current = isInteracting;
    hasRejoinedRef.current = hasRejoined;
    mountedRef.current = mounted;
  }, [isInteracting, hasRejoined, mounted]);
  


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
  const triggerOrbMovement = useCallback(() => {
    if (isInteractingRef.current || !hasRejoinedRef.current || !mountedRef.current) return; // Prevent multiple interactions or clicks before rejoining
    
    if (!hasLoggedInteraction) {
      console.log("🎯 Button clicked! Time to show off some smooth animations...");
      console.log("💡 Pro tip: I built this parabolic speed curve from scratch. Imagine what I could do for your product!");
      setHasLoggedInteraction(true);
    }
    
    // Clear any existing fade timers
    if (fadeTimer) {
      clearTimeout(fadeTimer);
      setFadeTimer(null);
    }
    
    // Generate random directions for all blobs (different directions)
    const newTargets: {x: number, y: number}[] = [];
    for (let i = 0; i < 8; i++) {
      newTargets.push(getRandomDirection());
    }
    
    // Update all blobs with new targets and start interaction
    setBlobs(prevBlobs => 
      prevBlobs.map((blob, index) => ({
        ...blob,
        targetX: newTargets[index].x,
        targetY: newTargets[index].y,
        speed: 0.03, // Speed for smooth fly-away movement
        // Keep current x, y positions - don't jump to targets
      }))
    );
    
    setIsInteracting(true);
    setHasRejoined(false);
    setInteractionStartTime(Date.now());
    
    // Start gradual fade after a short delay
    setTimeout(() => {
      if (!hasLoggedInteraction) {
        console.log("👻 Poof! Orbs are fading away... (Don't worry, they'll be back!)");
      }
      setBlobs(prevBlobs => 
        prevBlobs.map(blob => ({
          ...blob,
          opacity: 0.1, // Start fading gradually
        }))
      );
    }, 300); // Start fading after 300ms
    
        // Complete fade out after more time
        const timer2 = setTimeout(() => {
          if (!hasLoggedInteraction) {
            console.log("✨ And they're gone! (Like my bugs after a good debugging session)");
          }
          setBlobs(prevBlobs =>
            prevBlobs.map(blob => ({
              ...blob,
              opacity: 0, // Fade completely out
            }))
          );
        }, 1200); // Complete fade after 1.2 seconds
        
        setFadeTimer(timer2);
        
        // Start movement back to normal behavior and fade-in simultaneously
        setTimeout(() => {
          if (!hasLoggedInteraction) {
            console.log("🎪 Ta-da! Orbs are back and better than ever!");
            console.log("💼 Ready to bring this level of creativity to your team? Let's chat!");
          }
          setIsInteracting(false);
          setHasRejoined(true);
          
          // Fade back in and give orbs new random targets
          setBlobs(prevBlobs => 
            prevBlobs.map(blob => ({
              ...blob,
              speed: 0.015, // Slower speed for smooth transition
              opacity: 0.3 + (blob.size / 200), // Fade back in
              targetX: Math.random() * 100, // NEW: Random target X
              targetY: Math.random() * 100, // NEW: Random target Y
              targetSize: Math.random() * 60 + 40, // NEW: Random target size
              movementPhase: 'random' as const, // NEW: Reset to random movement
              hasMet: false, // NEW: Reset meeting state
              lastMeetingTime: 0, // NEW: Reset meeting time
            }))
          );
        }, 3000); // Start movement and fade-in at 3 seconds
  }, [fadeTimer, hasLoggedInteraction]);

  useEffect(() => {
    if (!hasLoggedWelcome) {
      console.log("🎨 AnimatedBackground loaded! Built with love and attention to detail.");
      console.log("👋 Hi there! I'm Dylan, and I made this interactive background just for you!");
      setHasLoggedWelcome(true);
    }
    setMounted(true);
    
    // Only initialize blobs if they don't exist
    setBlobs(prevBlobs => {
      if (prevBlobs.length > 0) return prevBlobs; // Don't reinitialize if blobs exist
      const initialBlobs: Blob[] = Array.from({ length: 8 }, (_, i) => ({
        id: `blob-${i}`,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 60 + 40,
        color: ['#8B5CF6', '#06B6D4', '#3B82F6', '#EC4899', '#10B981', '#F59E0B', '#6366F1', '#A855F7'][i],
        targetX: Math.random() * 100,
        targetY: Math.random() * 100,
        targetSize: Math.random() * 60 + 40,
        speed: Math.random() * 0.02 + 0.01,
        hasMet: false,
        lastMeetingTime: 0,
        movementPhase: 'random' as const,
        isInteracting: false,
        interactionSpeed: 0,
        opacity: 0.3 + (Math.random() * 60 + 40) / 200, // Initial opacity based on size
      }));
      
      return initialBlobs;
    });

  }, [hasLoggedWelcome]); // Only run once on mount

  // Separate effect for event listener
  useEffect(() => {
    const handleButtonClick = (event: Event) => {
      const target = event.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.closest('button')) {
        triggerOrbMovement();
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
            
            if (distance > 0.5) {
              // Calculate parabolic speed based on time elapsed
              const elapsed = currentTime - interactionStartTime;
              const totalDuration = 3000; // 3 seconds total
              const progress = Math.min(elapsed / totalDuration, 1); // 0 to 1
              const parabolicSpeed = 4 * progress * (1 - progress); // Parabolic curve: 0 at start/end, 1 at middle
              
              const moveX = (dx / distance) * blob.speed * 100 * (0.3 + parabolicSpeed);
              const moveY = (dy / distance) * blob.speed * 100 * (0.3 + parabolicSpeed);
              newX += moveX;
              newY += moveY;
            } else {
              newX = blob.targetX;
              newY = blob.targetY;
            }
            
            return {
              ...blob,
              x: Math.max(0, Math.min(100, newX)),
              y: Math.max(0, Math.min(100, newY)),
            };
          });
        }
        
        
        // Normal movement logic
        const isCurrentlyMeeting = checkForMeeting(prevBlobs);
        
        // Occasional fun logs during normal behavior (only once)
        if (prevBlobs.some(blob => blob.movementPhase === 'random' && Math.random() < 0.001) && !hasLoggedInteraction) {
          console.log("🎲 Orbs are doing their thing... (Just like me, always learning and adapting!)");
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
          
          
          
          // Random movement for non-meeting blobs
          if (blob.movementPhase === 'random' && Math.random() < 0.01) {
            newTargetX = Math.random() * 100;
            newTargetY = Math.random() * 100;
            newTargetSize = Math.random() * 60 + 40;
          }
          
          return {
            ...blob,
            x: Math.max(0, Math.min(100, newX)),
            y: Math.max(0, Math.min(100, newY)),
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
    }, 50); // 20fps for better performance

    return () => clearInterval(interval);
  }, [mounted, isInteracting, hasRejoined, interactionStartTime, hasLoggedInteraction]);

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
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 5 }}>
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
            opacity: blob.opacity !== undefined ? blob.opacity : (0.3 + (blob.size / 200)),
            borderRadius: '50%',
            boxShadow: `0 0 ${blob.size * 0.8}px ${blob.color}, inset 0 0 ${blob.size * 0.4}px ${blob.color}80`,
            transform: 'translate(-50%, -50%)',
            transition: 'opacity 0.5s ease-in-out', // Smooth opacity transition
          }}
          animate={{
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
