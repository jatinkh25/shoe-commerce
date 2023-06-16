import { CartItem } from '@/components'
import Image from 'next/image'
import Link from 'next/link'

function Cart() {
  return (
    <div className="w-full md:py-20">
      <h1 className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight text-center mx-auto mt-8 md:mt-0">
        Shopping Cart
      </h1>
      <div className="flex flex-col gap-12 py-10 lg:flex-row">
        <div className="flex-[2]">
          <h3 className="text-lg font-bold">Cart Items</h3>
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className="flex-[1]">
          <h3 className="text-lg font-bold">Summary</h3>

          <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
            <div className="flex justify-between">
              <div className="font-medium text-black uppercase text-md md:text-lg">Subtotal</div>
              <div className="font-medium text-black text-md md:text-lg">&#8377;19, 368</div>
            </div>
            <div className="py-5 mt-5 text-sm border-t md:text-md">
              The subtotal reflects the total price of your order, including duties and taxes,
              before any applicable discounts. It does not include delivery costs and international
              transaction fees.
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
        <Image
          src="/empty-cart.jpg"
          alt="Empty Cart"
          width={300}
          height={300}
          className="w-[300px] md:w-[400px]"
        />
        <span className="text-xl font-bold">Your cart is Empty.</span>
        <span className="pt-4 text-center">
          Looks like you have not added anything in your cart.
          <br />
          Go ahead and explore top categories.
        </span>
        <Link
          href="/"
          className="px-8 py-4 mt-8 mb-3 text-lg font-medium text-white transition-transform bg-black rounded-full active:scale-95 hover:opacity-75"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  )
}

export default Cart
