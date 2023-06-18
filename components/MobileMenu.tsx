'use client'

import Link from 'next/link'
import { BsChevronDown } from 'react-icons/bs'
import { navItemsData } from '@/utils/data'
import { Fragment } from 'react'
import { MobileMenuProps } from '@/utils/types'
import Spinner from './Spinner'

const MenuMobile = ({
  showMobileMenu,
  toggleMobileMenu,
  showCatMenu,
  toggleCatMenu,
  categories = [],
  areCategoriesLoading,
}: MobileMenuProps) => {
  return (
    <ul
      className={`${
        showMobileMenu ? 'block' : 'hidden'
      } flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black`}
    >
      {navItemsData.map((item) => {
        return (
          <Fragment key={item.id}>
            {item.subMenu ? (
              <>
                <li
                  className="relative flex flex-col px-5 py-4 border-b cursor-pointer"
                  onClick={toggleCatMenu}
                >
                  <div className="flex items-center justify-between">
                    {item.name}
                    <BsChevronDown size={14} />
                  </div>
                </li>
                {showCatMenu && (
                  <div className="bg-black/[0.05] -mx-5">
                    {areCategoriesLoading ? (
                      <Spinner />
                    ) : (
                      categories?.map(({ id, title, slug, metadata }) => {
                        return (
                          <Link
                            key={id}
                            href={`/categories/${slug}`}
                            onClick={() => {
                              toggleCatMenu()
                              toggleMobileMenu()
                            }}
                            className="flex justify-between px-8 py-4 border-t"
                          >
                            {title}
                            <span className="text-sm opacity-50">
                              ({metadata?.products.length})
                            </span>
                          </Link>
                        )
                      })
                    )}
                  </div>
                )}
              </>
            ) : (
              <li className="px-5 py-4 border-b">
                <Link href={item?.url || '#'} onClick={toggleMobileMenu}>
                  {item.name}
                </Link>
              </li>
            )}
          </Fragment>
        )
      })}
    </ul>
  )
}

export default MenuMobile
