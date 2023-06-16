'use client'

import { useOutsideClick } from '@/hooks/useOutsiteClick'
import { navItemsData, subMenuData } from '@/utils/data'
import { MenuProps } from '@/utils/types'
import Link from 'next/link'
import { useRef } from 'react'
import { BsChevronDown } from 'react-icons/bs'

const Menu = ({ showCatMenu, toggleCatMenu }: MenuProps) => {
  const subMenuRef = useRef(null)
  useOutsideClick(subMenuRef, toggleCatMenu)

  return (
    <ul className="items-center justify-center hidden gap-8 md:flex">
      {navItemsData.map((navItem) => {
        return (
          <li key={navItem.id}>
            {navItem?.subMenu ? (
              <div
                className="relative flex items-center justify-center gap-2 cursor-pointer"
                onClick={toggleCatMenu}
              >
                <span>{navItem.name}</span>
                <BsChevronDown size={14} />
                {showCatMenu && (
                  <ul
                    className="absolute left-0 flex flex-col px-1 bg-white top-6 min-w-[250px] shadow-lg py-2"
                    ref={subMenuRef}
                  >
                    {subMenuData.map(({ id, name, url, doc_count }) => {
                      return (
                        <Link
                          href={url}
                          key={id}
                          className="flex items-center justify-between h-12 px-3 hover:bg-black/[0.03] rounded-md"
                        >
                          {name}
                          <span className="text-sm opacity-50">{doc_count}</span>
                        </Link>
                      )
                    })}
                  </ul>
                )}
              </div>
            ) : (
              <Link href={navItem.url || '#'}>{navItem.name}</Link>
            )}
          </li>
        )
      })}
    </ul>
  )
}

export default Menu
