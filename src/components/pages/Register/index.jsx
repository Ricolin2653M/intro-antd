import React from 'react';
import LayoutComponent from '../../Layout/index.jsx'
import FormRegister from '../../FormRegister/index.jsx';
import ImageLogin from '../../img/imageLogin.jsx';

const Register = () => {
    return (
        <LayoutComponent

            leftColSize={{ xs: 0, sm: 0, md: 8, lg: 6 }}
            rightColSize={{ xs: 24, sm: 24, md: 16, lg: 18 }}
            leftContent={<FormRegister />}
            rigthContent={<ImageLogin />}
        />
    );
}

export default Register;