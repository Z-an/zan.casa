'use client'
import styles from "./leftNavigation.module.css";
import Zan from 'public/assets/svg/zan.svg';
import Link from "next/link";
import { ArrowLeft } from "phosphor-react";
import { useEffect, useState } from "react";

export const LeftNavigation: React.FC = () => {

    const returnToPage = () => {
        const topPath = document.location.pathname.split("/").pop()
        const parentPath = document.location.pathname.replace(`${topPath}`, "")
        console.log('topPath:', topPath)
        console.log('parentPath:', parentPath)
        window.location.href = parentPath
    }

    return (
        <div className={styles.leftHandPane}>
            <div onClick={() => returnToPage()}>
                <div className={styles.back}><ArrowLeft size={20}/><p>Return</p></div>
            </div>
        </div>

    )
}; 