import Image from 'next/image'
import './globals.css'
import Zan from 'public/assets/svg/zan.svg';
import styles from './page.module.css'
import localFont from '@next/font/local'
import { Navigation } from '../components/navigation/Navigation'

const snellBold = localFont({
  src: "../public/assets/fonts/SnellBT-Bold.otf",
  weight: '500'
});

export default function Home() {
  return (
    <main className={styles.main}>
      <Navigation />
      <div className={styles.content}>
        <div className={styles.bio}>
          <div>
            <div className={styles.headline}>
              {/*<h1><strong className={snellBold.className}>Z</strong>an Thomson</h1>-->*/}
              <h1>Zan Thomson</h1>
            </div>
            <p>Surfing curiosity, learning by building. Playing with design, code, entrepeneurship, and meticulously crafted software.</p><p>Infrequently documenting thoughts, experiments.</p>
            <p></p>
            <p>Currently: <strong>Product Lead at Liven.</strong> Building towards an independent practice.</p>
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
              <a>Dynamic themes, with just css</a>
              <a>Design Systems for tiny teams</a>
              <a>On "elegant" design</a>
            </section>
          </div>
        </div>
    </main>
  )
}