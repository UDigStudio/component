import * as React from 'react'
import { useController, useFormContext } from 'react-hook-form'
import { Text, TextProps } from '../../text/text'

export interface ControlledTextProps
  extends Omit<TextProps, 'onChange' | 'value'> {
  label: string
  name: string
}

export const ControlledText: React.FunctionComponent<ControlledTextProps> = ({
  name,
  label,
  ...props
}: ControlledTextProps) => {
  const { control } = useFormContext()
  const { field } = useController({
    name,
    control
  })
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Text {...props} {...field} />
    </div>
  )
}
