import { ProductDetailsCarousel, RelatedProducts } from '@/components'
import { SizeSelect } from '@/components'
import { IoMdHeartEmpty } from 'react-icons/io'

function ProductDetails() {
  return (
    <div className="md:py-20">
      <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
        <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
          <ProductDetailsCarousel />
        </div>
        <div className="flex-[1] py-3">
          <h2 className="text-[34px] font-semibold mb-2 leading-tight">Jordan Retro 6 G</h2>
          <p className="mb-5 text-lg font-semibold">Men&apos;s Golf Shoes</p>
          <p>MRP : &#8377; 19,695.00</p>
          <p className="text-md font-medium text-black/[0.5]">incl. of taxes</p>
          <p className="text-md font-medium text-black/[0.5] mb-20">
            (Also includes all applicable duties)
          </p>
          <div className="pb-10">
            <div className="flex items-center justify-between pb-4">
              <p className="font-semibold text-md">Select Size</p>
              <p className="font-medium text-md text-black/[0.5] cursor-pointer">Size Guide</p>
            </div>
            <SizeSelect />
          </div>
          <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
            Add to Cart
          </button>
          <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
            Whishlist
            <IoMdHeartEmpty size={20} />
          </button>
          <div>
            <div className="text-lg font-bold mb-5">Product Details</div>
            <div className="markdown text-md mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum delectus, modi quasi
              distinctio eveniet laudantium commodi eligendi ipsa saepe laborum quia quos. Quidem
              enim distinctio dolorem maxime nisi deleniti dicta. Facere, cumque reiciendis! Quam
              nisi ad molestiae porro ipsam natus explicabo quae exercitationem necessitatibus
              mollitia.
            </div>
            <div className="markdown text-md mb-5">
              Fugiat nobis minima iure a, sint temporibus mollitia explicabo vel repellendus quam
              sequi asperiores obcaecati rerum esse consequuntur non dignissimos? Aliquid
              necessitatibus ab modi autem facilis atque, officiis animi repellat tempora quis
              quaerat, similique quae, accusantium voluptas incidunt. Esse rem voluptas ea placeat
              ut iure magni mollitia in, culpa iste quisquam tempore officia dolore cum!
            </div>
          </div>
        </div>
      </div>
      <RelatedProducts />
    </div>
  )
}

export default ProductDetails
