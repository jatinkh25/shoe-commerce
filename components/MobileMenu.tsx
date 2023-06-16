'use client'

import Link from 'next/link'
import { BsChevronDown } from 'react-icons/bs'
import { navItemsData, subMenuData } from '@/utils/data'
import { Fragment, useState } from 'react'
import { MobileMenuProps } from '@/utils/types'

const MenuMobile = ({
  showMobileMenu,
  toggleMobileMenu,
  showCatMenu,
  toggleCatMenu,
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
            {item?.subMenu ? (
              <li
                className="relative flex flex-col px-5 py-4 border-b cursor-pointer"
                onClick={toggleCatMenu}
              >
                <div className="flex items-center justify-between">
                  {item.name}
                  <BsChevronDown size={14} />
                </div>

                {showCatMenu && (
                  <ul className="bg-black/[0.05] -mx-5 mt-4 -mb-4">
                    {subMenuData?.map(({ id, name, url, doc_count }) => {
                      return (
                        <Link
                          key={id}
                          href={url}
                          onClick={() => {
                            toggleMobileMenu()
                            toggleCatMenu()
                          }}
                        >
                          <li className="flex justify-between px-8 py-4 border-t">
                            {name}
                            <span className="text-sm opacity-50">{doc_count}</span>
                          </li>
                        </Link>
                      )
                    })}
                  </ul>
                )}
              </li>
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
