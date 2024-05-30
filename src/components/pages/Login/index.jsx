import React from 'react';
import LayoutComponent from '../../Layout/index.jsx'
import FormLogin from '../../FormLogin/index.jsx';
import ImageLogin from '../../img/imageLogin.jsx';

const Login = () => {
    return (
        <LayoutComponent

            leftColSize={{ xs: 0, sm: 0, md: 8, lg: 6 }}
            rightColSize={{ xs: 24, sm: 24, md: 16, lg: 17 }}
            leftContent={<ImageLogin />}
            rigthContent={<FormLogin />}
        />
    );
}

export default Login;