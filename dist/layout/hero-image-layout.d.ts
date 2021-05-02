import * as React from 'react';
export interface HeroImageLayoutProps {
    header?: React.ReactNode;
    children: React.ReactNode;
    image: string;
}
export declare const HeroImageLayout: ({ image, header, children }: HeroImageLayoutProps) => JSX.Element;
