import { useEffect } from 'react'
import { fetchData } from '../features/slices/coinSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../features/store'
import { Link } from 'react-router-dom';

function ListCoins() {
  const tableContents:string[] = ['Rank', 'Ticker', 'Name', '','Price ($)', '24H (%)', '7D (%)', '14D (%)', '1M (%)', '1Y (%)'];
  const {isLoading, isError, coinData} = useSelector((state:RootState)=>state.coin)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchData() as any)
  },[dispatch])
  if(isLoading){
    return <p>Loading...</p>
  }
  if(isError){
    return <p>{`Error Fetching Resource: ${isError}`}</p>
  }


    const mappedData = coinData.map((data:any)=>{
      const {id, symbol, name, image, market_data} = data;
      const {current_price:{usd}, market_cap_change_percentage_24h: mccp24h, market_cap_rank:rank, price_change_percentage_7d: mccp7d, price_change_percentage_14d: mccp14d, price_change_percentage_30d: mccp30d, price_change_percentage_1y: mccp1y,} = market_data
      return(
        <tr className='custom Contentshovered ContentsActive' key={id}>
          <td className='contents'>
          <Link className='contents' to={`coindetail/${id}`}>
              <td>{rank}</td>
              <td>{symbol.toUpperCase()}</td>
              <td className='px-3'><img src={image.small} alt="" /></td>
              <td className='text-left'>{name}</td>
              <td>{usd}</td>
              <td className={`${mccp24h>0 ? 'text-green-400' : 'text-red-400'}`}>{mccp24h}</td>
              <td className='lg-hidden'>{mccp7d}</td>
              <td className='lg-hidden'>{mccp14d}</td>
              <td>{mccp30d}</td>
              <td>{mccp1y}</td>
           </Link>
           </td>
        </tr>
        )
  })

  
  return (
    <div className='rounded-lg overflow-hidden'>
        <table className='w-full text-center'>
            <thead>
                <tr className='bg-white' >
                    {tableContents.map((item, index)=>{
                       return <th key={index}>{item}</th>
                    })}
                </tr>
            </thead>
            <tbody className=''>
               {mappedData}
            </tbody>
        </table>
    </div>
  )
}

export default ListCoins







    