import * as React from 'react'
import styles from './styles.module.css'

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export { Text } from './text/text'
export { Select } from './select/select'
export { Row } from './grid/row'
export { Small } from './grid/small'
export { Medium } from './grid/medium'
export { Large } from './grid/large'
export { ExtraLarge } from './grid/extra-large'
export { Container } from './container/container'
export { FormHoc } from './form/form'
