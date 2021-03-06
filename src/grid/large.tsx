import * as React from 'react'
import { ParentComponent } from '../types/parent-component'
import 'materialize-css/dist/css/materialize.css'

export interface LargeProps extends ParentComponent {}

export const Large: React.FunctionComponent<LargeProps> = ({
  children
}: LargeProps) => <div className='col s12 m12 l10'>{children}</div>
