import * as React from 'react';
export interface FormHocProps<FormType> {
    name: string;
    defaultValues: FormType;
}
export interface FormProps extends React.HTMLProps<HTMLFormElement> {
}
export declare const FormHoc: <FormType extends Object>({ name, defaultValues }: FormHocProps<FormType>) => React.FunctionComponent<FormProps>;
