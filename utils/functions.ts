import { toast } from 'react-toastify'

export const getDiscountedPricePercentage = (originalPrice: number, discountedPrice: number) => {
  const discount = originalPrice - discountedPrice
  const discountPercentage = (discount / originalPrice) * 100
  return discountPercentage.toFixed(0)
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
