'use client'
import { useState, useEffect } from "react";
import styles from "./themeToggle.module.css";
import { Sun, Moon, Monitor } from "phosphor-react";

export const ThemeToggle: React.FC<{size: string}> = (size) => {
    const [theme, setTheme] = useState('system');

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
      }, [theme]);

    return (
        <div className={styles.themeContainer}>
            <div className={`${styles.themeButton} ${(theme === 'light') && styles.highlighted}`} onClick={() => setTheme('light')}>
                <Sun size={20} weight={`${theme === 'light'? 'fill' : 'regular'}`}/>
            </div>
            <div className={`${styles.themeButton} ${(theme === 'dark') && styles.highlighted}`} onClick={() => setTheme('dark')}>
                <Moon size={20} weight={`${theme === 'dark'? 'fill' : 'regular'}`}/>
            </div>
            <div className={`${styles.themeButton} ${(theme === 'system') && styles.highlighted}`} onClick={() => setTheme('system')}>
                <Monitor size={20} weight={`${theme === 'system'? 'fill' : 'regular'}`}/>
            </div>
        </div>
    )
}; 