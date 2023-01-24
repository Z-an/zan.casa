'use client'
import styles from './linechart.module.css'
import { motion } from "framer-motion";
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import React, { useState } from 'react';
import { ArrowDown, ArrowUp, Calendar, CaretDown, Check } from 'phosphor-react'

export type ILineChartData = [
    {
        interval: String,
        thisPeriod: Number,
        previousPeriod: Number
    }
]

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

export const TrendBadge: React.FC<{thisPeriodValue: number, lastPeriodValue: number}> = ({thisPeriodValue, lastPeriodValue}) => {
    const lift = ((thisPeriodValue - lastPeriodValue)/lastPeriodValue)*100
    const formattedLift = `${parseFloat(lift.toFixed(0))}%`
    console.log('Uplift:', lift)
    return (
        <div className={`${styles.trendBadge} ${(lift > 0)? styles.greenBadge : styles.redBadge}`}>
            {(lift > 0)? <ArrowUp weight="bold" /> : <ArrowDown weight="bold" />}
            {formattedLift}
        </div>
    )
}


export const ChartNavigationItem: React.FC<{label: string, thisPeriodValue: string, lastPeriodValue: string, selected: boolean, onClick: React.MouseEventHandler<HTMLDivElement>;}> = ({ label, thisPeriodValue, lastPeriodValue, selected, onClick }) => {
    return (
        <div className={styles.chartNavButtonWrapper} onClick={onClick}>
            <div className={`${styles.chartNavButton} ${selected && styles.chartNavButtonSelected}`}>
                <p className={styles.chartNavLabel}>{label}</p>
                <div className={styles.metricContainer}>
                    <h2 className={styles.chartNavMetric}>
                        {thisPeriodValue}
                    </h2>
                    <TrendBadge thisPeriodValue={parseFloat(thisPeriodValue)} lastPeriodValue={parseFloat(lastPeriodValue)} />
                </div>
            </div>
                { ( selected ) ? <motion.div className={styles.chartNavButtonUnderline} layoutId="chartNavButtonUnderline"/> : null }
        </div>
    )
}

export const CustomTooltip: React.FC<{active: boolean, payload: Array<{value: string, fill: string, dataKey: number}>, label: string}> = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className={styles.customTooltip}>
          <p className="label">{`${label} : ${payload[0].value}`}</p>
          <div>
            {payload.map((pld: {value: string, fill: string, dataKey: number}, index: number) => (
              <div key={index} style={{ display: "inline-block", padding: 10 }}>
                <div style={{ color: pld.fill }}>{pld.value}</div>
                <div>{pld.dataKey}</div>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return null;
  };

export const LineChart: React.FC<{data: ILineChartData, primaryColor: string, secondaryColor: string}> = ({ data, primaryColor, secondaryColor }) => {
    return (
        <ResponsiveContainer width="100%" height={352}>
            <AreaChart data={data} margin={{ top: 32, right: 0, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="uv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={primaryColor} stopOpacity={0.2}/>
                        <stop offset="95%" stopColor={primaryColor} stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="pv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={secondaryColor} stopOpacity={0.1}/>
                        <stop offset="95%" stopColor={secondaryColor} stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="interval" tickMargin={8} stroke="var(--gray8)" tick={{ fill: 'var(--gray11)' }} style={{
                    fontSize: '0.875em'
                }}/>
                <CartesianGrid strokeDasharray="1 3" stroke="var(--gray7)" />
                <Tooltip />
                <Area type="monotone" dataKey={Object.keys(data[0])[1]} stroke={primaryColor} fillOpacity={1} fill="url(#uv)" strokeWidth="2"/>
                <Area type="monotone" dataKey={Object.keys(data[0])[2]} stroke={secondaryColor} fillOpacity={1} fill="url(#pv)" strokeWidth="2" strokeDasharray="2 2" />
            </AreaChart>
        </ResponsiveContainer>
    )
}

export const ChartContainer: React.FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <div className={styles.chartContainer}>
            {children}
        </div>
    )
};