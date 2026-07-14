import React from 'react'
import { Link } from 'react-router-dom'
// Fixed these names to match your usage below
import womensCollectionImage from '../../assets/mens-collection.webp'
import mensCollectionImage from '../../assets/womens-collection.webp'
import OptimizedImage from '../Common/OptimizedImage'

function GenderCollectionSection() {
  return (
   <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        
        {/* Women's Collection */}
        <div className="relative flex-1">
          <OptimizedImage
            src={womensCollectionImage}
            alt="Women's Collection"
            className="w-full h-[700px] object-cover"
            containerClassName="w-full h-[700px]"
          />
          <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Women's Collection
            </h2>
            <Link
              to="/collection/all?gender=Women"
              className="text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Men's Collection */}
        <div className="relative flex-1">
          <OptimizedImage
            src={mensCollectionImage}
            alt="Men's Collection"
            className="w-full h-[700px] object-cover"
            containerClassName="w-full h-[700px]"
          />
          <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Men's Collection
            </h2>
            <Link
              to="/collection/all?gender=Men"
              className="text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}

export default GenderCollectionSection