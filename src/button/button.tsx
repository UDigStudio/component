import * as React from 'react'
import 'materialize-css/dist/css/materialize.css'

export interface ButtonProps
  extends Omit<React.HTMLProps<HTMLButtonElement>, 'type'> {
  children?: React.ReactNode
  onClick: () => void
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className='waves-effect waves-light btn' type='button' {...props}>
      {children}
    </button>
  )
}
