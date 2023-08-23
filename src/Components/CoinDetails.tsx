import { Link, useParams } from 'react-router-dom';
import  back  from "../assets/arrow.png";
import { useEffect } from 'react';

function CoinDetails() {
  const {coinId} = useParams()
  const requestAPI = `https://api.coingecko.com/api/v3/coins/${coinId}/tickers`;
  const fetchData=async()=>{
    let response = await fetch(requestAPI);
    let data = await response.json()
    console.log(data);
  }
  useEffect(()=>{
    fetchData()
  },[])
  // https://api.coingecko.com/api/v3/coins/${coinId}/tickers  
  return (
    <div className='fixed h-screen w-screen bg-white '>
      <header className='bg-black text-white text-left p-3'>
        <Link to='/'><img className='w-8 invert' src={back} alt="go back" /></Link>
      </header>
      <div className='flex justify-center'>

      <h1>{`CoinDetails of ${coinId}`}</h1>
      <div className="message mt-80">
        <h1>Website Under Construction</h1>
        <p>We apologize for any inconvenience caused.</p>
        <p>We're working hard to bring you an improved experience.</p>
        <p>Please check back again soon!</p>
      </div>

      </div>
      
      </div>
  )
}

export default CoinDetails