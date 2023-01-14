import Image from 'next/image'
import './globals.css'
import Zan from 'public/assets/svg/zan.svg';
import styles from './page.module.css'
import localFont from '@next/font/local'
import Link from 'next/link';

const snellBold = localFont({
  src: "../public/assets/fonts/SnellBT-Bold.otf",
  weight: '500'
});

export default function Home() {
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
              <a>Nomnie</a>
            </section>
            <section>
              <h3>Prototypes</h3>
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
              <Link href="/writing">On Elegant Software</Link>
            </section>
          </div>
        </article>
    </main>
  )
}