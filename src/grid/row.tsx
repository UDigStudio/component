import * as React from 'react'
import { ParentComponent } from '../types/parent-component'
import 'materialize-css/dist/css/materialize.css'

export interface RowProps extends ParentComponent {}

export const Row: React.FunctionComponent<RowProps> = ({
  children
}: RowProps) => {
  return <div className='row'>{children}</div>
}
