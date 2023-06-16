export interface MenuProps {
  showCatMenu: boolean
  toggleCatMenu: () => void
}

export interface MobileMenuProps extends MenuProps {
  showMobileMenu: boolean
  toggleMobileMenu: () => void
}

export interface CategoryProps {
  params: { categoryName: string }
}
