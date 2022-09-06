import React from 'react'
import ChevronDown from '../../assets/svg/chevronDown'
import ChevronUp from '../../assets/svg/chevronUp'

const styles = {
    rate: ' flex items-center',
    red: 'ml-[3px] text-[#E11D74]',
    green: 'ml-[3px] text-[#3EC70B]',
    example: '',
}

function Rate({isIncrement, rate}) {
  return (
    <div className={styles.rate}>
        {isIncrement ? <ChevronUp fill='#3EC70B' /> : <ChevronDown fill='#E11D74' /> }
        <p className={isIncrement ? styles.green : styles.red}>{rate}</p>
    </div>
  )
}

export default Rate