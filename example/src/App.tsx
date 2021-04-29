import React, { useState } from 'react'

import {
  ExampleComponent,
  Text,
  Select,
  Row,
  Small,
  ExtraLarge,
  Large,
  Medium,
  Container,
  Card
} from 'component'
import 'component/dist/index.css'

const App = () => {
  const [value, setValue] = useState('Create React Library Example 😄')
  const [selectValue, setSelectValue] = useState<string>()
  return (
    <Container>
      <ExampleComponent text={value} />
      <Row>
        <Large>
          <label>input: </label>
          <Text
            value={value}
            onChange={(newValue: string) => setValue(newValue)}
          />
        </Large>
        <Large>
          <label>select: </label>
          <Select
            onChange={(newValue: string) => setSelectValue(newValue)}
            value={selectValue}
            options={[
              { value: 1, label: '1' },
              { value: 2, label: '2' },
              { value: 3, label: '3', disabled: true }
            ]}
            placeholder='test'
          />
        </Large>
        <Large><Card>Hello world</Card></Large>
      </Row>
      <Row>
        <Small>Small</Small>
        <Medium>Medium</Medium>
        <Large>Large</Large>
        <ExtraLarge>Extra Large</ExtraLarge>
      </Row>
    </Container>
  )
}

export default App
