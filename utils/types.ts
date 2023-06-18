import { CartItem } from '@/components'

export interface Image {
  url: string
  imgix_url: string
}

export interface HeroBannerProps {
  images: Image[]
}

export interface MenuProps {
  showCatMenu: boolean
  toggleCatMenu: () => void
  categories: Category[] | undefined
  areCategoriesLoading: boolean
}

export interface MobileMenuProps extends MenuProps {
  showMobileMenu: boolean
  toggleMobileMenu: () => void
}

export interface CategoryProps {
  params: { slug: string }
}

export interface ProductDetailsProps extends CategoryProps {}

export interface Size {
  size: string
  enabled: boolean
}

export interface ProductImage {
  image: Image
}

export interface Category {
  id: string
  title: string
  slug: string
  metadata: {
    products: Product[]
  }
}

export interface Product {
  id: string
  title: string
  slug: string
  thumbnail: string
  metadata: {
    subtitle: string
    price: number
    description: string
    size: Size[]
    images?: ProductImage[]
    original_price: number
    categories: Category[]
  }
}

export interface RelatedProductsProps {
  relatedProducts: Product[]
}

export interface ProductDetailsCarouselProps {
  images?: ProductImage[]
}

export interface SizeSelectProps {
  sizes: Size[]
  selectedSize: string | null
  setSize: (size: string) => void
  showError: boolean
}

export interface CartItem extends Product {
  selectedSize: string
  quantity: number
  totalPrice: number
}

export interface CartState {
  cartItems: CartItem[]
  totalCartValue: number
}

export interface UpdateCartItemQuantity {
  id: string
  type: 'INCREASE' | 'DECREASE'
  selectedSize: string
}

export interface UpdateCartItemSize {
  id: string
  oldSize: string
  newSize: string
}

export interface CartItemProps extends CartItem {}
