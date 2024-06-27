import { useState } from 'react';
import { Form, Input, Button, Card } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import authService from '../../services/auth';
import { useAuth } from '../../hooks/useAuth';

import './FormLogin.css'

const FormLogin = () => {
    const useAuthData = useAuth();
    console.log(useAuthData);

    const { login } = useAuthData

    const navigate = useNavigate();

    //Estado de error de registro
    const [loginError, setLoginError] = useState(false);
    //Estado de carga
    const [loading, setLoading] = useState(false); //Estado de carga

    const onFinish = async (values) => {
        setLoading(true); //Establece elestadode carga a true al enviar el formulario
        setLoginError(false);
        try {
            const response = await authService.loginF(values.username, values.password);
            if (response && response.data) {
                //console.log('Inicio de sesión exitoso:', response.data);
                localStorage.setItem('token', response.data.token); //Guarda el token en el almacenamiento local
                login(response.data.token);
                //console.log(response.data.token);
                navigate('/'); //Redirige al usuario a la pagina principal
            } else {
                console.error('Error en el inicio de sesión: Respuesta inesperada');
                setLoginError(true);
            }

        } catch (error) {
            console.log('Error en el inicio de sesión: ', error.response.data);
            setLoginError(true);
        } finally {
            setLoading(false);//Establece el estdo de carga a flase después de recibir la respuesta
        }
        //console.log('Success: ', values);
    }
    const onFinishFailed = (errorInfo) => {
        console.log('Failed: ', errorInfo);
        setLoginError(true);
    }
    return (
        <>
            <Card
                title="Bienvenido de nuevo"
                bordered={false}
                className='responsive-card'
            >
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        name="username"
                        rules={[{
                            required: true,
                            message: 'Por favor ingrese su usuario'
                        }]}
                    >
                        <Input prefix={<UserOutlined />} placeholder='Usuario' />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{
                            required: true,
                            message: 'Por favor ingrese su contraseña'
                        }]}
                    >
                        <Input.Password prefix={<LockOutlined />} placeholder='Contraseña' />
                    </Form.Item>
                    <Form.Item>
                        {loginError && <p style={{ color: 'red' }}>Credenciales incorrectas.<br /> Inténtalo de nuevo</p>}
                        <Button type="primary" htmlType="submit" className="login-form-button" loading={loading}>
                            Iniciar sesión
                        </Button>
                    </Form.Item>
                    ¿Aún no tienes cuenta? <a href="/register">Registrate</a>
                </Form>
            </Card>
        </>
    );
}

export default FormLogin;