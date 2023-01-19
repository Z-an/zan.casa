'use client'
import styles from './linechart.module.css'
import { motion } from "framer-motion";
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import React, { useState } from 'react';
import { Calendar, CaretDown, Check } from 'phosphor-react'


export const ChartTopBar: React.FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <div className={styles.topBar}>
            {children}
        </div>
    )
}

export const ChartNavigation: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [selectedNavItem, setSelectedNavItem] = useState(0)
    return (
        <div className={styles.chartNav}>
            {children}
        </div>
    )
};

export const ChartModifiersContainer: React.FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <div className={styles.modifiersContainer}>
            {children}
        </div>
    )
}


export const ChartNavigationItem: React.FC<{label: string, metric: string, selected: boolean, onClick: React.MouseEventHandler<HTMLDivElement>;}> = ({ label, metric, selected, onClick }) => {
    return (
        <div className={styles.chartNavButtonWrapper} onClick={onClick}>
            <div className={`${styles.chartNavButton} ${selected && styles.chartNavButtonSelected}`}>
                <p className={styles.chartNavLabel}>{label}</p>
                <h2 className={styles.chartNavMetric}>{metric}</h2>
            </div>
                { ( selected ) ? <motion.div className={styles.chartNavButtonUnderline} layoutId="chartNavButtonUnderline"/> : null }
        </div>
    )
}

export const LineChart: React.FC<{data: Array<Object>, primaryColor: string, secondaryColor: string}> = ({ data, primaryColor, secondaryColor }) => {
    return (
        <ResponsiveContainer width="100%" height={352}>
            <AreaChart data={data} margin={{ top: 48, right: 0, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="uv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={primaryColor} stopOpacity={0.1}/>
                        <stop offset="95%" stopColor={primaryColor} stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="pv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={secondaryColor} stopOpacity={0.1}/>
                        <stop offset="95%" stopColor={secondaryColor} stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="interval" tickMargin={8} stroke="#D7DBDF" tick={{ fill: '#687076' }} style={{
                    fontSize: '0.875em'
                }}/>
                <CartesianGrid strokeDasharray="1 3" />
                <Tooltip />
                <Area type="monotone" dataKey={Object.keys(data[0])[1]} stroke={primaryColor} fillOpacity={1} fill="url(#uv)" strokeWidth="2"/>
                <Area type="monotone" dataKey={Object.keys(data[0])[2]} stroke={secondaryColor} fillOpacity={1} fill="url(#pv)" strokeWidth="2" strokeDasharray="2 2" />
            </AreaChart>
        </ResponsiveContainer>
    )
}

export const ChartContainer: React.FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <div className={styles.chartContainer}>{children}</div>
    )
};