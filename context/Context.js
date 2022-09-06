import { createContext, useState, useEffect } from 'react'

export const CoinMarketContext = createContext();

export const CoinMarketProvider = ({children}) => {

    const getTopTenCoins = async () => {
        try {
            const res = await fetch('/api/getTopTen'); //await and fetch the data from the API
            const data = await res.json();//await and get the data
            return data?.data?.data;
        } catch(e) {
            console.log(e.message)
        }
    }

    return (
        <CoinMarketContext.Provider
        value = {{ 
            getTopTenCoins
         }} 
        >
            {children}
        </CoinMarketContext.Provider>
    )
}