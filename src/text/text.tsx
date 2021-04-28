import classNames from 'classnames'
import * as React from 'react'
import 'materialize-css/dist/css/materialize.css'

export interface TextProps
  extends Omit<React.HTMLProps<HTMLInputElement>, 'type' | 'onChange'> {
  value?: string
  onChange: (value: string) => void
  className?: string
}

export const Text: React.FunctionComponent<TextProps> = ({
  onChange,
  className,
  ...props
}: TextProps) => {
  const change = (event: React.SyntheticEvent<HTMLInputElement>) => {
    onChange(event.currentTarget.value)
  }
  const componentProps: React.HTMLProps<HTMLInputElement> = {
    type: 'text',
    onChange: change,
    className: classNames('input-field', className),
    ...props
  }
  return <input {...componentProps} />
}
