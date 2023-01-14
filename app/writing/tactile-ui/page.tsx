'use client'
import { LeftNavigation } from '../../../components/LeftNavigation'
import { ThemeToggle } from '../../../components/ThemeToggle'
import styles from './tactile-ui.module.css'
import Zan from 'public/assets/svg/zan.svg';
import Grid from 'public/assets/textures/grid.png';
import Grain1 from 'public/assets/textures/grain.png';
import Grain2 from 'public/assets/textures/grain2.png';
import Plastic from 'public/assets/textures/plastic.png';
import Light1 from 'public/assets/textures/light1.png';
import Scratch from 'public/assets/textures/scratch.png';
import Cloth from 'public/assets/textures/cloth.png';
import Foil from 'public/assets/textures/foil.png';
import BulletTrain from 'public/assets/textures/bullet-train.jpg';
import Image from 'next/image'
import localFont from '@next/font/local';
import { CSSProperties, SetStateAction, useState } from 'react';
import { adjustHue } from 'polished';
import { motion } from "framer-motion";

const kobataBold = localFont({
  src: "../../../public/assets/fonts/Kobata-Bold.otf",
  weight: '700'
});

const satoshiBold = localFont({
    src: "../../../public/assets/fonts/Satoshi-Bold.otf",
    weight: '700'
  });

const mixBlendModeOptions = [
    'normal',
    'color',
    'color-burn',
    'color-dodge',
    'multiply',
    'screen',
    'darken',
    'lighten',
    'overlay',
    'difference',
    'exclusion',
    'soft-light',
    'hard-light',
    'hue',
    'saturation',
    'luminosity'
]

const textures = [
    {'url': `url(${Grid.src})`, 'obj': Grid},
    {'url': `url(${Grain1.src})`, 'obj': Grain1},
    {'url': `url(${Grain2.src})`, 'obj': Grain2},
    {'url': `url(${Plastic.src})`, 'obj': Plastic},
    {'url': `url(${Light1.src})`, 'obj': Light1},
    {'url': `url(${Scratch.src})`, 'obj': Scratch},
    {'url': `url(${Cloth.src})`, 'obj': Cloth},
    {'url': `url(${Foil.src})`, 'obj': Foil}
]

