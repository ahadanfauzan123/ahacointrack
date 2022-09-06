import React from 'react'
import Image from 'next/image'
import MoreButton from './MoreButton'
import TrendingCardRow from './TrendingCardRow'

const styles = {
  trendingCard: 'flex flex-col min-h-[150px] w-[85%] lg:w-[30%] m-3 p-5 bg-[#17171a] rounded-xl',
  trendingCardWrapper: 'flex justify-between',
  example: '',
}

function TrendingCard({ title, icon, trendingData }) {
  return (
    <div className={styles.trendingCard}>
      <div className={styles.trendingCardWrapper}>
        <div className='flex items-center'>
          { icon && <Image src={icon} width={27} height={27} alt='icon' /> }
          &nbsp;&nbsp;
          <p className='font-blod'>{title} </p>
        </div>
        {/* more button */}
        <MoreButton />
      </div>
      <br />
      {trendingData.map((item, index) => {
        return (
          <TrendingCardRow 
            key={index}
            number={item.number}
            symbol={item.symbol}
            name={item.name}
            icon={item.icon}
            isIncrement={item.isIncrement}
            rate={item.rate}
            />
        )
      })}
    </div>
  )
}

export default TrendingCard