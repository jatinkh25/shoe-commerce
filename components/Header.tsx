'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Menu from './Menu'
import { IoMdHeartEmpty } from 'react-icons/io'
import { BsCart } from 'react-icons/bs'
import { BiMenuAltRight } from 'react-icons/bi'
import { VscChromeClose } from 'react-icons/vsc'
import { ComponentWrapper, MobileMenu, Spinner } from '.'
import { useAppSelector } from '@/hooks/useAppSelector'
import { useAllCategories } from '@/hooks/useAllCategories'
import Error from '@/app/error'

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [navbarClass, setNavbarClass] = useState('translate-y-0')
  const [lastScrollY, setLastScrollY] = useState(0)
  const [showCatMenu, setShowCatMenu] = useState(false)
  const numberOfItemsInCart = useAppSelector((state) => state.cart.cartItems.length)

  useEffect(() => {
    const controlNavbar = () => {
      // Check the scroll position and update the navbar appearance
      if (window.scrollY > 200) {
        if (window.scrollY > lastScrollY && showMobileMenu === false) {
          setNavbarClass('-translate-y-[80px]')
        } else {
          setNavbarClass('shadow-sm')
        }
      } else {
        setNavbarClass('translate-y-0')
      }
      setLastScrollY(window.scrollY)
    }

    window.addEventListener('scroll', controlNavbar)
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [lastScrollY, showMobileMenu])

  const {
    data: categories,
    isLoading,
    isError,
  } = useAllCategories(['id', 'title', 'slug', 'metadata'])

  if (isError) return <Error />

  const toggleMobileMenu = () => {
    setShowMobileMenu((prevValue) => !prevValue)
  }

  const toggleCatMenu = () => {
    setShowCatMenu((prevValue) => !prevValue)
  }

  return (
    <header
      className={`h-[50px] md:h-[80px] bg-white z-20 sticky top-0 transition-transform duration-300 ${navbarClass}`}
    >
      <ComponentWrapper className="flex items-center justify-between h-full px-5 md:px-10">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Shoe Company Logo"
            width={40}
            height={40}
            className="md:w-[60px]"
          />
        </Link>
        <Menu
          showCatMenu={showCatMenu}
          toggleCatMenu={toggleCatMenu}
          categories={categories}
          areCategoriesLoading={isLoading}
        />
        <MobileMenu
          showMobileMenu={showMobileMenu}
          toggleMobileMenu={toggleMobileMenu}
          showCatMenu={showCatMenu}
          toggleCatMenu={toggleCatMenu}
          categories={categories}
          areCategoriesLoading={isLoading}
        />
        <div className="flex items-center justify-center gap-8">
          <div className="navbar-icon-wrapper">
            <IoMdHeartEmpty className="navbar-icon" />
            <span className="navbar-icon-count">5</span>
          </div>
          <Link href="/cart" className="navbar-icon-wrapper">
            <BsCart className="navbar-icon" />
            <span className="navbar-icon-count">{numberOfItemsInCart}</span>
          </Link>
          {showMobileMenu ? (
            <VscChromeClose
              size={18}
              className="cursor-pointer md:hidden"
              onClick={toggleMobileMenu}
            />
          ) : (
            <BiMenuAltRight
              size={24}
              className="cursor-pointer md:hidden"
              onClick={toggleMobileMenu}
            />
          )}
        </div>
      </ComponentWrapper>
    </header>
  )
}

export default Header
