import { AppDispatch } from '@/store'
import { useDispatch } from 'react-redux'

// Custom hook to get the Redux dispatch function
export const useAppDispatch = () => useDispatch<AppDispatch>()
