'use client'
import styles from './barchart.module.css'
import { motion } from "framer-motion";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, LabelList, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import React, { useState } from 'react';
import { ArrowDown, ArrowUp, Calendar, CaretDown, CaretLeft, CaretRight, Check } from 'phosphor-react'
import { SkeletonLoader } from "./Skeleton";

const CustomizedLabel:React.FC<{x: number, y: number, stroke: string, value: number}> = ({ x, y, stroke, value}) => {
    return (
        <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
            {value}
        </text>
    );
}
  
const CustomizedAxisTick = (props:any) => {
    const {x, y, fill, payload} = props;
    console.log("props: ", props)
    return (
        <g transform={`translate(${x},${y})`}>
            <text x={props.x} y={props.y} dy={16} textAnchor="end" fill={props.fill} transform="rotate(-35)">
            {payload.value}
            </text>
        </g>
    );
}

const BarChartContainer: React.FC<{children: React.ReactNode}> = ({ children }) => {
    return (
        <div className={styles.barChartContainer}>{children}</div>
    )
}

export const VerticalBarChart: React.FC<{data: Array<object>, loading: boolean, colours: Array<string>}> = ({ data, loading, colours }) => {
    return (
        <div>
            { loading && (
                <div className={styles.loadingContainer}>
                    <div className={styles.shinyBoxContainer}>
                        <div className={styles.shinyBox}>Loading...</div>
                    </div>
                </div>
            )}
            <ResponsiveContainer width={286} height={408}>
            <BarChart data={data} layout='vertical' barGap={22} barSize={18} margin={{right: -12, left: 48, top: 12}}>
                <XAxis type="number" hide reversed tick={<CustomizedAxisTick />}/>
                <YAxis dataKey="name" type="category" hide orientation='right'/>
                { Object.keys(data[0]).map((value, index) => (
                    (index < 10) && <Bar key={index} dataKey={value} fill={colours[index]} radius={8}><LabelList dataKey={value} position="right" offset='10' style={{ fill: `${colours[index]}` }} fontSize='14'></LabelList></Bar> 
                ))}
            </BarChart>
            </ResponsiveContainer>
        </div>
    )
}


export const RankedList: React.FC<{data?: Array<object>, loading: boolean, colours: Array<string>}> = ({data, loading, colours}) => {
    const listData = (data ? Object.keys(data[0]) : new Array(10).fill(null));
    console.log('listData', listData)
    return (
        <div className={styles.rankedList}>
            { listData.map((value, index) => (
                (index < 10) && <div key={index} className={styles.rankedListRow} style={{color: colours[index]}}>
                    <span className={styles.rankedListNumber}>{index + 1}</span>
                    <div className={styles.rankedListRowTitle}>{value || <SkeletonLoader />}</div>
                </div>
            ))}
        </div>
    )
}


export const BarChartComponent: React.FC<{loading: boolean, data: Array<object>, colours: Array<string>}> = ({ loading, data, colours }) => {
    return (
        <BarChartContainer>
            <div className={styles.leftHandSide}><RankedList data={data} loading={loading} colours={colours}/></div>
            <VerticalBarChart data={data} loading={loading} colours={colours} />
        </BarChartContainer>
    )
}

export const BarChartNavigation: React.FC<{}> = () => {
    return (
        <div className={styles.barChartNavigation}>
            <div className={styles.barChartHeader}>
                <label className={styles.chartLabel}><strong>Top pages</strong> by</label>
                <h1>Views</h1>
            </div>
            <div className={styles.pageNumberContainer}>
                <label>Page <strong>1 of 4</strong></label>
                <CaretLeft size={24} />
                <CaretRight size={24} />
            </div>
        </div>
    )
}