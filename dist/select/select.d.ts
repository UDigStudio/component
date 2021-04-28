import * as React from 'react';
import 'materialize-css/dist/css/materialize.css';
export interface SelectOption {
    label: string;
    value: any;
    disabled?: boolean;
}
export interface SelectProps extends Omit<React.HTMLProps<HTMLSelectElement>, 'onChange' | 'children'> {
    onChange: (value: any) => void;
    options: SelectOption[];
}
export declare const Select: React.FunctionComponent<SelectProps>;
