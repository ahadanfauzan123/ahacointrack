import React from 'react'
import Image from 'next/image'
import { ConnectButton } from 'web3uikit'

const styles = {
    header : 'bg-[#17171a] text-white h-[90px] flex gap-x-[100px] w-full p-[25px]',
    headerWrapper : 'flex justify-end lg:justify-center h-full max-w-screen-xl mx-auto px-4 -mr-6 lg:mr-0',
    nav : 'hidden lg:flex justify-center items-center',
    navItem : 'relative mr-1 cursor-pointer hover:opacity-60',
    navLink : 'font-semibold text-white text-[15px] mx-[10px]',
    badge : 'absolute rounded-full bg-purple-500 h-1 w-1 right-0 top-1 ring-4 animate-ping',
    inputContainer : 'hidden md:flex items-center justify-center p-2 rounded-md bg-[#171924]',
    input : 'bg-transparent outline-none text-purple-600 font-semibold w-70 ml-6',
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
             <div className='flex items-center ml-4'>
                 {/* connect button */}
                    <ConnectButton /> 
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