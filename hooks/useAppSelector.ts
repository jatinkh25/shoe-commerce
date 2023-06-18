import { RootState } from '@/store'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

// Custom hook to access the Redux store's state
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
