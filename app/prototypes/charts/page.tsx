'use client'
import { LeftNavigation } from '../../../components/LeftNavigation'
import { ThemeToggle } from '../../../components/ThemeToggle'
import styles from './charts.module.css'
import Image from 'next/image'
import localFont from '@next/font/local';
import { motion } from "framer-motion";
import BarChartNomnieImage from "/public/assets/BarChartNomnie.png";
import LineChartNomnieImage from "/public/assets/LineChartNomnie.png";
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts'
import { useState } from 'react';

const kobataBold = localFont({
  src: "../../../public/assets/fonts/Kobata-Bold.otf",
  weight: '700'
});

const satoshiBold = localFont({
    src: "../../../public/assets/fonts/Satoshi-Bold.otf",
    weight: '700'
  });

const navItems = [
    {
        label: 'Total impressions',
        metric: '36.4k'
    },
    {
        label: 'Unique users',
        metric: '42.1k'
    },
    {
        label: 'Clicks per session',
        metric: '46.2%'
    }
]

const monthlyImpressionsData = [
    {
      name: 'Jan',
      thisYear: 4000,
      lastYear: 2400,
    },
    {
      name: 'Feb',
      thisYear: 3000,
      lastYear: 1398,
    },
    {
      name: 'March',
      thisYear: 2000,
      lastYear: 9800,
    },
    {
      name: 'April',
      thisYear: 2780,
      lastYear: 3908,
    },
    {
      name: 'May',
      thisYear: 1890,
      lastYear: 4800,
    },
    {
      name: 'June',
      thisYear: 2390,
      lastYear: 3800,
    },
    {
      name: 'July',
      thisYear: 3490,
      lastYear: 4300,
    },
    {
        name: 'Aug',
        thisYear: 8240,
        lastYear: 6000,
      },
      {
        name: 'Sept',
        thisYear: 8800,
        lastYear: 4300,
      },
      {
        name: 'Oct',
        thisYear: 5500,
        lastYear: 5000,
      },
      {
        name: 'Nov',
        thisYear: 6800,
        lastYear: 4500,
      },
      {
        name: 'Dec',
        thisYear: 7600,
        lastYear: 3800,
      }
  ];

  const monthlyClickRateData = [
    {
      name: 'Jan',
      thisYear: 586,
      lastYear: 244,
    },
    {
      name: 'Feb',
      thisYear: 800,
      lastYear: 600,
    },
    {
      name: 'March',
      thisYear: 600,
      lastYear: 1200,
    },
    {
      name: 'April',
      thisYear: 1000,
      lastYear: 400,
    },
    {
      name: 'May',
      thisYear: 1200,
      lastYear: 600,
    },
    {
      name: 'June',
      thisYear: 2390,
      lastYear: 800,
    },
    {
      name: 'July',
      thisYear: 3490,
      lastYear: 900,
    },
    {
        name: 'Aug',
        thisYear: 8240,
        lastYear: 1000,
      },
      {
        name: 'Sept',
        thisYear: 8800,
        lastYear: 4300,
      },
      {
        name: 'Oct',
        thisYear: 5500,
        lastYear: 5000,
      },
      {
        name: 'Nov',
        thisYear: 6800,
        lastYear: 4500,
      },
      {
        name: 'Dec',
        thisYear: 7600,
        lastYear: 3800,
      }
  ];

  const monthlyUsersData = [
    {
      name: 'Jan',
      thisYear: 4000,
      lastYear: 2400,
    },
    {
      name: 'Feb',
      thisYear: 3000,
      lastYear: 1398,
    },
    {
      name: 'March',
      thisYear: 2000,
      lastYear: 9800,
    },
    {
      name: 'April',
      thisYear: 2780,
      lastYear: 3908,
    },
    {
      name: 'May',
      thisYear: 1890,
      lastYear: 4800,
    },
    {
      name: 'June',
      thisYear: 2390,
      lastYear: 3800,
    },
    {
      name: 'July',
      thisYear: 3490,
      lastYear: 4300,
    },
    {
        name: 'Aug',
        thisYear: 8240,
        lastYear: 6000,
      },
      {
        name: 'Sept',
        thisYear: 8800,
        lastYear: 4300,
      },
      {
        name: 'Oct',
        thisYear: 5500,
        lastYear: 5000,
      },
      {
        name: 'Nov',
        thisYear: 6800,
        lastYear: 4500,
      },
      {
        name: 'Dec',
        thisYear: 7600,
        lastYear: 3800,
      }
  ];

