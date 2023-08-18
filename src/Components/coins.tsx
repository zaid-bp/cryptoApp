import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../features/store'


function CoinCard() {
const { coinData } = useSelector((state:RootState)=>state.coin)
  return (
    <div className=''>{
    coinData.map((data)=>{
        const {id, symbol, name, image, market_data{current_price}} = data
        
        return(
            <div className='flex bg-gray-300 m-5 p-3 w-60 rounded-md' key={id}>
                {/* <img src={image.thumb} alt="failed" /> */}
                <img src={image.small} alt="failed" />
                {/* <img src={image.large} alt="failed" /> */}
                <div className='ml-3'>
                    <h6 className='font-bold text-start'>{symbol.toUpperCase()}</h6>
                    <span>{name}</span>
                </div>
            </div>
        )

    })
}</div>
  )
}

export default CoinCard