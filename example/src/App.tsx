import React from 'react'

import { ExampleComponent, ControlledText, ControlledSelect, Row, Small, ExtraLarge, Large, Medium, Container, FormHoc } from 'component'
import 'component/dist/index.css'

const MyForm = FormHoc<{
  text: string
  select: string | null
}>({
  name: 'my-form',
  defaultValues: {
    text: "Create React Library Example 😄",
    select: null,
  }
});

const App = () => {
  return <Container>
    <ExampleComponent text={"Create React Library Example 😄"} />
    <MyForm>
      <Row>
        <Large>
          <ControlledText name='text' label='text' />
        </Large>
        <Large>
          <ControlledSelect
            name='select'
            label='select'
            options={[
              { value: 1, label: '1' },
              { value: 2, label: '2' },
              { value: 3, label: '3', disabled: true }
            ]}
            placeholder='select an option'
          />
        </Large>
      </Row>
      <Row>
        <Small>Small</Small>
        <Medium>Medium</Medium>
        <Large>Large</Large>
        <ExtraLarge>Extra Large</ExtraLarge>
      </Row>
    </MyForm>
  </Container>
}

export default App
