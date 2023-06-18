'use client'

import { useOutsideClick } from '@/hooks/useOutsiteClick'
import { navItemsData } from '@/utils/data'
import { MenuProps } from '@/utils/types'
import Link from 'next/link'
import { useRef } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import Spinner from './Spinner'

const Menu = ({ showCatMenu, toggleCatMenu, categories = [], areCategoriesLoading }: MenuProps) => {
  const subMenuRef = useRef(null)
  useOutsideClick(subMenuRef, toggleCatMenu)

  return (
    <ul className="items-center justify-center hidden gap-8 font-semibold md:flex">
      {navItemsData.map((navItem) => {
        return (
          <li key={navItem.id}>
            {navItem?.subMenu ? (
              <div
                className="relative flex items-center justify-center gap-2 cursor-pointer text-black/[0.9]"
                onClick={toggleCatMenu}
              >
                <span>{navItem.name}</span>
                <BsChevronDown size={14} color="#000" />
                {showCatMenu && (
                  <ul
                    className="absolute left-0 flex flex-col px-1 bg-white top-6 min-w-[250px] shadow-lg py-2"
                    ref={subMenuRef}
                  >
                    {areCategoriesLoading ? (
                      <Spinner />
                    ) : (
                      categories.map(({ id, title, slug, metadata }) => {
                        return (
                          <Link
                            href={`/categories/${slug}`}
                            key={id}
                            className="flex items-center justify-between h-12 px-3 text-black/[0.9] hover:bg-black/[0.03] rounded-md"
                          >
                            {title}
                            <span className="text-sm opacity-50">
                              ({metadata?.products.length})
                            </span>
                          </Link>
                        )
                      })
                    )}
                  </ul>
                )}
              </div>
            ) : (
              <Link href={navItem.url || '#'} className="text-black/[0.9]">
                {navItem.name}
              </Link>
            )}
          </li>
        )
      })}
    </ul>
  )
}

export default Menu
