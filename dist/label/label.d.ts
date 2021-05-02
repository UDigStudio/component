import { HTMLProps } from 'react';
export interface LabelProps extends HTMLProps<HTMLLabelElement> {
    htmlFor: string;
}
