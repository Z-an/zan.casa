'use client'
import Image from 'next/image'
import './globals.css'
import Zan from 'public/assets/svg/zan.svg';
import styles from './page.module.css'
import localFont from '@next/font/local'
import Link from 'next/link';
import { animate, motion, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';

const snellBold = localFont({
  src: "../public/assets/fonts/SnellBT-Bold.otf",
  weight: '500'
});

export default function Home() {

  // mouse position
  const mouseX = useMotionValue(
    typeof window !== 'undefined' ? window.innerWidth / 2 : 0
  );
  const mouseY = useMotionValue(
    typeof window !== 'undefined' ? window.innerHeight / 2 : 0
  );

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

  return (
    <main>
      <article>
        <div className={styles.bio}>
          <div>
            <div className={styles.headline}>
              <h1>Zan Thomson</h1>
            </div>
            <p>Surfing curiosity, learning by building. Playing with design, code and meticulously crafted software.</p>
            <p>Currently: <strong>Product Lead at Liven.</strong> Building towards an independent practice.</p>
          </div>
        </div>
        <div className={styles.links}>
            <section>
              <h3>Projects</h3>
              <hr/>
            </section>
            <section>
              <h3>Prototypes</h3>
              <hr/>
            </section>
            <section>
              <h3>Writing</h3>
              <hr/>
              <Link href="/writing/tactile-ui">Elements of Tactile UI</Link>
            </section>
          </div>
        </article>
    </main>
  )
}