import styles from "./navigation.module.css";
import Zan from 'public/assets/svg/zan.svg';
import { ThemeToggle } from '../../components/ThemeToggle';

export const Navigation: React.FC = () => {
    return (
        <div className={styles.navigation}>
            <div className={styles.logoContainer}>
                <Zan />
            </div>
            <ThemeToggle size={'20'}/>
        </div>
    )
}; 