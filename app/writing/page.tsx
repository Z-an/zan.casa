import { Post } from '../../components/Post'
import '../globals.css'
import styles from './writing.module.css'

export default function Home() {
  const today = new Date().toJSON().slice(0, 10);
  return (
    <div className={styles.posts}>
        <h1>Writing</h1>
        <section className={styles.postContainer}>
          <h3 className={styles.postContainerHeader}>Product</h3>
          <Post title={'Lorem ipsum dolor sit amet'} slug={'on-elegance'} date={today}/>
          <Post title={'Lorem ipsum dolor sit amet'} slug={'on-elegance'} date={today}/>
          <Post title={'Lorem ipsum dolor sit amet'} slug={'on-elegance'} date={today}/>
          <Post title={'Lorem ipsum dolor sit amet'} slug={'on-elegance'} date={today}/>
          <Post title={'Lorem ipsum dolor sit amet'} slug={'on-elegance'} date={today}/>
        </section>
        <section className={styles.postContainer}>
          <h3 className={styles.postContainerHeader}>Product</h3>
          <Post title={'Lorem ipsum dolor sit amet'} slug={'on-elegance'} date={today}/>
          <Post title={'Lorem ipsum dolor sit amet'} slug={'on-elegance'} date={today}/>
          <Post title={'Lorem ipsum dolor sit amet'} slug={'on-elegance'} date={today}/>
          <Post title={'Lorem ipsum dolor sit amet'} slug={'on-elegance'} date={today}/>
          <Post title={'Lorem ipsum dolor sit amet'} slug={'on-elegance'} date={today}/>
        </section>
        <section className={styles.postContainer}>
          <h3 className={styles.postContainerHeader}>Product</h3>
          <Post title={'Lorem ipsum dolor sit amet'} slug={'on-elegance'} date={today}/>
          <Post title={'Lorem ipsum dolor sit amet'} slug={'on-elegance'} date={today}/>
          <Post title={'Lorem ipsum dolor sit amet'} slug={'on-elegance'} date={today}/>
          <Post title={'Lorem ipsum dolor sit amet'} slug={'on-elegance'} date={today}/>
          <Post title={'Lorem ipsum dolor sit amet'} slug={'on-elegance'} date={today}/>
        </section>
    </div>
  )
}