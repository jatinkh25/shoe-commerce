import Image from 'next/image'

const CartItem = () => {
  return (
    <div className="flex gap-3 py-5 border-b md:gap-5">
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <Image src="/product-1.webp" alt="Product" width={120} height={120} />
      </div>

      <div className="flex flex-col w-full">
        <div className="flex flex-col justify-between md:flex-row">
          <h6 className="text-lg md:text-2xl font-semibold text-black/[0.8]">Jordan Retro 6 G</h6>
          <p className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            Men&apos;s Golf Shoes
          </p>
          <p className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
            MRP : &#8377; 19, 376.00
          </p>
        </div>
        <div className="text-md font-medium text-black/[0.5] hidden md:block">
          Men&apos;s Golf Shoes
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 Otext-black/[0.5] text-sm md: text-md">
            <div className="flex items-center gap-1">
              <div className="font-semibold">Size:</div>
              <select className="hover:text-black">
                <option value="1">UK 6</option>
                <option value="2">UK 6.5</option>
                <option value="3"> UK 73</option>
                <option value="4">UK 7.5</option>
                <option value="5"> UK 8</option>
                <option value="6"> UK 8.5</option>
                <option value="7">UK 9</option>
                <option value="8">UK 9.5</option>
                <option value="8"> UK 10</option>
                <option value="8">UK 10.5</option>
                <option value="8">UK 11</option>
              </select>
            </div>
            <div className="flex items-center gap-1">
              <div className="font-semibold">Size:</div>
              <select className="hover:text-black">
                <option value="1"> 1</option>
                <option value="2"> 2</option>
                <option value="3"> 3</option>
                <option value="4"> 4</option>
                <option value="5"> 5</option>
                <option value="6"> 6</option>
                <option value="7"> 7</option>
                <option value="8"> 8</option>
                <option value="9"> 9</option>
                <option value="10"> 10</option>
                <option value="11"> 11</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
