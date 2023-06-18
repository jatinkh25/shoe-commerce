import { getProduct } from '@/lib/cosmic'
import { useQuery } from 'react-query'

export function useProduct(props: string[], productSlug: string) {
  return useQuery(['product', productSlug], () => getProduct(props, productSlug))
}
