import * as React from 'react';
import 'materialize-css/dist/css/materialize.css';
export interface TextProps extends Omit<React.HTMLProps<HTMLInputElement>, 'type' | 'onChange'> {
    value?: string;
    onChange: (value: string) => void;
    className?: string;
}
export declare const Text: React.FunctionComponent<TextProps>;
