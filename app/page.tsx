import Image from 'next/image'
import './globals.css'
import Zan from 'public/assets/svg/zan.svg';
import styles from './page.module.css'
import localFont from '@next/font/local'

const snellBold = localFont({
  src: "../public/assets/fonts/SnellBT-Bold.otf",
  weight: '500'
});

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.navigation}>
        <div className={styles.logoContainer}>
          <Zan />
        </div>
      </div>
      <div className={styles.content}>
      <div>
        <div className={styles.headline}>
          <h1><strong className={snellBold.className}>Z</strong>an Thomson</h1>
        </div>
        <p>Surfing curiosity. Playing with design, code, and meticulously crafted software. This is a canvas for my work, experiments, thoughts.</p>
        <p>Currently: <strong>Product Lead at Liven.</strong> Building towards an independent practice. </p>
      </div>
      </div>
      <div className={styles.links}>
          <section>
            <h3>Building</h3>
            <hr/>
            <a>Nomnie</a>
          </section>
          <section>
            <h3>Exploring</h3>
            <hr/>
            <a>Design Systems</a>
            <a>Brand Identity</a>
            <a>Type Design</a>
            <a>UI Engineering</a>
          </section>
          <section>
            <h3>Writing</h3>
            <hr/>
            <a>Article 1</a>
          </section>
        </div>
    </main>
  )
}