import React, {useState} from 'react'
import Rate from './cmc-table/Rate'

const styles = {
    trendingCardRow: 'flex items-center justify-between mb-4 text-[0.9rem]',
    example: '',
}

function TrendingCardRow({number, symbol, name, icon, isIncrement, rate}) {
  return (
    <div className={styles.trendingCardRow}>
        <p className='opacity-40'>{number}</p>
        <h1 className='flex-1 ml-4'> {name} <span className="text-gray-400 opacity-60">{symbol}</span> </h1>
        <Rate isIncrement={isIncrement} rate={rate} />
        
    </div>
  )
}

export default TrendingCardRow