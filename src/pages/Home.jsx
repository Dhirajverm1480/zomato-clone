import React from 'react'
import ItemsTags from '../components/ItemsTags'
import {ItemTag} from "../constants/data.js"
import Banner from '../components/Banner.jsx'
import Card from '../components/Card.jsx'

const Home = () => {
  return (
    <div id='#Home' className='w-full page-frame'>
      <div className='flex gap-3 py-4 over overflow-x-auto'>
        {
          ItemTag.map((item) => (
            <div key={item.id} >
              <ItemsTags title={item.title} />
            </div>
          ))
        }
      </div>
      <div className='my-4'>
        <Banner />
      </div>
      <div className='flex gap-3 py-4 over overflow-x-auto'>
        {
          ItemTag.map((item) => (
            <div key={item.id} >
              <ItemsTags title={item.title} />
            </div>
          ))
        }
      </div>
      <div className='flex flex-wrap gap-3 my-4'>
        <Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card />
      </div>
      
    </div>
  )
}

export default Home
