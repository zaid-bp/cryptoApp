import { Link, useParams } from 'react-router-dom';
import  back  from "../assets/arrow.png";

function CoinDetails() {
  const {name} = useParams()
  
  return (
    <div className='fixed h-screen w-screen bg-white '>
      <header className='bg-black text-white text-left p-3'>
        <Link to='/'><img className='w-8 invert' src={back} alt="go back" /></Link>
      </header>
      <div className='flex justify-center'>

      <h1>{`CoinDetails of ${name}`}</h1>
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