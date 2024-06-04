import { DatePicker, Button, ConfigProvider } from 'antd'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './components/routes'
import { AuthProvider } from './context/AuthContext'
import './App.css'


function App() {

  return (

    <AuthProvider>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#FD861D'
          }
        }}
      >
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ConfigProvider>
    </AuthProvider>
  )
}

export default App
