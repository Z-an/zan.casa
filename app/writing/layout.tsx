import styles from './writing.module.css';
import Link from 'next/link';
import { LeftNavigation } from '../../components/LeftNavigation';

export default async function Layout({
        children,
    }: {
        children: React.ReactNode,
    }) {

    return (
        <main className={styles.main}>
            <LeftNavigation />
            <div className={styles.content}>{children}</div>
        </main>
    );
}