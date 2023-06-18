import { ProductCard } from '@/components'
import { getCategoryInfo } from '@/lib/cosmic'
import { CategoryProps } from '@/utils/types'

async function Category({ params }: CategoryProps) {
  const { slug } = params
  const { title, metadata } = await getCategoryInfo(['id', 'title', 'slug', 'metadata'], slug)

  return (
    <div className="relative w-full md:py-20">
      <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
        <h1 className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">{title}</h1>
      </div>

      <div className="grid grid-cols-1 gap-5 px-5 mx-auto md:grid-cols-2 lg:grid-cols-3 my-14 md:px-0 justify-items-center">
        {metadata?.products?.map((product) => {
          return <ProductCard key={product.id} {...product} />
        })}
      </div>
    </div>
  )
}

export default Category
