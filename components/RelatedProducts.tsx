'use client'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import ProductCard from './ProductCard'
import { RelatedProductsProps } from '@/utils/types'

const RelatedProducts = ({ relatedProducts }: RelatedProductsProps) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1023, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  }

  return (
    <div className="mt-[50px] md:mt-[100px] mb-[100px] md:mb-0">
      <div className="mb-5 text-2xl font-bold">You Might Also Like</div>
      <Carousel responsive={responsive} containerClass="-mx-[10px]" itemClass="px-[10px]">
        {relatedProducts?.map((product) => {
          return <ProductCard key={product.id} {...product} />
        })}
      </Carousel>
    </div>
  )
}

export default RelatedProducts
