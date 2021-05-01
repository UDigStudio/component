import * as React from 'react'
import { ParentComponent } from '../types/parent-component'
import 'materialize-css/dist/css/materialize.css'

export interface MediumProps extends ParentComponent {}

export const Medium: React.FunctionComponent<MediumProps> = ({
  children
}: MediumProps) => <div className='col s12 m12 l6'>{children}</div>
