import styles from './writing.module.css';
import Link from 'next/link';
import { Navigation } from '../../components/navigation/Navigation';

export default async function Layout({
        children,
    }: {
        children: React.ReactNode,
    }) {

    return (
        <div>
            <Navigation/>
        <main className={styles.main}>
            <div className={styles.leftHandPane}><Link href="/">← Index</Link></div>
            <div className={styles.content}>{children}</div>
        </main>
        <footer>Zan Thomson</footer>
        </div>
    );
}