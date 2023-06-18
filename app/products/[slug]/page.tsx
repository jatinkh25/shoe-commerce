'use client'

import Error from '@/app/error'
import { ProductDetailsCarousel, RelatedProducts, Spinner } from '@/components'
import { SizeSelect } from '@/components'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { useProduct } from '@/hooks/useProduct'
import { useRelatedProducts } from '@/hooks/useRelatedProducts'
import { addToCart } from '@/store/slices/cartSlice'
import { getDiscountedPricePercentage, showNotification } from '@/utils/functions'
import { CartItem, ProductDetailsProps } from '@/utils/types'
import { useState } from 'react'
import { IoMdHeartEmpty } from 'react-icons/io'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

function ProductDetails({ params }: ProductDetailsProps) {
  const { slug } = params
  const [showError, setShowError] = useState(false)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const dispatch = useAppDispatch()

  const {
    data: product,
    isLoading: isProductLoading,
    isError: isProductError,
  } = useProduct(['id', 'title', 'slug', 'thumbnail', 'metadata'], slug)

  const {
    data: relatedProducts,
    isLoading: isRelatedProductsLoading,
    isError: isRelatedProductsError,
  } = useRelatedProducts(['id', 'title', 'slug', 'thumbnail', 'metadata'], slug)

  if (isProductLoading || isRelatedProductsLoading) {
    return <Spinner />
  }

  if (isProductError || isRelatedProductsError) return <Error />

  const setSize = (size: string) => {
    setSelectedSize(size)
    setShowError(false)
  }

  const addProductToCart = () => {
    if (product == null) return

    if (selectedSize == null) {
      setShowError(true)
      document.getElementById('sizesGrid')?.scrollIntoView({
        block: 'center',
        behavior: 'smooth',
      })
      return
    }

    const item: CartItem = {
      ...product,
      selectedSize,
      quantity: 1,
      totalPrice: product.metadata.original_price,
    }

    dispatch(addToCart(item))
    showNotification('Product added to Cart Successfully!')
  }

  return (
    <>
      {product && relatedProducts && (
        <div className="md:py-20">
          <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
            <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
              <ProductDetailsCarousel images={product?.metadata?.images} />
            </div>
            <div className="flex-[1] pb-3">
              <h2 className="text-3xl md:text-[34px] font-semibold mb-2 leading-tight">
                {product?.title}
              </h2>
              <p className="mb-5 text-lg font-semibold">{product?.metadata?.subtitle}</p>
              <div className="flex items-center">
                <p className="mr-2 text-lg font-semibold">
                  MRP : &#8377;{product?.metadata?.price}
                </p>
                <p className="text-base font-medium line-through">
                  &#8377;{product?.metadata?.original_price}
                </p>
                <p className="ml-auto text-base font-medium text-green-500">
                  {getDiscountedPricePercentage(
                    product?.metadata?.original_price,
                    product?.metadata?.price
                  )}
                  % off
                </p>
              </div>
              <p className="text-md font-medium text-black/[0.5]">incl. of taxes</p>
              <p className="text-md font-medium text-black/[0.5] mb-20">
                (Also includes all applicable duties)
              </p>
              <div className="pb-10">
                <div className="flex items-center justify-between pb-4">
                  <p className="font-semibold text-md">Select Size</p>
                  <p className="font-medium text-md text-black/[0.5] cursor-pointer">Size Guide</p>
                </div>
                <SizeSelect
                  sizes={product?.metadata?.size}
                  selectedSize={selectedSize}
                  setSize={setSize}
                  showError={showError}
                />
              </div>
              <button
                className="w-full py-4 mb-3 text-lg font-medium text-white transition-transform bg-black rounded-full active:scale-95 hover:opacity-75"
                onClick={addProductToCart}
              >
                Add to Cart
              </button>
              <button className="flex items-center justify-center w-full gap-2 py-4 mb-10 text-lg font-medium transition-transform border border-black rounded-full active:scale-95 hover:opacity-75">
                Whishlist
                <IoMdHeartEmpty size={20} />
              </button>
              <div>
                <div className="mb-5 text-lg font-bold">Product Details</div>
                <ReactMarkdown className="mb-5 markdown text-md">
                  {product?.metadata?.description}
                </ReactMarkdown>
              </div>
            </div>
          </div>
          <RelatedProducts relatedProducts={relatedProducts} />
        </div>
      )}
    </>
  )
}

export default ProductDetails
