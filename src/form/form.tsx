import * as React from 'react'
import { FormProvider, useForm, useWatch } from 'react-hook-form'

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
  const values = useWatch({
    control: methods.control
  })
  React.useEffect(() => {
    console.log('values: ', values)
  }, [values])
  return (
    <FormProvider {...methods}>
      <form {...props} name={name} onSubmit={(event) => event.preventDefault()}>
        {children}
      </form>
    </FormProvider>
  )
}
