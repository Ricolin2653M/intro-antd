import { useState } from 'react';
import { Form, Input, Button, Card, InputNumber } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import ProductService from '../../services/products';
import { useAuth } from '../../hooks/useAuth';
import Nav from '../Nav/index';
import './FormNewP.css'

const FormNewP = () => {
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
            const response = await ProductService.addNewP(values.name, values.author, values.editorial, values.pages, values.price, values.year, values.genre, values.review )
            
            if (response && response.data) {
                
                navigate('/Libros'); //Redirige al usuario a la pagina principal
            } else {
                console.error('Error al agregar libro: Respuesta inesperada');
                setLoginError(true);
            }

        } catch (error) {
            console.log('Error al agregar libro: ', error.response.data);
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
                title="Agregar nuevo producto"
                bordered={false}
                className='responsive-card'
            >
                <Form
                    name="normal_login"
                    className="newProd-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        name="name"
                        rules={[{
                            required: true,
                            message: 'Por favor ingrese el nombre'
                        }]}
                    >
                        <Input prefix={<UserOutlined />} placeholder='Nombre del libro' />
                    </Form.Item>

                    <Form.Item
                        name="author"
                        rules={[{
                            required: true,
                            message: 'Por favor ingrese el author'
                        }]}
                    >
                        <Input prefix={<UserOutlined />} placeholder='Author' />
                    </Form.Item>

                    <Form.Item
                        name="editorial"
                        rules={[{
                            required: true,
                            message: 'Por favor ingrese la editorial'
                        }]}
                    >
                        <Input prefix={<UserOutlined />} placeholder='editorial' />
                    </Form.Item>

                    <Form.Item
                        name="pages"
                        rules={[{
                            required: true,
                            message: 'Por favor ingrese la cantidad de páginas'
                        }]}
                    >
                        <InputNumber prefix={<UserOutlined />} placeholder='Páginas' style={{ width: '100%' }} />
                    </Form.Item>

                    <Form.Item
                        name="price"
                        rules={[{
                            required: true,
                            message: 'Por favor ingrese el precio'
                        }]}
                    >
                        <InputNumber prefix={<UserOutlined />} placeholder='Precio' style={{ width: '100%' }} />
                    </Form.Item>

                    <Form.Item
                        name="year"
                        rules={[{
                            required: true,
                            message: 'Por favor ingrese el año'
                        }]}
                    >
                        <InputNumber prefix={<UserOutlined />} placeholder='Año' style={{ width: '100%' }} />
                    </Form.Item>

                    <Form.Item
                        name="genre"
                        rules={[{
                            required: true,
                            message: 'Por favor ingrese el genero'
                        }]}
                    >
                        <Input prefix={<UserOutlined />} placeholder='Genero' />
                    </Form.Item>

                    <Form.Item
                        name="review"
                        rules={[{
                            required: true,
                            message: 'Por favor ingrese una pequeña review'
                        }]}
                    >
                        <Input prefix={<UserOutlined />} placeholder='Review' />
                    </Form.Item>
                    
                    <Form.Item>
                        {loginError && <p style={{ color: 'red' }}>Error al agregar libro.<br /> Inténtalo de nuevo</p>}
                        <Button type="primary" htmlType="submit" className="login-form-button" loading={loading}>
                            Agregar
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </>
    );
}

export default FormNewP;