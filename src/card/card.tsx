import * as React from 'react'

export interface CardProps {
  children?: React.ReactNode | React.ReactNode[]
}

export const Card: React.FunctionComponent<CardProps> = ({
  children
}: CardProps) => <div className="card"><div className="card-content">{children}</div></div>

