import React, { useState } from 'react'

import { ExampleComponent, Text, Select, Row, Small, ExtraLarge, Large, Medium, Container } from 'component'
import 'component/dist/index.css'

const App = () => {
  const [value, setValue] = useState("Create React Library Example 😄");
  const [selectValue, setSelectValue] = useState<string>();
  return <Container>
    <ExampleComponent text={value} />
    <Row>
      <Large>k
        input: <Text value={value} onChange={(newValue: string) => setValue(newValue)} />
      </Large>
      <Large>
          select: <Select onChange={(newValue: string) => setSelectValue(newValue)} value={selectValue} options={[
          { value: 1, label: '1' },
          { value: 2, label: '2' },
          { value: 3, label: '3', disabled: true }
        ]} placeholder="test" />
      </Large>
    </Row>
    <Row>
      <Small>Small</Small>
      <Medium>Medium</Medium>
      <Large>Large</Large>
      <ExtraLarge>Extra Large</ExtraLarge>
    </Row>
  </Container>
}

export default App
