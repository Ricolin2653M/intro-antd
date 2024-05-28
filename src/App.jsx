import { DatePicker, Button, ConfigProvider } from 'antd'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './components/routes'
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
      <BrowserRouter>
        <AppRoutes></AppRoutes>
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default App
