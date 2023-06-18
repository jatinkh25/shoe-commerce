import { HeroBanner, ProductCard } from '@/components'
import { getAllProducts, getHeroBannerMedia } from '@/lib/cosmic'

export default async function Home() {
  const products = await getAllProducts(['id', 'title', 'slug', 'thumbnail', 'metadata'])
  const images = await getHeroBannerMedia()

  return (
    <main>
      <HeroBanner images={images} />
      <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
        <h3 className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
          Cushioning for Your Miles
        </h3>
        <p className="text-md md:text-xl">
          A lightweight Nike ZoomX midsole is combined with increased stack heights to help provide
          cushioning during extended stretches of running.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 px-5 justify-items-center md:grid-cols-2 lg:grid-cols-3 my-14 md:px-0">
        {products.map((product) => {
          return <ProductCard key={product.id} {...product} />
        })}
      </div>
    </main>
  )
}
