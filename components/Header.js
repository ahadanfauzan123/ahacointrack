import React from 'react'
import Image from 'next/image'

const styles = {
    header : 'bg-[#17171a] text-white h-[90px] flex gap-[100px] w-full p-[25px]',
    headerWrapper : 'flex justify-center h-full max-w-screen-xl mx-auto px-4',
    nav : 'flex justify-center items-center gap-[25px]',
    navItem : 'relative mr-1 cursor-pointer hover:opacity-60',
    navLink : 'font-semibold text-[15px]',
    badge : 'absolute rounded-full bg-purple-500 h-1 w-1 -right-2 top-1 ring-4 animate-ping',
    inputContainer : 'flex items-center justify-center p-2 rounded-md bg-[#171924]',
    input : 'bg-transparent outline-none text-white font-semibold w-70 ml-6',
    example : '',
}

function Header() {
  return (
    <div className={styles.header}>
        <Image src="https://pro.coinmarketcap.com/public/media/img/logo-square-inverse.png?_=9007dc8"
         alt='logo'
         width={40}
         height={40} />

         <div className={styles.headerWrapper}>
             <div className={styles.nav}>
                 <div className={styles.navItem}>
                     <div className={styles.navLink}>Cryptocurrency</div>
                     <div className={styles.badge} />
                 </div>

                 <div className={styles.navItem}>
                     <div className={styles.navLink}>Exchange</div>
                 </div>

                 <div className={styles.navItem}>
                     <div className={styles.navLink}>NFTS</div>
                     <div className={styles.badge} />
                 </div>

                 <div className={styles.navItem}>
                     <div className={styles.navLink}>Watchlists</div>
                     <div className={styles.badge} />
                 </div>

                 <div className={styles.navItem}>
                     <div className={styles.navLink}>Products</div>
                 </div>

                 <div className={styles.navItem}>
                     <div className={styles.navLink}>Learn</div>
                 </div>
             </div>
             <div className='flex items-center'>
                 {/* connect button */}
                 <div className={styles.inputContainer}>
                     {/* search */}
                     <input type="text" className={styles.input} placeholder="search" />
                 </div>

             </div>
         </div>
    </div>
  )
}

export default Header