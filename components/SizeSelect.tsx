'use client'

import { useState } from 'react'

const SizeSelect = () => {
  const [selectedSize, setSelectedSize] = useState()

  return (
    <>
      <div className="grid grid-cols-3 gap-3">
        <div className="px-4 py-2 text-center border rounded-md cursor-pointer hover:outline hover:outline-1 hover:outline-black">
          UK 6
        </div>
        <div className="px-4 py-2 text-center border rounded-md cursor-pointer hover:outline hover:outline-1 hover:outline-black">
          UK 6
        </div>
        <div className="px-4 py-2 text-center border rounded-md cursor-pointer hover:outline hover:outline-1 hover:outline-black">
          UK 6
        </div>
        <div className="px-4 py-2 text-center border rounded-md cursor-pointer hover:outline hover:outline-1 hover:outline-black">
          UK 6
        </div>
        <div className="px-4 py-2 text-center border rounded-md cursor-pointer hover:outline hover:outline-1 hover:outline-black">
          UK 6
        </div>
        <div className="px-4 py-2 text-center border rounded-md cursor-pointer hover:outline hover:outline-1 hover:outline-black">
          UK 6
        </div>
        <div className="px-4 py-2 text-center border rounded-md cursor-pointer hover:outline hover:outline-1 hover:outline-black">
          UK 6
        </div>
        <div className="px-4 py-2 text-center border rounded-md cursor-pointer hover:outline hover:outline-1 hover:outline-black">
          UK 6
        </div>
        <div className="px-4 py-2 text-center border rounded-md cursor-not-allowed bg-black/[0.1] opacity-50">
          UK 6
        </div>
      </div>
      {selectedSize == null && <p className="text-red-600 pt-1">Size Selection is Required.</p>}
    </>
  )
}

export default SizeSelect
