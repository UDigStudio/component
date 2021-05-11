import * as React from 'react'
import { Text } from '../text/text'
import { Row } from '../grid/row'
import { Button } from '../button/button'

export const Search = () => {
  const [search, setSearch] = React.useState('')
  return (
    <Row>
      <div
        className='col s10'
        style={{ paddingLeft: '0px', paddingRight: '0px', width: '90%' }}
      >
        <Text
          style={{
            backgroundColor: 'white',
            paddingLeft: '0.5em',
          }}
          value={search}
          onChange={setSearch}
        />
      </div>
      <div className='col' style={{ paddingRight: '0px', float: 'right' }}>
        <Button
          style={{
            float: 'right',
            backgroundColor: '#FC8135',
            height: '45px'
          }}
          onClick={() => {}}
        >
          Search
        </Button>
      </div>
    </Row>
  )
}
