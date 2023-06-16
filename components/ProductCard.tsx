import Image from 'next/image'
import Link from 'next/link'

const ProductCard = () => {
  return (
    <Link href="/products/1" className="transition-transform duration-200 hover:scale-105">
      <Image src={'/product-1.webp'} width={500} height={500} alt="Sports Shoe" />
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-medium">Product Name</h2>
        <div className="flex items-center text-black/[0.5]">
          <span className="mr-2 text-lg font-semibold">$20.00</span>
          <span className="text-base font-medium line-through">$25.00</span>
          <span className="ml-auto text-base font-medium text-green-500">20% off</span>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
