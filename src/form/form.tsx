import * as React from 'react'
import { FormProvider, useForm } from 'react-hook-form'

export interface FormHocProps<FormType> {
  name: string
  defaultValues: FormType
}

export interface FormProps extends React.HTMLProps<HTMLFormElement> {}

export const FormHoc = <FormType extends Object>({
  name,
  defaultValues
}: FormHocProps<FormType>): React.FunctionComponent<FormProps> => ({
  children,
  ...props
}: FormProps) => {
  const methods = useForm<any & FormType>({
    defaultValues
  })
  return (
    <FormProvider {...methods}>
      <form {...props} name={name} onSubmit={(event) => event.preventDefault()}>
        {children}
      </form>
    </FormProvider>
  )
}
