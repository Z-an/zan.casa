'use client'
import styles from './shinyCard.module.css'
import localFont from '@next/font/local';
import { animate, motion, useMotionTemplate, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import React from 'react';
import { setConstantValue } from 'typescript';

const kobataBold = localFont({
    src: "../public/assets/fonts/Kobata-Bold.otf",
    weight: '700'
  });
  
  const satoshiBold = localFont({
      src: "../public/assets/fonts/Satoshi-Bold.otf",
      weight: '700'
    });

export const Card: React.FC = () => {

    const [hoverState, setHoverState] = useState(false)

    const mouseX = useMotionValue(
        typeof window !== 'undefined' ? window.innerWidth / 2 : 0
    );
    const mouseY = useMotionValue(
        typeof window !== 'undefined' ? window.innerHeight / 2 : 0
    );
    
    // handle mouse move on document
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // animate mouse x and y
            animate(mouseX, e.clientX);
            animate(mouseY, e.clientY);
        };
        if (typeof window === 'undefined') return;
        // recalculate grid on resize
        window.addEventListener('mousemove', handleMouseMove);
        // cleanup
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [mouseX, mouseY]);

    const cardRef = useRef<HTMLDivElement>(null);

    const dampen = 10;
    const rotateX = useTransform<number, number>(mouseY, (newMouseY) => {
        if((!cardRef.current)  || hoverState===false) return (0 / dampen);
        const rect = cardRef.current.getBoundingClientRect();
        const newRotateX = newMouseY - rect.top - rect.height / 2;
        return -newRotateX / dampen;
    });
    const rotateY = useTransform(mouseX, (newMouseX) => {
        if ((!cardRef.current) || hoverState===false) return (0 / dampen);
        const rect = cardRef.current.getBoundingClientRect();
        const newRotateY = newMouseX - rect.left - rect.width / 2;
        return newRotateY / dampen;
    });

    const diagonalMovement = useTransform<number, number>(
        [rotateX, rotateY],
        ([newRotateX, newRotateY]) => {
            const position: number = newRotateX + newRotateY;
            return position;
        }
    );
    const sheenPosition = useTransform(
        diagonalMovement,
        [-30, 30],
        [-100, 200]
    );

    console.log('sheen position', sheenPosition)

    const sheenOpacity = useTransform(
        sheenPosition,
        [-100, 50, 200],
        [0.5, 0.65, 0.5]
      );
    
    const noDampeningRotateX = useTransform<number, number>(mouseY, (newMouseY) => {
        if((!cardRef.current)  || hoverState===false) return (0 / dampen);
        const rect = cardRef.current.getBoundingClientRect();
        const newRotateX = newMouseY - rect.top - rect.height / 4;
        return Math.abs(newRotateX) / 3;
    });
    const noDampeningRotateY = useTransform(mouseX, (newMouseX) => {
        if ((!cardRef.current) || hoverState===false) return (0 / dampen);
        const rect = cardRef.current.getBoundingClientRect();
        const newRotateY = newMouseX - rect.left - rect.width / 4;
        return Math.abs(newRotateY) / 3;
    });  

    const sheenGradient = useMotionTemplate`linear-gradient(
        55deg, 
        transparent, 
        rgba(50 48 217 / ${sheenOpacity}) ${sheenPosition}%,
        transparent)`;
    
    const radialGradient = useMotionTemplate`linear-gradient(
        55deg, 
        transparent, 
        rgba(50 48 217 / ${sheenOpacity}) ${sheenPosition}%,
        transparent), radial-gradient(30% 30% at ${noDampeningRotateY}% ${noDampeningRotateX}%, #100DBE 0%, rgba(16, 13, 190, 0) 60%, rgba(16, 13, 190, 0) 60%)`;


    const sheen = hoverState? sheenGradient:'';
    

    return (
        <div className={styles.prototypeContainer}>
            <motion.div className={`${styles.rotationWrapper} ${!hoverState && styles.slowTransitionWrapper}`} style={{rotateX, rotateY}}>
                <div className={styles.dotGrid} />
                <motion.div className={styles.cardWrapper} ref={cardRef} style={{ backgroundImage: sheen, opacity: 1 }} onMouseOver={(e) => setHoverState(true)} onMouseLeave={(e) => setHoverState(false)}>
                    <div className={styles.cardContainer}>
                    <h1 className={`${satoshiBold.className} ${styles.demoText}`}>Yo<strong className={kobataBold.className}>u</strong> <strong className={kobataBold.className}>d</strong >on<strong className={kobataBold.className}>'</strong>t<br/><strong className={kobataBold.className}>n</strong>eed <strong className={kobataBold.className}>a</strong>n<br/>app<strong className={kobataBold.className}>.</strong></h1>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}