import React, { useState } from 'react'

import { ExampleComponent, Text, Select } from 'component'
import 'component/dist/index.css'

const App = () => {
  const [value, setValue] = useState("Create React Library Example 😄");
  const [selectValue, setSelectValue] = useState<string>();
  return <div style={{padding: 100}}>
    <ExampleComponent text={value} />
    input: <Text value={value} onChange={(newValue: string) => setValue(newValue)} />
    select: <Select onChange={(newValue: string) => setSelectValue(newValue)} value={selectValue} options={[
      { value: 1, label: '1' },
      { value: 2, label: '2' },
      { value: 3, label: '3', disabled: true }
    ]} placeholder="test" />
  </div>
}

export default App
