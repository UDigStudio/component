import * as React from 'react'
import { ParentComponent } from '../types/parent-component'
import 'materialize-css/dist/css/materialize.css'

export interface ExtraLargeProps extends ParentComponent {}

export const ExtraLarge: React.FunctionComponent<ExtraLargeProps> = ({
  children
}: ExtraLargeProps) => <div className='col s12 m10 l8'>{children}</div>
