import React from 'react'
import Hero from '../components/Layout/Hero'
import GenderCollectionSection from '../components/Product/GenderCollectionSection'
import NewArrivals from '../components/Product/NewArrivals'
import ProductDetails from '../components/Product/ProductDetails'
import ProductGrid from '../components/Product/ProductGrid'
import FeaturedCollection from '../components/Product/FeaturedCollection'

const placeholderProducts = [
  { _id: "1", name: "Product 1", price: 100, images: [{ url: "https://picsum.photos/500/500?random=11" }] },
  { _id: "2", name: "Product 2", price: 100, images: [{ url: "https://picsum.photos/500/500?random=12" }] },
  { _id: "3", name: "Product 3", price: 100, images: [{ url: "https://picsum.photos/500/500?random=13" }] },
  { _id: "4", name: "Product 4", price: 100, images: [{ url: "https://picsum.photos/500/500?random=14" }] },
  { _id: "5", name: "Product 5", price: 100, images: [{ url: "https://picsum.photos/500/500?random=15" }] },
  { _id: "6", name: "Product 6", price: 100, images: [{ url: "https://picsum.photos/500/500?random=16" }] },
  { _id: "7", name: "Product 7", price: 100, images: [{ url: "https://picsum.photos/500/500?random=17" }] },
  { _id: "8", name: "Product 8", price: 100, images: [{ url: "https://picsum.photos/500/500?random=18" }] },
  { _id: "9", name: "Product 9", price: 100, images: [{ url: "https://picsum.photos/500/500?random=19" }] },
  { _id: "10", name: "Product 10", price: 100, images: [{ url: "https://picsum.photos/500/500?random=20" }] },
  { _id: "11", name: "Product 11", price: 100, images: [{ url: "https://picsum.photos/500/500?random=21" }] },
  { _id: "12", name: "Product 12", price: 100, images: [{ url: "https://picsum.photos/500/500?random=22" }] },

];

function Home() {
  return (
    <div>
      <Hero />
      <GenderCollectionSection  />
      <NewArrivals />
     
   <h2 className='text-3xl text-center font-bold mb-4'>Best Seller</h2>

      <ProductDetails />
        
    <div className='container mx-auto'>
      <h2 className='text-3xl text-center font-bold mb-4'>Top wear for Women</h2>
      <ProductGrid products={placeholderProducts} />
    </div>

    <FeaturedCollection />
       
    </div>
  )
}

export default Home