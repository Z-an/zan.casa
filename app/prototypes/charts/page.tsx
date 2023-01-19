'use client'
import { LeftNavigation } from '../../components/LeftNavigation'
import { ThemeToggle } from '../../components/ThemeToggle'
import styles from './charts.module.css'
import Image from 'next/image'
import localFont from '@next/font/local';
import { motion } from "framer-motion";
import BarChartNomnieImage from "/public/assets/BarChartNomnie.png";
import LineChartNomnieImage from "/public/assets/LineChartNomnie.png";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { useState } from 'react';
import { Calendar, CaretDown } from 'phosphor-react'
import { Toggle } from '../../components/ToggleGroup'

const kobataBold = localFont({
  src: "../../../public/assets/fonts/Kobata-Bold.otf",
  weight: '700'
});

const satoshiBold = localFont({
    src: "../../../public/assets/fonts/Satoshi-Bold.otf",
    weight: '700'
  });

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

const actualData =  {
    message: "success",
    total_impressions: 208348,
    unique_users: 145146,
    data: [
        {
            interval: "Jan",
            impressions: 10057,
            new_users: 7022
        },
        {
            interval: "Dec",
            impressions: 20641,
            new_users: 14376
        },
        {
            interval: "Nov",
            impressions: 19709,
            new_users: 13422
        },
        {
            interval: "Oct",
            impressions: 20301,
            new_users: 13378
        },
        {
            interval: "Sept",
            impressions: 22380,
            new_users: 14725
        },
        {
            interval: "Aug",
            impressions: 20242,
            new_users: 14067
        },
        {
            interval: "July",
            impressions: 21560,
            new_users: 14792
        },
        {
            interval: "June",
            impressions: 18838,
            new_users: 13977
        },
        {
            interval: "May",
            impressions: 11593,
            new_users: 8294
        },
        {
            interval: "Apr",
            impressions: 17132,
            new_users: 12354
        },
        {
            interval: "Mar",
            impressions: 12451,
            new_users: 8848
        },
        {
            interval: "Feb",
            impressions: 11408,
            new_users: 8433
        },
        {
            interval: "Jan",
            impressions: 1442,
            new_users: 1059
        }
    ]
}


const navItems = [
    {
        label: 'Page views',
        metric: Intl.NumberFormat().format(actualData.total_impressions)
    },
    {
        label: 'Visitors',
        metric: Intl.NumberFormat().format(actualData.unique_users)
    },
    {
        label: 'New Visitors',
        metric: '46.2%'
    }
]

function convertToMonth(dateString: string){
    const date = new Date(dateString);
    const month = date.toLocaleString('default', { month: 'short'});
    return month
};

const cleanData = actualData.data.reverse()


const dataDict = [
    monthlyImpressionsData,
    monthlyUsersData,
    monthlyClickRateData
]

export default function Home() {
    const [selectedNavOption, setSelectedNavOption] = useState({label: 'Total impressions', index: 0})

    return (
        <div className={styles.lineChart}>
                <div className={styles.topBar}>
                <div className={styles.chartNav}>
                    { navItems.map((item, index) => (
                        <div key={index} className={styles.chartNavButtonWrapper} >
                            <div key={index} className={`${styles.chartNavButton} ${(selectedNavOption.label === item.label) && styles.chartNavButtonSelected}`} onClick={(e) => setSelectedNavOption({'label': item.label, 'index': index})}>
                                <p className={styles.chartNavLabel}>{item.label}</p>
                                <h2 className={styles.chartNavMetric}>{item.metric}</h2>
                            </div>
                                { ( selectedNavOption.label === item.label )? 
                            <motion.div className={styles.chartNavButtonUnderline} layoutId="chartNavButtonUnderline"/> : null }
                        </div>
                        ))
                    }
                </div>
                <div className={styles.modifiersContainer} >
                    <button className={styles.dateTimeRangeButton}>
                        <Calendar size={24} weight="fill" /> 17th January, 2022 — 16th January, 2023 <CaretDown weight="fill" size={16} />
                    </button> 
                    <button className={styles.dateTimeRangeButton}>
                        Daily <CaretDown weight="fill" size={16} />
                    </button>
                    <Toggle />
                </div>
                </div>
            <ResponsiveContainer width="100%" height={352}>
                <AreaChart data={cleanData} margin={{ top: 48, right: 0, left: 0, bottom: 0 }}>
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
                    <XAxis dataKey="interval" tickMargin={8} stroke="#D7DBDF" tick={{ fill: '#687076' }} style={{
                        fontSize: '0.875em'
                    }}/>
                    {/*<YAxis tickMargin={8}  stroke="#D7DBDF" tick={{ fill: '#687076' }} style={{
                        fontSize: '0.875em',
                        marginRight: '1rem',
                    }}/>*/}
                    <CartesianGrid strokeDasharray="1 5" />
                    <Tooltip />
                    <Area type="monotone" dataKey="impressions" stroke="#006ADC" fillOpacity={1} fill="url(#colorthisYear)" strokeWidth="2"/>
                    <Area type="monotone" dataKey="new_users" stroke="#8E4EC6" fillOpacity={1} fill="url(#colorlastYear)" strokeWidth="2" strokeDasharray="2 2" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}