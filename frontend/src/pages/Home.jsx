import React from 'react'
import Hero from '../components/Layout/Hero'
import GenderCollectionSection from '../components/Product/GenderCollectionSection'
import NewArrivals from '../components/Product/NewArrivals'
import ProductDetails from '../components/Product/ProductDetails'

function Home() {
  return (
    <div>
      <Hero />
      <GenderCollectionSection  />
      <NewArrivals />
     
   <h2 className='text-3xl text-center font-bold mb-4'>Best Seller</h2>

      <ProductDetails />
    </div>
  )
}

export default Home