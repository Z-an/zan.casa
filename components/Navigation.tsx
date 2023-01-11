import styles from "./navigation.module.css";
import Zan from 'public/assets/svg/zan.svg';
import Link from "next/link";
import { ThemeToggle } from './ThemeToggle';

export const Navigation: React.FC = () => {
    return (
        <div className={styles.navigation}>
            <Link href="/">
                <div className={styles.logoContainer}>
                    <Zan />
                </div>
            </Link>
            <ThemeToggle size={'20'}/>
        </div>
    )
}; 