export default function Home() {
    const [mixBlendMode, setMixBlendMode] = useState('overlay')
    const [brightness, setBrightness] = useState('60')
    const [contrast, setContrast] = useState('70')
    const [textureSrc, setTextureSrc] = useState(`url(${Grid.src})`)
    const [backgroundGradient, setBackgroundGradient] = useState(true)
    const [hue, setHue] = useState('263')

    const gradientColor = adjustHue(22.5, `hsl(${hue}deg 90% 50%)`)
    console.log('gradientColor:', gradientColor)
    
    const blendTextureParams = {
        '--mix-blend-mode': mixBlendMode,
        '--brightness': `${brightness}%`,
        '--contrast': `${contrast}%`,
        '--texture-src': textureSrc,
        '--background': backgroundGradient? `radial-gradient(53.25% 53.25% at 25% 23%, ${gradientColor} 0%, ${gradientColor} 67.71%, hsl(${hue}deg 90% 50%) 100%)`:`hsl(${hue}deg 90% 50%)`,
        '--text': `hsl(${hue}deg 50% 90%)`,
    }

    const today = new Date().toJSON().slice(0, 10);
    
    return (
        <main>
            <LeftNavigation returnPage={'/writing'}/>
            <article>
                <h4>14.01.2023</h4>
                <hr/><hr/>
                <h1>Elements of Tactile UI</h1>
                <h3 className={styles.subHeading}>Sketchpad #1</h3>
                <div className={styles.divider}/>
                <p>Product designers are always looking for new ways to make the elements of their interfaces more <strong>satisfying, tasty, and weighty</strong> to interact with. In the physical-world, product quality is tightly connected to its texture, weight, and craftsmanship.</p>
                <section className={styles.section}>
                    <h2>Gradient borders</h2>
                    <p>To achieve the above result, we need a gradient border. But gradient borders aren't directly supported in CSS3. We're going to have to use pseudo-elements to achieve the result, via: <code>::before</code> and <code>::after</code>.</p>
                    <hr></hr>
                    <div>
                        <div className={styles.gradientBox}></div>
                    </div>
                </section>
                <section className={styles.section}>
                    <h3>The shiny effect</h3>
                    <p>To get the animated "shine" effect, we change the background to a conic gradient, expand its size, and add a 360deg rotation animation.</p>
                    <hr/>
                    <hr/>
                    <hr/>
                    <hr/>
                    <hr/>
                    <hr/>
                    <div className={`${styles.shinyBoxNoParent}`}><Zan /></div>
                    <hr/>
                    <hr/>
                    <hr/>
                    <hr/>
                    <hr/>
                    <hr/>
                    <p>Finally add a parent container with some padding, e.g. 4px (this will become the border) and set to<code>overflow: hidden</code>.</p>
                    <div className={styles.shinyBoxContainer}>
                        <div className={styles.shinyBox}><Zan /></div>
                    </div>
                </section>
                <section className={styles.section}>
                    <h2>Textures</h2>
                    <p>Graphic designers have been using analog textures in digital work for years. And with pseudo-selectors and <code>mix-blend-mode</code>, it's straightforward to leverage in software UI too.</p>
                    <hr></hr>
                    <div className={styles.texturePrototype}>
                        <h3>Texture Blender</h3>
                        <hr></hr>
                        <div className={`${styles.horizontalFlex}`}>
                            <div className={styles.colorTextureCard} style={blendTextureParams as React.CSSProperties}>
                                <h3 className={`${satoshiBold.className} ${styles.demoText}`}>Yo<strong className={kobataBold.className}>u</strong> <strong className={kobataBold.className}>d</strong >on<strong className={kobataBold.className}>'</strong>t<br/><strong className={kobataBold.className}>n</strong>eed <strong className={kobataBold.className}>a</strong>n<br/>app<strong className={kobataBold.className}>.</strong></h3>
                            </div>
                            <div className={`${styles.verticalFlex} ${styles.elevation} ${styles.fullWidth}`}>
                                <div className={styles.formInputContainer}>
                                    <select value={mixBlendMode} id="mixBlendDropdown" onChange={(value) => setMixBlendMode(value.target.value)}>
                                        {mixBlendModeOptions.map((item, index)=>{
                                            return <option key={index} value={item}>{item}</option>
                                        })}
                                    </select>
                                    <label>Mix blend mode</label>
                                </div>
                                <div className={styles.formInputContainer}>
                                    <input type="range" min="1" max="300" value={brightness} id="brightnessSlider" step="10" onChange={(e) => setBrightness(e.target.value)}/>
                                    <label>Brightness</label>
                                </div>
                                <div className={styles.formInputContainer}>
                                    <input type="range" min="1" max="300" value={contrast} id="contrastSlider" step="10" onChange={(e) => setContrast(e.target.value)}/>
                                    <label>Contrast</label>
                                </div>
                                <div className={styles.formInputContainer}>
                                    <input type="range" min="1" max="360" value={hue} id="hueSlider" step="1" onChange={(e) => setHue(e.target.value)}/>
                                    <label>Hue</label>
                                </div>
                                <div className={styles.formInputContainer}>
                                    <input checked={backgroundGradient} type="checkbox" onChange={(e) => setBackgroundGradient(e.target.checked)}/>
                                    <label>Toggle gradient</label>
                                </div>
                            </div>
                        </div>
                        <hr></hr>
                        <hr></hr>
                        <label>Select texture...</label>
                        <hr></hr>
                        <div className={styles.horizontalFlex}>
                            { textures.map((texture, index) => (
                                <div className={styles.textureCard} key={index} onClick={(e) => setTextureSrc(texture.url)}>
                                    { texture.url === textureSrc? (
                                        <motion.div className={styles.selected} layoutId="selected"/>
                                    ) : null }
                                    <Image className={styles.texture} src={texture.obj} alt='grid texture' height={160} width={140} />
                                </div>
                                )
                            )}
                        </div>
                    </div>
                </section>
                <section>
                    <h2>Notes to self</h2>
                    <p>If something goes wrong while trying to position the psuedo-element behind the primary element, it likely relates to the parent. To resolve, try:</p>
                    <ol>
                        <li>Setting a <code>z-index</code> value on the parent container.</li>
                        <li>Removing any <code>display: flex|grid</code> declarations on the parent container.</li>
                        <li>Wrapping the pseudo-element class in a plain <code>div</code> component.</li>
                    </ol>
                    <p>Safari (webkit) doesn't enforce the border-radius of the parent container when <code>overflow: hidden</code> is used to contain animated gradient. To fix this, add <code>isolation: isolate</code> to the parent.</p>
                </section>
            </article>
        </main>
    )
}