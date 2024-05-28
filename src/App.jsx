import { ConfigProvider } from 'antd'
import './App.css'
import LayoutComponent from './components/Layout/index.jsx'
import FormLogin from './components/FormLogin/index.jsx';
import ImageLogin from './components/img/imageLogin.jsx';

function App() {

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#FD861D'
        }
      }}
    >

      <LayoutComponent

        leftColSize={{ xs: 0, sm: 0, md: 8, lg: 6 }}
        rightColSize={{ xs: 24, sm: 24, md: 16, lg: 18 }}
        leftContent={<ImageLogin />}
        rigthContent={<FormLogin />}
      />
    </ConfigProvider>
  )
}

export default App
