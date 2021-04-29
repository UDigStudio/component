import * as React from 'react'
import { useController, useFormContext } from 'react-hook-form'
import { Select, SelectProps } from '../../select/select'

export interface ControlledSelectProps
  extends Omit<SelectProps, 'onChange' | 'value'> {
  label: string
  name: string
}

export const ControlledSelect: React.FunctionComponent<ControlledSelectProps> = ({
  name,
  label,
  ...props
}: ControlledSelectProps) => {
  const { control } = useFormContext()
  const { field } = useController({
    name,
    control
  })
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Select {...props} {...field} />
    </div>
  )
}
