import * as React from 'react'
import { Container } from '../container/container'
import { Search } from '../search/search'

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
      <img
        src={image}
        style={{
          width: '100%',
          position: 'absolute',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto',
          zIndex: -1
        }}
      />
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
