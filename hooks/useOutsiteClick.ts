import { useEffect } from 'react'

export const useOutsideClick = (ref: React.RefObject<HTMLElement>, callback: () => void) => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback()
      }
    }

    const handleOutsideClick = (event: MouseEvent) => handleClick(event)

    // Adding the listener one larger screen sizes
    if (window.innerWidth > 767) {
      document.addEventListener('mousedown', handleOutsideClick)
    }

    return () => {
      if (window.innerWidth > 767) {
        document.removeEventListener('mousedown', handleOutsideClick)
      }
    }
  }, [ref, callback])
}
