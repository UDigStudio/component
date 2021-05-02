import * as React from 'react';
import { TextProps } from '../../text/text';
export interface ControlledTextProps extends Omit<TextProps, 'onChange' | 'value'> {
    label: string;
    name: string;
}
export declare const ControlledText: React.FunctionComponent<ControlledTextProps>;
