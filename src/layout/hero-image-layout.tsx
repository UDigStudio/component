import * as React from 'react'
import { Container } from '../container/container'
import styles from './hero-image-layout.module.css'

export interface HeroImageLayoutProps {
  header?: React.ReactNode
  children: React.ReactNode
  image: string
}

export const HeroImageLayout = ({
  image,
  header,
  children
}: HeroImageLayoutProps) => {
  const heroImageStyle = React.useMemo(
    () => ({
      background: image
    }),
    [image]
  )
  return (
    <div>
      <div style={heroImageStyle} className={styles.heroImage} />
      <Container>
        {header}
        {children}
      </Container>
    </div>
  )
}
