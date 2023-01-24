'use client'
import { LeftNavigation } from '../../components/LeftNavigation'
import { ThemeToggle } from '../../components/ThemeToggle'
import styles from './charts.module.css'
import Image from 'next/image'
import localFont from '@next/font/local';
import { motion } from "framer-motion";
import BarChartNomnieImage from "/public/assets/BarChartNomnie.png";
import LineChartNomnieImage from "/public/assets/LineChartNomnie.png";
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { useState } from 'react';
import { Calendar, CaretDown } from 'phosphor-react'
import { ChartIntervalToggle } from '../../components/ToggleGroup'
import { ChartContainer, ChartModifiersContainer, ChartNavigation, ChartNavigationItem, ChartTopBar, LineChart } from '../../components/LineChart'

const kobataBold = localFont({
  src: "../../../public/assets/fonts/Kobata-Bold.otf",
  weight: '700'
});

const satoshiBold = localFont({
    src: "../../../public/assets/fonts/Satoshi-Bold.otf",
    weight: '700'
  });

const monthlythisPeriodData = [
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
    data: [
        {
            interval: "Jan",
            thisPeriod: 10057,
            lastPeriod: 7022
        },
        {
            interval: "Dec",
            thisPeriod: 20641,
            lastPeriod: 14376
        },
        {
            interval: "Nov",
            thisPeriod: 19709,
            lastPeriod: 13422
        },
        {
            interval: "Oct",
            thisPeriod: 20301,
            lastPeriod: 13378
        },
        {
            interval: "Sept",
            thisPeriod: 22380,
            lastPeriod: 14725
        },
        {
            interval: "Aug",
            thisPeriod: 20242,
            lastPeriod: 14067
        },
        {
            interval: "July",
            thisPeriod: 21560,
            lastPeriod: 14792
        },
        {
            interval: "June",
            thisPeriod: 18838,
            lastPeriod: 13977
        },
        {
            interval: "May",
            thisPeriod: 11593,
            lastPeriod: 8294
        },
        {
            interval: "Apr",
            thisPeriod: 17132,
            lastPeriod: 12354
        },
        {
            interval: "Mar",
            thisPeriod: 12451,
            lastPeriod: 8848
        },
        {
            interval: "Feb",
            thisPeriod: 11408,
            lastPeriod: 8433
        },
        {
            interval: "Jan",
            thisPeriod: 1442,
            lastPeriod: 1059
        }
    ]
}




function convertToMonth(dateString: string){
    const date = new Date(dateString);
    const month = date.toLocaleString('default', { month: 'short'});
    return month
};

const cleanData = actualData.data.reverse()


const dataDict = [
    monthlythisPeriodData,
    monthlyUsersData,
    monthlyClickRateData
]

const navItems = [
    {
        label: 'Page views',
        thisPeriodValue: Intl.NumberFormat().format(211485),
        lastPeriodValue: Intl.NumberFormat().format(188903),
    },
    {
        label: 'Visitors',
        thisPeriodValue: Intl.NumberFormat().format(164485),
        lastPeriodValue: Intl.NumberFormat().format(16185),
    },
    {
        label: 'New Visitors',
        thisPeriodValue: '46.2%',
        lastPeriodValue: '62%',
    }
]

export default function Chart() {
    const [selectedNavItem, setSelectedNavItem] = useState(0)
    const [intervalValue, setIntervalValue] = useState('WEEK')
    console.log(intervalValue)
    return (
          <ChartContainer>
             <ChartTopBar>
                <ChartNavigation >
                    { navItems.map((item, index) => (
                        <ChartNavigationItem
                            key={index}
                            label={item.label}
                            thisPeriodValue={item.thisPeriodValue}
                            lastPeriodValue={item.lastPeriodValue}
                            selected={(selectedNavItem === index)}
                            onClick={() => setSelectedNavItem(index)} />
                        ))
                    }
                </ChartNavigation>
                <ChartModifiersContainer>
                    <button className={styles.dateTimeRangeButton}><Calendar size={24} weight='fill' /> Last 7 days <CaretDown size={16} weight='bold' /></button>
                    <ChartIntervalToggle ariaLabel={'interval picker'} type={'single'} defaultValue={'WEEK'} onClick={(e) => console.log(e)}/>
                </ChartModifiersContainer>
              </ChartTopBar>
              <LineChart
                  data={cleanData}
                  primaryColor={"#0091FF"} 
                  secondaryColor={"#8E4EC6"} />
          </ChartContainer>
    ) 
}