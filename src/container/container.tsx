import * as React from 'react'
import 'materialize-css/dist/css/materialize.css'
import { ParentComponent } from '../types/parent-component'

export interface ContainerProps extends ParentComponent {
  children?: React.ReactNode | React.ReactNode[]
}

export const Container: React.FunctionComponent<ContainerProps> = ({
  children
}: ContainerProps) => {
  return <div className='container'>{children}</div>
}
