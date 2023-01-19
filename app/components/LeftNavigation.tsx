'use client'
import styles from "./leftNavigation.module.css";
import Zan from 'public/assets/svg/zan.svg';
import Link from "next/link";
import { ArrowLeft } from "phosphor-react";
import { useEffect, useState } from "react";

export const LeftNavigation: React.FC<{returnPage: string}> = ({returnPage}) => {

    return (
        <div className={styles.leftHandPane}>
            <Link href={returnPage} scroll={true}>
                <div className={styles.back}><ArrowLeft size={20}/><p>Return</p></div>
            </Link>
        </div>

    )
}; 