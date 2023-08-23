import ListCoins from './listCoins';
import TrendingCoins from './trendingCoins';
import React from 'react'

function Home() {
  return (
    <div className='px-20 py-10'>
    <TrendingCoins/>
    <ListCoins />
    </div>
  )
}

export default Home