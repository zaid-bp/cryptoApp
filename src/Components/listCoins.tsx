import { useSelector } from 'react-redux'
import { RootState } from '../features/store'
function ListCoins() {
const { coinData } = useSelector((state:RootState)=>state.coin)

    const tableContents:string[] = ['Rank', 'Ticker', 'Name', '','Price ($)', '24H (%)', '7D (%)', '14D (%)', '1M (%)', '1Y (%)']
  return (
    <div className='rounded-md overflow-hidden'>
        <table className='w-full'>
            <thead>
                <tr className='bg-white' >
                    {tableContents.map((item, index)=>{
                       return <th key={index}>{item}</th>
                    })}
                </tr>
            </thead>
            <tbody>

 {           coinData.map((data:any)=>{
        const {id, symbol, name, image, market_data} = data;
        const {current_price:{usd}, market_cap_change_percentage_24h: mccp24h, market_cap_rank:rank, price_change_percentage_7d: mccp7d, price_change_percentage_14d: mccp14d, price_change_percentage_30d: mccp30d, price_change_percentage_1y: mccp1y,} = market_data
        return(
          <tr className='bg-[#32332e] text-white border-b-2' key={id}>
            <td>{rank}</td>
            <td>{symbol.toUpperCase()}</td>
            <td className='px-3'><img src={image.small} alt="" /></td>
            <td className='text-left'>{name}</td>
            <td>{usd}</td>
            <td>{mccp24h}</td>
            <td>{mccp7d}</td>
            <td>{mccp14d}</td>
            <td>{mccp30d}</td>
            <td>{mccp1y}</td>


          </tr>)
    })
}
            </tbody>
        </table>
    </div>
  )
}

export default ListCoins







    