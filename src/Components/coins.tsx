import { useSelector } from 'react-redux'
import { RootState } from '../features/store'


function CoinCard() {
const { coinData } = useSelector((state:RootState)=>state.coin.trendingCoins)
console.log(coinData);

  return (
    <div className=''>{
        <h4 className='text-white'>fdgf</h4>
    // coinData.map((data:any)=>{
    //     const {id, symbol, name, image, market_data} = data;
    //     const {current_price:{usd}, market_cap_change_percentage_24h: mccp24h, market_cap_rank:rank} = market_data
        
    //     return(
    //         <div className='flex bg-gray-300 m-5 p-3 w-60 rounded-md' key={id}>
    //             <p>{rank}</p>
    //             <img src={image.small} alt="failed" />
    //             <div className='ml-3'>
    //                 <h6 className='font-bold text-start'>{symbol.toUpperCase()}</h6>
    //                 <span>{name}</span>
    //             </div>
    //             <div className='ml-auto text-right'>
    //                 <span className='block'>${usd}</span>
    //                 <span className={`${mccp24h > 0 ? 'text-green-700':'text-red-700'}`}>{mccp24h}</span>
    //             </div>
    //         </div>
    //     )

    // })
}</div>
  )
}

export default CoinCard