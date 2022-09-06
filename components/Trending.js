import React, {useState} from 'react'
import ReactSwitch from 'react-switch'
import Rate from './cmc-table/Rate';
import TrendingCard from './TrendingCard';
import fire from '../assets/fire.png'
import gainers from '../assets/gainers.png'
import recent from '../assets/recent.png'

const styles = {
    trendingWrapper: 'mx-auto max-w-screen-2xl',
    h1: 'text-[24px] font-semibold lg:text-3xl',
    flexCenter: ' flex flex-col lg:flex-row items-center justify-center',
    example: '',
}

const trendingData = [
    {
        number: 1,
        symbol: 'BTC',
        name: "Bitcoin",
        icon: 'btc',
        isIncrement: true,
        rate: "2.345%"
    },
    {
        number: 2,
        symbol: 'USDT',
        name: "Tether",
        icon: 'usdt',
        isIncrement: false,
        rate: "3.345%"
    },
    {
        number: 3,
        symbol: 'ETH',
        name: "Etherium",
        icon: 'eth',
        isIncrement: false,
        rate: "6.345%"
    },
]

function Trending() {
    const [checked, setChecked] = useState(false);

  return (
    <div className='text-white py-5 px-6'>
        <div className={styles.trendingWrapper}>
            <div className='flex justify-between'>
                <h1 className={styles.h1}>Current Cryptocurrency Prices by ahacointrack</h1>

                <div className='flex justify-center items-center gap-x-2'>
                    <p className='text-purple-500 opacity-80'>Highlight</p>
                    <ReactSwitch checked={checked} onChange={() => setChecked(!checked)} />
                </div>

            </div>
            <br />
            <div className="flex text-xs md:text-md ">
                <p className='text-gray-400'>The global crypto market worth $1.74T, a &nbsp;</p>
                <span>
                    <Rate isIncrement={false} rate='1.254 %' />
                </span>
                <p>
                &nbsp; over the last day. 
                <span className='underline'>Read More</span>
                </p>
            </div>
            <br />

            <div className={styles.flexCenter}>
                
                 <TrendingCard title ='Trending' icon={fire}
                    trendingData= {trendingData} /> 
                 <TrendingCard title ='Biggest Gainners' icon={gainers}
                    trendingData= {trendingData} /> 
                 <TrendingCard title ='Recently Added' icon={recent}
                    trendingData= {trendingData} /> 
                    
               
            </div>

        </div>
    </div>
  )
}

export default Trending