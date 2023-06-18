import { ProductCard } from '@/components'
import { getCategoryProducts } from '@/lib/cosmic'
import { convertKebabToNormal } from '@/utils/functions'
import { CategoryProps } from '@/utils/types'

async function Category({ params }: CategoryProps) {
  const { slug } = params
  const products = await getCategoryProducts(['id', 'title', 'slug', 'thumbnail', 'metadata'], slug)

  return (
    <div className="relative w-full md:py-20">
      <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
        <h1 className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
          {convertKebabToNormal(slug)}
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-5 px-5 mx-auto md:grid-cols-2 lg:grid-cols-3 my-14 md:px-0 justify-items-center">
        {products?.map((product) => {
          return <ProductCard key={product.id} {...product} />
        })}
      </div>
    </div>
  )
}

export default Category
