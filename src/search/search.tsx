import * as React from 'react'
import { Text } from '../text/text'
import { Row } from '../grid/row'
import { Button } from '../button/button'
import styles from './search.module.css'

export const Search = () => {
  const [search, setSearch] = React.useState('')
  return (
    <Row>
      <div className='col s10'>
        <Text className={styles.search} value={search} onChange={setSearch} />
      </div>
      <div className='col s2'>
        <Button onClick={() => {}}>Search</Button>
      </div>
    </Row>
  )
}
