import { LeftNavigation } from '../../components/LeftNavigation';
import { Post } from '../../components/Post'
import '../globals.css'
import styles from './writing.module.css'

export default function Home() {
  const today = new Date().toJSON().slice(0, 10);
  return (
    <main>
      <LeftNavigation returnPage={'/'}/>
      <div className={styles.content}>
        <div className={styles.posts}>
            <h1>Writing</h1>
            <ul className={styles.postContainer}>
              <h3 className={styles.postContainerHeader}>Design Engineering</h3>
              <Post title={'Elements of Tactile UI: Sketchpad #1'} slug={'tactile-ui'} date={today}/>
              <Post title={'Lorem ipsum dolor sit amet'} slug={'on-elegance'} date={today}/>
              <Post title={'Lorem ipsum dolor sit amet'} slug={'on-elegance'} date={today}/>
              <Post title={'Lorem ipsum dolor sit amet'} slug={'on-elegance'} date={today}/>
              <Post title={'Lorem ipsum dolor sit amet'} slug={'on-elegance'} date={today}/>
            </ul>
            <ul className={styles.postContainer}>
              <h3 className={styles.postContainerHeader}>Product</h3>
              <Post title={'Lorem ipsum dolor sit amet'} slug={'on-elegance'} date={today}/>
              <Post title={'Lorem ipsum dolor sit amet'} slug={'on-elegance'} date={today}/>
              <Post title={'Lorem ipsum dolor sit amet'} slug={'on-elegance'} date={today}/>
              <Post title={'Lorem ipsum dolor sit amet'} slug={'on-elegance'} date={today}/>
              <Post title={'Lorem ipsum dolor sit amet'} slug={'on-elegance'} date={today}/>
            </ul>
            <ul className={styles.postContainer}>
              <h3 className={styles.postContainerHeader}>Product</h3>
              <Post title={'Lorem ipsum dolor sit amet'} slug={'on-elegance'} date={today}/>
              <Post title={'Lorem ipsum dolor sit amet'} slug={'on-elegance'} date={today}/>
              <Post title={'Lorem ipsum dolor sit amet'} slug={'on-elegance'} date={today}/>
              <Post title={'Lorem ipsum dolor sit amet'} slug={'on-elegance'} date={today}/>
              <Post title={'Lorem ipsum dolor sit amet'} slug={'on-elegance'} date={today}/>
            </ul>
        </div>
      </div>
    </main>
  )
}