import * as React from 'react'
import { Container } from '../container/container'
import { Search } from '../search/search'
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
  return (
    <div>
      <img src={image} className={styles.heroImage} />
      <Container>
        <div>{header}</div>
        <div className='section'>
          <Search />
        </div>
        <div className='section'>{children}</div>
      </Container>
    </div>
  )
}
