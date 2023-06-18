'use client'

import { SizeSelectProps } from '@/utils/types'

const SizeSelect = ({ sizes, selectedSize, setSize, showError }: SizeSelectProps) => {
  return (
    <>
      <div id="size-grid" className="grid grid-cols-3 gap-3">
        {sizes.map((item, i) => (
          <button
            key={i}
            className={`border rounded-md text-center py-3 font-medium ${
              item.enabled
                ? 'hover:border-black cursor-pointer'
                : 'cursor-not-allowed bg-black/[0.1] opacity-50'
            } ${selectedSize === item.size ? 'border-black' : ''}`}
            onClick={() => setSize(item.size)}
          >
            {item.size}
          </button>
        ))}
      </div>
      <>{showError && <p className="pt-1 text-red-600">Size Selection is Required.</p>}</>
    </>
  )
}

export default SizeSelect
