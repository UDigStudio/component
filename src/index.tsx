import * as React from 'react'
import styles from './styles.module.css'

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export { Button } from './button/button'
export { Text } from './text/text'
export { Select } from './select/select'
export { Row } from './grid/row'
export { Small } from './grid/small'
export { Medium } from './grid/medium'
export { Large } from './grid/large'
export { ExtraLarge } from './grid/extra-large'
export { Container } from './container/container'
export { HeroImageLayout } from './layout/hero-image-layout'
export { Navigation } from './navigation/navigation'
export { Card } from './card/card'
export { FormHoc } from './form/form'
export { ControlledText } from './form/controlled/controlled-text'
export { ControlledSelect } from './form/controlled/controlled-select'