const dataDict = [
    monthlyImpressionsData,
    monthlyUsersData,
    monthlyClickRateData
]

export default function Home() {
    const [selectedNavOption, setSelectedNavOption] = useState({label: 'Total impressions', index: 0})

    return (
        <main>
            <LeftNavigation returnPage={'/prototypes'}/>
            <article>
                <h4>16.01.2023</h4>
                <hr/><hr/>
                <h1>Visualising Data</h1>
                <h3 className={styles.subHeading}>Exploring popular charting libraries.</h3>
                <div className={styles.divider}/>
                <p>This is a page for evaluating various charting library solutions, based on designs from the Nomnie design system. When evaluating solutions, we care about:</p>
                    <ol>
                        <li>Ability to simply and accurately reflect designs (custom type, colour, etc).</li>
                        <li>Simplicity of API.</li>
                        <li>Mobile responsiveness.</li>
                        <li>Support across all browsers.</li>
                        <li>CSS framework agnosticism.</li>
                    </ol>
                <div className={styles.imageContainer}>
                    <Image src={BarChartNomnieImage} alt="bar chart nomnie image" fill={true} />
                </div>
                <div className={styles.imageContainer}>
                    <Image src={LineChartNomnieImage} alt="bar chart nomnie image" fill={true} />
                </div>
                <section className={styles.section}>
                    <h2>Rechart</h2>
                    <div className={styles.divider} />
                    <p>First up is Rechart.</p>
                    <hr></hr>
                    <div className={styles.lineChart}>
                        <div className={styles.chartNav}>
                            { navItems.map((item, index) => (
                                <div key={index} className={styles.chartNavButton} onClick={(e) => setSelectedNavOption({'label': item.label, 'index': index})}>
                                    <p className={styles.chartNavLabel}>{item.label}</p>
                                    <h2 className={styles.chartNavMetric}>{item.metric}</h2>
                                    { ( selectedNavOption.label === item.label )? 
                                        <motion.div className={styles.chartNavButtonUnderline} layoutId="chartNavButtonUnderline"/> : null }
                                </div>
                                ))
                            }
                        </div>
                        <AreaChart width={640} height={250} data={dataDict[selectedNavOption.index]} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorthisYear" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#0091FF" stopOpacity={0.1}/>
                                    <stop offset="95%" stopColor="#0091FF" stopOpacity={0}/>
                                </linearGradient>
                                <linearGradient id="colorlastYear" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#8E4EC6" stopOpacity={0.1}/>
                                    <stop offset="95%" stopColor="#8E4EC6" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                                <XAxis dataKey="name" tickMargin={8} stroke="#D7DBDF" tick={{ fill: '#687076' }} style={{
                                    fontSize: '0.875em'
                                }}/>
                                {/*<YAxis tickMargin={8}  stroke="#D7DBDF" tick={{ fill: '#687076' }} style={{
                                    fontSize: '0.875em',
                                    marginRight: '1rem',
                                }}/>*/}
                                <CartesianGrid strokeDasharray="1 5" />
                                <Tooltip />
                                <Area type="monotone" dataKey="thisYear" stroke="#006ADC" fillOpacity={1} fill="url(#colorthisYear)" strokeWidth="2"/>
                                <Area type="monotone" dataKey="lastYear" stroke="#8E4EC6" fillOpacity={1} fill="url(#colorlastYear)" strokeWidth="2" strokeDasharray="2 2" />
                        </AreaChart>
                    </div>
                </section>
            </article>
        </main>
    )
}