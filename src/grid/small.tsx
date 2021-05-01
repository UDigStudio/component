import * as React from 'react'
import { ParentComponent } from '../types/parent-component'
import 'materialize-css/dist/css/materialize.css'

export interface SmallProps extends ParentComponent {}

export const Small: React.FunctionComponent<SmallProps> = ({
  children
}: SmallProps) => <div className='col s12 m12 l4'>{children}</div>
