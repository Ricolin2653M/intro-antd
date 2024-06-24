import { useState } from 'react';
import { Form, Input, Button, Card, InputNumber } from 'antd';
import { 
    BookOutlined, 
    UserOutlined, 
    HomeOutlined, 
    NumberOutlined, 
    DollarOutlined, 
    CalendarOutlined, 
    TagsOutlined, 
    FileTextOutlined 
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import ProductService from '../../services/products';
import { useAuth } from '../../hooks/useAuth';
import './FormNewP.css';
import Nav from '../Nav/index.jsx';

const FormNewP = () => {
    const useAuthData = useAuth();
    console.log(useAuthData);

    const navigate = useNavigate();

    const [loginError, setLoginError] = useState(false);
    const [loading, setLoading] = useState(false);

    const onFinish = async (values) => {
        setLoading(true);
        setLoginError(false);
        try {
            const response = await ProductService.addNewP(values.name, values.author, values.editorial, values.pages, values.price, values.year, values.genre, values.review );
            
            if (response && response.data) {
                navigate('/Libros');
            } else {
                console.error('Error al agregar libro: Respuesta inesperada');
                setLoginError(true);
            }

        } catch (error) {
            console.log('Error al agregar libro: ', error.response.data);
            setLoginError(true);
        } finally {
            setLoading(false);
        }
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed: ', errorInfo);
        setLoginError(true);
    }

    return (
        <div className="container">
            <Nav />
            <Card
                title="Agregar nuevo libro"
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
                        <Input prefix={<BookOutlined />} placeholder='Nombre del libro' />
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
                        <Input prefix={<HomeOutlined />} placeholder='Editorial' />
                    </Form.Item>

                    <Form.Item
                        name="pages"
                        rules={[{
                            required: true,
                            message: 'Por favor ingrese la cantidad de páginas'
                        }]}
                    >
                        <InputNumber prefix={<NumberOutlined />} placeholder='Páginas' style={{ width: '100%' }} />
                    </Form.Item>

                    <Form.Item
                        name="price"
                        rules={[{
                            required: true,
                            message: 'Por favor ingrese el precio'
                        }]}
                    >
                        <InputNumber prefix={<DollarOutlined />} placeholder='Precio' style={{marginTop: '15px', width: '100%' }} />
                    </Form.Item>

                    <Form.Item
                        name="year"
                        rules={[{
                            required: true,
                            message: 'Por favor ingrese el año'
                        }]}
                    >
                        <InputNumber prefix={<CalendarOutlined />} placeholder='Año' style={{marginTop: '15px', marginBottom: '15px', width: '100%' }} />
                    </Form.Item>

                    <Form.Item
                        name="genre"
                        rules={[{
                            required: true,
                            message: 'Por favor ingrese el genero'
                        }]}
                    >
                        <Input prefix={<TagsOutlined />} placeholder='Genero' />
                    </Form.Item>

                    <Form.Item
                        name="review"
                        rules={[{
                            required: true,
                            message: 'Por favor ingrese una pequeña review'
                        }]}
                    >
                        <Input prefix={<FileTextOutlined />} placeholder='Review' />
                    </Form.Item>
                    
                    <Form.Item>
                        {loginError && <p style={{ color: 'red' }}>Error al agregar libro.<br /> Inténtalo de nuevo</p>}
                        <Button type="primary" htmlType="submit" className="add-form-button" loading={loading}>
                            Agregar
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
}

export default FormNewP;
