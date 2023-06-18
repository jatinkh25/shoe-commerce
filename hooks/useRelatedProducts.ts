import { getRelatedProducts } from '@/lib/cosmic'
import { useQuery } from 'react-query'

export function useRelatedProducts(props: string[], productSlug: string) {
  return useQuery(['relatedProducts', productSlug], () => getRelatedProducts(props, productSlug))
}
