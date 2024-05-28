import { ConfigProvider } from 'antd'
import './App.css'
import LayoutComponent from './components/Layout/index.jsx'

function App() {

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#FD861D'
        }
      }}
    >

      <LayoutComponent></LayoutComponent>
    </ConfigProvider>
  )
}

export default App
