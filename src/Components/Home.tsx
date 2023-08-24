import ListCoins from './listCoins';
import TrendingCoins from './trendingCoins'
import NavBar from './navbar/NavBar';

function Home() {
  return (
    <>
      <NavBar/>
      <div className='px-20 py-10'>
      <TrendingCoins/>
      <ListCoins />
      </div>
    </>
  );
};

export default Home