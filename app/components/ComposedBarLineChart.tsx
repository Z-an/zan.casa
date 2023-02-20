import styles from './linechart.module.css';
import { motion } from 'framer-motion';
import { Area, AreaChart, Bar, CartesianGrid, ComposedChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import React from 'react';
import { SmileySad, TrendDown, TrendUp } from 'phosphor-react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


export type ILineChartData = {
  interval: String;
  thisPeriod?: Number | null;
  previousPeriod?: Number | null;
}[];


export const ComposedBarLineChart: React.FC<{
  data: ILineChartData | undefined;
  loading?: boolean;
  primaryColor: string;
  secondaryColor: string;
  error?: boolean;
}> = ({ data, loading, primaryColor, secondaryColor, error }) => {
  return (
    <div>
      {loading && (
        <div className={styles.loadingContainer}>
          <div className={styles.shinyBoxContainer}>
            <div className={styles.shinyBox}>Loading...</div>
          </div>
        </div>
      )}
      {error && (
        <div className={styles.loadingContainer}>
          <div className={styles.shinyBoxContainer}>
            <div className={styles.errorBox}>Something went wrong.<br/>Please try again.</div>
          </div>
        </div>
      )}
      <ResponsiveContainer width='100%' height={352}>
        <ComposedChart data={data} margin={{ top: 32, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id='uv' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor={'#FF3C6E'} stopOpacity={0.2} />
              <stop offset='95%' stopColor={'#FF3C6E'} stopOpacity={0} />
            </linearGradient>
            <linearGradient id='pv' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor={'#FF3CFF'} stopOpacity={0.2} />
              <stop offset='95%' stopColor={'#FF3CFF'} stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey='interval'
            tickMargin={8}
            stroke='var(--gray7)'
            tick={{ fill: 'var(--gray11)' }}
            style={{
              fontSize: '0.875em'
            }}
          />
          <YAxis yAxisId="left" orientation="left" stroke="var(--gray7)" tick={{ fill: 'var(--gray11)' }} style={{fontSize: '0.875em'}}  />
          <YAxis yAxisId="right" orientation="right" stroke="var(--gray7)" tick={{ fill: 'var(--gray11)' }} style={{fontSize: '0.875em'}}   />
          <CartesianGrid strokeDasharray='1 3' stroke='var(--gray8)' />
          {data && (
            <Area
              type='monotone'
              dataKey={Object.keys(data[0])[1]}
              stroke={'#FF3C6E'}
              fillOpacity={1}
              fill='url(#uv)'
              strokeWidth='2'
              yAxisId="left"
            />
          )}
          {data && Object.keys(data[0])[2] !== null ? (
            <Area
              type='monotone'
              dataKey={Object.keys(data[0])[2]}
              stroke={'#FF3CFF'}
              fillOpacity={1}
              fill='url(#pv)'
              strokeWidth='2'
              yAxisId="left"
            />
          ) : null}
          { data && <Bar dataKey={Object.keys(data[0])[3]}barSize={20} fill="#11B5CB" yAxisId="right" radius={4} /> }
          { data && Object.keys(data[0])[4] !== null ? (<Bar dataKey={Object.keys(data[0])[4]}barSize={20} fill="#115FCB" yAxisId="right" radius={4}/> ) : null }
          <Tooltip />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};