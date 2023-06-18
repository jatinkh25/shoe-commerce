'use client' // Error components must be Client Components

import Link from 'next/link'

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center w-full p-4 min-h-safe-height md:min-h-safe-height-md">
      <h2 className="text-2xl font-medium">Something went wrong!</h2>
      <Link
        href="/"
        className="px-4 py-2 mt-4 text-lg font-medium text-white transition-transform bg-black rounded-full active:scale-95 hover:opacity-75"
      >
        Home
      </Link>
    </div>
  )
}
