import React from 'react'

import {
  ControlledText,
  ControlledSelect,
  Row,
  Small,
  ExtraLarge,
  Large,
  Medium,
  Navigation,
  FormHoc,
  Card,
  HeroImageLayout,
} from 'component'
import 'component/dist/index.css'

const MyForm = FormHoc<{
  text: string
  select: string | null
}>({
  name: 'my-form',
  defaultValues: {
    text: "Create React Library Example 😄",
    select: '',
  }
})

const AppHeader = () => (
  <Navigation
    logo='CarMin'
    rightNav={[
      <a href='#'>Button Four</a>,
      <a href='#'>Button Five</a>,
      <a href='#'>Button Six</a>
    ]}
  />
)

const imageUrl: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6q66Ozps3g0XzBTQem4T-3hAJ75PBFxLiiQ&usqp=CAU';

const App = () => {
  return (
    <HeroImageLayout image={imageUrl} header={<AppHeader />}>
      <MyForm>
        <Card>
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
            <Small>Small</Small>
            <Small>Small</Small>
            <Medium>Medium</Medium>
            <Medium>Medium</Medium>
            <Large>Large</Large>
            <ExtraLarge>Extra Large</ExtraLarge>
          </Row>
        </Card>
      </MyForm>
    </HeroImageLayout>
  )
}

export default App
