import * as React from 'react'
import { ParentComponent } from '../types/parent-component'
import 'materialize-css/dist/css/materialize.css'

export interface MediumProps extends ParentComponent {}

export const Medium: React.FunctionComponent<MediumProps> = ({
  children
}: MediumProps) => <div className='col s8 m6 l4'>{children}</div>
