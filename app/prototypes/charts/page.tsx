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
import { BarChartComponent, BarChartNavigation } from '../../components/BarChart'
import { ComposedBarLineChart } from '../../components/ComposedBarLineChart'

const kobataBold = localFont({
  src: "../../../public/assets/fonts/Kobata-Bold.otf",
  weight: '700'
});

const satoshiBold = localFont({
    src: "../../../public/assets/fonts/Satoshi-Bold.otf",
    weight: '700'
  });

  const DATA2 =[{
    "Bondi Beach • /bondibeach": 4000,
    "Fitzroy • /fitzroy": 3600,
    "Darling Square • /darlingsquare": 3600,
    "Crown • /crown": 3600,
    "Martin Place • /martinplace": 3100,
    "Home • /": 2400,
    "Darlingurst • /darlinghurst": 2400,
    "Norwest • /norwest": 1200,
    "Newtown • /newtown": 1200,
    "Surry Hills • /surryhills": 800
}]

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


const actualData2 =  {
  message: "success",
  data: [
      {
          interval: "Jan",
          thisPeriod: 10057
      },
      {
          interval: "Dec",
          thisPeriod: 20641
      },
      {
          interval: "Nov",
          thisPeriod: 19709
      },
      {
          interval: "Oct",
          thisPeriod: 20301
      },
      {
          interval: "Sept",
          thisPeriod: 22380
      },
      {
          interval: "Aug",
          thisPeriod: 20242
      },
      {
          interval: "July",
          thisPeriod: 21560
      },
      {
          interval: "June",
          thisPeriod: 18838
      },
      {
          interval: "May",
          thisPeriod: 11593
      },
      {
          interval: "Apr",
          thisPeriod: 17132
      },
      {
          interval: "Mar",
          thisPeriod: 12451
      },
      {
          interval: "Feb",
          thisPeriod: 11408
      },
      {
          interval: "Jan",
          thisPeriod: 1442
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

const DATA =[{
  "Bondi Beach • /bondibeach": 4000,
  "Fitzroy • /fitzroy": 3600,
  "Darling Square • /darlingsquare": 3600,
  "Crown • /crown": 3600,
  "Martin Place • /martinplace": 3100,
  "Home • /": 2400,
  "Darlingurst • /darlinghurst": 2400,
  "Norwest • /norwest": 1200,
  "Newtown • /newtown": 1200,
  "Surry Hills • /surryhills": 800
}]

const barChartColours = [
  "hsl(206deg 100% 50%)",
  "hsl(214deg 100% 53%)",
  "hsl(222deg 100% 57%)",
  "hsl(230deg 100% 62%)",
  "hsl(238deg 100% 65%)",
  "hsl(246deg 100% 65%)",
  "hsl(254deg 100% 62%)",
  "hsl(262deg 100% 58%)",
  "hsl(270deg 100% 54%)",
  "hsl(278deg 100% 53%)"
]


const composedBarLineChartData = [
  {
    interval: "Jan",
    cash_paid: 10000,
    credit_purchased: 12500,
    count_of_transactions: 56
  },
  {
    interval: "Feb",
    cash_paid: 8000,
    credit_purchased: 10500,
    count_of_transactions: 32
  },
  {
    interval: "Mar",
    cash_paid: 11000,
    credit_purchased: 14500,
    count_of_transactions: 70
  },
  {
    interval: "Apr",
    cash_paid: 13000,
    credit_purchased: 17500,
    count_of_transactions: 70
  },
  {
    interval: "Jun",
    cash_paid: 12500,
    credit_purchased: 19000,
    count_of_transactions: 56
  },
  {
    interval: "Jul",
    cash_paid: 16500,
    credit_purchased: 24000,
    count_of_transactions: 74
  },
  {
    interval: "Aug",
    cash_paid: 10000,
    credit_purchased: 12500,
    count_of_transactions: 56
  },
  {
    interval: "Sept",
    cash_paid: 8000,
    credit_purchased: 10500,
    count_of_transactions: 32
  },
  {
    interval: "Oct",
    cash_paid: 11000,
    credit_purchased: 14500,
    count_of_transactions: 70
  },
  {
    interval: "Nov",
    cash_paid: 13000,
    credit_purchased: 17500,
    count_of_transactions: 70
  },
  {
    interval: "Dev",
    cash_paid: 12500,
    credit_purchased: 19000,
    count_of_transactions: 56
  }
]

const composedBarChartNavItems = [
  {
      label: 'Cash Paid',
      thisPeriodValue: '72050',
      lastPeriodValue: '64800',
      color: '#ff3c6e',
      shape: 'line',
      valueType: 'dollar'
  },
  {
      label: 'Credit Purchased',
      thisPeriodValue: '95600',
      lastPeriodValue: '94600',
      color: '#FF3CFF',
      shape: 'line',
      valueType: 'dollar'
  },
  {
    label: 'Transactions',
    thisPeriodValue: Intl.NumberFormat().format(412),
    lastPeriodValue: Intl.NumberFormat().format(424),
    color: '#11B5CB',
    shape: 'bar',
    valueType: 'number'
  }
]


export default function Chart() {
    const [selectedNavItem, setSelectedNavItem] = useState(0)
    const [intervalValue, setIntervalValue] = useState('WEEK')
    console.log(intervalValue)
    return (
        <div className={styles.dataPageContainer}>
          <ChartContainer theme={'light'}>
             <ChartTopBar>
                <ChartNavigation >
                    { navItems.map((item, index) => (
                        <ChartNavigationItem
                            key={index}
                            label={item.label}
                            thisPeriodValue={item.thisPeriodValue}
                            lastPeriodValue={item.lastPeriodValue}
                            loading={true}
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
                  loading={true}
                  error={true}
                  primaryColor={"#0091FF"} 
                  secondaryColor={"#8E4EC6"} />
                  </ChartContainer>
          <ChartContainer theme={'light'}>
             <BarChartNavigation />
             <BarChartComponent data={DATA2} loading={false} colours={barChartColours} />
          </ChartContainer>
          <ChartContainer theme={'light'}>
          <ChartTopBar>
                <ChartNavigation>
                    { composedBarChartNavItems.map((item, index) => (
                        <ChartNavigationItem
                            key={index}
                            label={item.label}
                            thisPeriodValue={item.thisPeriodValue}
                            /*lastPeriodValue={item.lastPeriodValue}*/
                            color={item.color}
                            shape={item.shape}
                            valueType={item.valueType}
                            loading={true}
                            onClick={() => setSelectedNavItem(index)}
                            fullWidth={true} />
                        ))
                    }
                </ChartNavigation>
              </ChartTopBar>
            <ComposedBarLineChart data={composedBarLineChartData} error={true} primaryColor={'blue'} secondaryColor={'purple'} />
          </ChartContainer>
        </div>
    ) 
}