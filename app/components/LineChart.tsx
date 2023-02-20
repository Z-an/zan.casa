import styles from './linechart.module.css';
import { motion } from 'framer-motion';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import React from 'react';
import { TrendDown, TrendUp } from 'phosphor-react';
import { SkeletonLoader } from './Skeleton';


export type ILineChartData = {
  interval: String;
  thisPeriod?: Number | null;
  previousPeriod?: Number | null;
}[];

export const ChartTopBar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className={styles.topBar}>{children}</div>;
};

export const ChartNavigation: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className={styles.chartNav}>{children}</div>;
};

export const ChartModifiersContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className={styles.modifiersContainer}>{children}</div>;
};

export const TrendBadge: React.FC<{ thisPeriodValue: number; lastPeriodValue: number }> = ({
  thisPeriodValue,
  lastPeriodValue
}) => {
  const lift = ((thisPeriodValue - lastPeriodValue) / lastPeriodValue) * 100;
  const formattedFloatLift = parseFloat(lift.toFixed(0));
  const formattedLift = `${formattedFloatLift}%`;

  if (isNaN(formattedFloatLift)) return null;

  return (
    <div className={`${styles.trendBadge} ${lift > 0 ? styles.greenBadge : styles.redBadge}`}>
      {lift > 0 ? <TrendUp weight='bold' /> : <TrendDown weight='bold' />}
      {formattedLift}
    </div>
  );
};

export const ChartNavigationItem: React.FC<{
  label: string;
  thisPeriodValue: string;
  lastPeriodValue?: string;
  color?: string;
  shape?: 'bar' | 'line';
  loading: boolean;
  valueType?: 'dollar' | 'number';
  selected?: boolean;
  fullWidth?: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}> = ({ label, thisPeriodValue, lastPeriodValue, color, shape, loading, valueType, fullWidth, selected, onClick }) => {
  const metricValue = Intl.NumberFormat().format(parseInt(thisPeriodValue));
  console.log('value type',valueType === 'dollar')
  return (
    <div className={`${styles.chartNavButtonWrapper} ${fullWidth && styles.chartNavButtonFullWidth}`} onClick={onClick}>
      <div className={`${styles.chartNavButton} ${selected && styles.chartNavButtonSelected} `}>
      <div className={styles.labelContainer}><div className={ shape === 'bar' ? styles.legendSquare : styles.legendLine } style={{background: color}} /><p className={styles.chartNavLabel}>{label}</p></div>
        <div className={styles.metricContainer}>
          <div className={styles.chartNavMetric}>{valueType === 'dollar' && !loading? <span>$</span> : null }{loading? <SkeletonLoader /> : metricValue}</div>
          {!loading && lastPeriodValue && <TrendBadge thisPeriodValue={parseFloat(thisPeriodValue)} lastPeriodValue={parseFloat(lastPeriodValue)} />}
        </div>
      </div>
      {selected ? <motion.div className={styles.chartNavButtonUnderline} layoutId='chartNavButtonUnderline' /> : null}
    </div>
  );
};

export const CustomTooltip: React.FC<{
  active: boolean;
  payload: Array<{ value: string; fill: string; dataKey: number }>;
  label: string;
}> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.customTooltip}>
        <p className='label'>{`${label} : ${payload[0].value}`}</p>
        <div>
          {payload.map((pld: { value: string; fill: string; dataKey: number }, index: number) => (
            <div key={index} style={{ display: 'inline-block', padding: 10 }}>
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

export const LineChart: React.FC<{
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
        <AreaChart data={data} margin={{ top: 32, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id='uv' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor={primaryColor} stopOpacity={0.2} />
              <stop offset='95%' stopColor={primaryColor} stopOpacity={0} />
            </linearGradient>
            <linearGradient id='pv' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor={secondaryColor} stopOpacity={0.1} />
              <stop offset='95%' stopColor={secondaryColor} stopOpacity={0} />
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
          <CartesianGrid strokeDasharray='1 3' stroke='var(--gray8)' />
          <Tooltip />
          {data && (
            <Area
              type='monotone'
              dataKey={Object.keys(data[0])[1]}
              stroke={primaryColor}
              fillOpacity={1}
              fill='url(#uv)'
              strokeWidth='2'
            />
          )}
          {data && Object.keys(data[0])[2] !== null ? (
            <Area
              type='monotone'
              dataKey={Object.keys(data[0])[2]}
              stroke={secondaryColor}
              fillOpacity={1}
              fill='url(#pv)'
              strokeWidth='2'
              strokeDasharray='2 2'
            />
          ) : null}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export const ChartContainer: React.FC<{ theme?: 'light' | 'dark'; children: React.ReactNode }> = ({
  theme,
  children
}) => {
  document.documentElement.setAttribute('data-theme', theme ? theme : 'light');
  return <div className={styles.chartContainer}>{children}</div>;
};
