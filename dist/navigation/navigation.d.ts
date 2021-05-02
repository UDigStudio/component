import * as React from 'react';
import './navigation.css';
export interface NavigationProps {
    logo: React.ReactNode;
    rightNav?: React.ReactNode | React.ReactNode[];
}
export declare const Navigation: React.FunctionComponent<NavigationProps>;
