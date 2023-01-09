'use client'
import { useState } from "react";
import styles from "./themeToggle.module.css";
import { Sun, Moon, Monitor } from "phosphor-react";

const changeTheme = (theme:string) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme)
}

export const ThemeToggle: React.FC = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme'));
    console.log('updated theme:',theme)
    const changeTheme = (theme:string) => {
        setTheme(theme)
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme)
    }

    return (
        <div className={styles.themeContainer}>
            <div className={`${styles.themeButton} ${(theme === 'light') && styles.highlighted}`} onClick={() => changeTheme('light')}>
                <Sun size={24} weight={`${theme === 'light'? 'fill' : 'bold'}`}/>
            </div>
            <div className={`${styles.themeButton} ${(theme === 'dark') && styles.highlighted}`} onClick={(e) => changeTheme('dark')}>
                <Moon size={24} weight={`${theme === 'dark'? 'fill' : 'bold'}`}/>
            </div>
            <div className={`${styles.themeButton} ${(theme === 'system') && styles.highlighted}`} onClick={(e) => changeTheme('system')}>
                <Monitor size={24} weight={`${theme === 'system'? 'fill' : 'bold'}`}/>
            </div>
        </div>
    )
}; 