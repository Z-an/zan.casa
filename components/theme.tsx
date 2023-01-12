'use client'
import { useState, useEffect } from "react";
import styles from "./theme.module.css";
import { Sun, Moon, Monitor } from "phosphor-react";

export const Theme: React.FC<{size: string}> = (size) => {
    const [theme, setTheme] = useState('system');

    useEffect(() => {
        const localStorageTheme = localStorage.getItem('theme')
        const savedTheme = localStorageTheme !== null? localStorageTheme : 'system'
        setTheme(savedTheme)
        document.documentElement.setAttribute('data-theme', savedTheme);
      }, []);

    const onSelection = ( themeSelection: string ) => {
        localStorage.setItem('theme', themeSelection);
        document.documentElement.setAttribute('data-theme', themeSelection);
        setTheme(themeSelection)
    }

    return (
        <div className={styles.themeContainer}>
            <div className={`${styles.themeButton} ${(theme === 'light') && styles.highlighted}`} onClick={() => onSelection('light')}>
                <Sun size={20} weight={`${theme === 'light'? 'fill' : 'regular'}`}/>
            </div>
            <div className={`${styles.themeButton} ${(theme === 'dark') && styles.highlighted}`} onClick={() => onSelection('dark')}>
                <Moon size={20} weight={`${theme === 'dark'? 'fill' : 'regular'}`}/>
            </div>
            <div className={`${styles.themeButton} ${(theme === 'system') && styles.highlighted}`} onClick={() => onSelection('system')}>
                <Monitor size={20} weight={`${theme === 'system'? 'fill' : 'regular'}`}/>
            </div>
        </div>
    )
}; 