import { ReactNode } from 'react'

export interface NavigationProps {
  logo: ReactNode
  leftNav: ReactNode | ReactNode[]
  rightNav: ReactNode | ReactNode[]
}
