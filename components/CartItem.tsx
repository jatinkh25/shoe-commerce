import { useAppDispatch } from '@/hooks/useAppDispatch'
import {
  removeFromCart,
  updateCartItemQuantity,
  updateCartItemSize,
} from '@/store/slices/cartSlice'
import { CHANGE_TYPE } from '@/utils/constants'
import { CartItemProps, UpdateCartItemQuantity } from '@/utils/types'
import Image from 'next/image'

const CartItem = ({
  id,
  title,
  thumbnail,
  metadata,
  quantity,
  selectedSize,
  totalPrice,
}: CartItemProps) => {
  const { subtitle, size } = metadata
  const dispatch = useAppDispatch()

  const updateQuantityHandler = ({ id, type, selectedSize }: UpdateCartItemQuantity) => {
    // Removing the item from the cart if quantity goes below one
    if (type === CHANGE_TYPE.INCREASE && quantity <= 1) {
      dispatch(removeFromCart({ id, selectedSize }))
      return
    }

    dispatch(updateCartItemQuantity({ id, type, selectedSize }))
  }

  return (
    <div className="flex gap-3 py-5 border-b md:gap-5">
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <Image src={thumbnail} alt="Product" width={120} height={120} />
      </div>

      <div className="flex flex-col w-full">
        <div className="flex flex-col justify-between md:flex-row">
          <h6 className="text-lg md:text-2xl font-semibold text-black/[0.8]">{title}</h6>
          <p className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            {subtitle}
          </p>
          <p className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
            MRP : &#8377; {totalPrice}
          </p>
        </div>
        <div className="text-md font-medium text-black/[0.5] hidden md:block">{subtitle}</div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 Otext-black/[0.5] text-sm md: text-md">
            <div className="flex items-center gap-1">
              <span className="font-semibold">Size:</span>
              <select
                className="px-2 hover:text-black"
                onChange={(event) =>
                  updateCartItemSize({
                    id,
                    oldSize: selectedSize,
                    newSize: event.target.value,
                  })
                }
              >
                {size.map((size, index) => (
                  <option
                    key={index}
                    value={size.size}
                    disabled={!size.enabled}
                    selected={selectedSize === size.size}
                  >
                    {size.size}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-semibold">Quantity:</span>
              <span className="pr-2">{quantity}</span>
              <button
                className="bg-black/[0.15] px-1 text-lg h-5 flex items-center justify-center rounded mr-2"
                onClick={() => updateQuantityHandler({ id, selectedSize, type: 'INCREASE' })}
              >
                +
              </button>
              <button
                className="bg-black/[0.15] px-1 text-xl h-5 flex items-center justify-center rounded"
                onClick={() => updateQuantityHandler({ id, selectedSize, type: 'DECREASE' })}
              >
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
