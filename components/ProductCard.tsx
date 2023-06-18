import { getDiscountedPricePercentage } from '@/utils/functions'
import { Product } from '@/utils/types'
import Image from 'next/image'
import Link from 'next/link'

const ProductCard = ({ title, slug, thumbnail, metadata }: Product) => {
  return (
    <Link
      href={`/products/${slug}`}
      className="max-w-lg transition-transform duration-200 hover:scale-105"
    >
      <Image src={thumbnail} width={500} height={500} alt={title} />
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-medium">{title}</h2>
        <div className="flex items-center text-black/[0.5]">
          <span className="mr-2 text-lg font-semibold">&#8377;{metadata?.price}</span>
          <span className="text-base font-medium line-through">
            &#8377;{metadata?.original_price}
          </span>
          <span className="ml-auto text-base font-medium text-green-500">
            {getDiscountedPricePercentage(metadata?.original_price, metadata?.price)}% off
          </span>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
