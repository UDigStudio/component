import * as React from 'react';
import 'materialize-css/dist/css/materialize.css';
export interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'type'> {
    children?: React.ReactNode;
    onClick: () => void;
}
export declare const Button: ({ children, ...props }: ButtonProps) => JSX.Element;
