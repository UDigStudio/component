import * as React from 'react';
import { SelectProps } from '../../select/select';
export interface ControlledSelectProps extends Omit<SelectProps, 'onChange' | 'value'> {
    label: string;
    name: string;
}
export declare const ControlledSelect: React.FunctionComponent<ControlledSelectProps>;
