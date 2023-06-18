import { getAllCategories } from '@/lib/cosmic'
import { useQuery } from 'react-query'

export function useAllCategories(props: string[]) {
  return useQuery(['categories'], () => getAllCategories(props))
}
