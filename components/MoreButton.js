import React from 'react'
import RightArrow from '../assets/svg/rightArrow'

const styles = {
    button : 'text-blue-400 flex items-center cursor-pointer whitespace-nowrap justify-between',
}

function MoreButton() {
  return (
    <div className={styles.button}>
        More <RightArrow />
    </div>
  )
}

export default MoreButton