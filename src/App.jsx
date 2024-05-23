import { Button, ConfigProvider, DatePicker } from 'antd'
import './App.css'

function App() {

  return (
    <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#FD861D'
      }
    }}
    >
      <DatePicker/>
      <Button type="primary">Primary Button</Button>
    </ConfigProvider>
  )
}

export default App
