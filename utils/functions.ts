import { toast } from 'react-toastify'

export const getDiscountedPricePercentage = (originalPrice: number, discountedPrice: number) => {
  const discount = originalPrice - discountedPrice
  const discountPercentage = (discount / originalPrice) * 100
  return discountPercentage.toFixed(0)
}

export const convertKebabToNormal = (kebabCaseString: string) => {
  const words = kebabCaseString.split('-')

  // Capitalize the first letter of each word and join them with a space
  const normalSpacedString = words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return normalSpacedString
}

export const showNotification = (message: string) => {
  toast.success(message, {
    position: 'bottom-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  })
}
