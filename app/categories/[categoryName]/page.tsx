import { ProductCard } from '@/components'
import { CategoryProps } from '@/utils/types'

function Category({ params }: CategoryProps) {
  const { categoryName } = params

  return (
    <div className="relative w-full md:py-20">
      <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
        <h1 className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
          Running Shoes
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-5 px-5 md:grid-cols-2 lg:grid-cols-3 my-14 md:px-0">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  )
}

export default Category
