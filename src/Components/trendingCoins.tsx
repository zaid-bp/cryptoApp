import { useEffect, useState } from 'react'

function TrendingCoins() {
    const [trendingCoinsData ,setTrendingCoinsData] = useState<any>('')
    useEffect(()=>{
        const fetchData=async()=>{
            const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
            const data = await response.json()
            setTrendingCoinsData(data)
        }    
        fetchData()
    },[])
    if(trendingCoinsData){
        var coins = trendingCoinsData.coins;
        return (
            <>
            <h4 className='text-white text-2xl text-left'>Top Searches Today:</h4>
            <div className='flex w-full my-2 overflow-scroll mb-5 py-3'>{
            coins.map((item:any)=>{
                const {coin_id, name, small, symbol, market_cap_rank}=item.item
                // console.log(item);
                return( <div key={coin_id} className='trendingCard'>
                            <div className='badge'>
                                <h5 className='text-yellow-400 text-sm'>{market_cap_rank}</h5>
                            </div>
                            <img src={small} className='mx-3' alt="failed to load" />
                            <div className='w-40 text-left'>
                                <h5>{symbol}</h5>
                                <h6 className='text-sm font-bold'>{name}</h6>
                            </div>

                        </div>)
    })
}</div>
</>)

    }
    else{
        return <p>Loading...</p>
    }

}

export default TrendingCoins