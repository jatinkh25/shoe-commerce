'use client'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { ProductDetailsCarouselProps } from '@/utils/types'

const ProductDetailsCarousel = ({ images = [] }: ProductDetailsCarouselProps) => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        {images.map((image) => (
          // Using normal img tag instead of Next's Image tag because of thumbnail issues
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={image.image.url}
            src={image.image.imgix_url}
            alt={image.image.imgix_url}
            className="aspect-[16/10] md:aspect-auto object-cover"
          />
        ))}
      </Carousel>
    </div>
  )
}

export default ProductDetailsCarousel
