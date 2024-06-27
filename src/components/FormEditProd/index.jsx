import { useState, useEffect } from 'react';
import { Form, Input, Button, Card, InputNumber, notification } from 'antd';
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
import { useNavigate, useLocation } from 'react-router-dom';
import ProductService from '../../services/products';
import { useAuth } from '../../hooks/useAuth';
import './FormEditP.css';
import Nav from '../Nav/index.jsx';

const FormEditP = () => {
    const location = useLocation();
    const { id } = location.state || {};

    const { user } = useAuth();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!user) {
            navigate('/login');
            return;
        }

        const fetchProduct = async () => {
            try {
                const data = await ProductService.getProductById(id);
                setProduct(data);
            } catch (error) {
                console.error('Error al obtener el producto', error);
                setError('Error al cargar los datos del producto.');
            }
        };
        fetchProduct();
    }, [id, user, navigate]);

    const onFinish = async (values) => {
        setLoading(true);
        setError(null);
        try {
            const response = await ProductService.editP(id, values.name, values.author, values.editorial, values.pages, values.price, values.year, values.genre, values.review);
            if (response) {
                notification.success({
                    message: 'Éxito',
                    description: 'El libro ha sido editado correctamente.',
                });
                navigate('/Libros');
            } else {
                console.error('Error al editar libro: Respuesta inesperada');
                setError('Error al editar el libro.');
            }
        } catch (error) {
            console.error('Error al editar libro: ', error.response?.data);
            setError('Error al editar el libro. Por favor, inténtalo de nuevo.');
        } finally {
            setLoading(false);
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed: ', errorInfo);
        setError('Por favor completa todos los campos correctamente.');
    };

    return (
        <div className="container">
            <Nav />
            <Card
                title="Editar libro"
                bordered={false}
                className='responsive-card'
            >
                <div className="editProd-form">
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    {product ? (
                        <Form
                            name="edit_product"
                            initialValues={product}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            layout="vertical" // Cambia el layout a vertical
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
                                message: 'Por favor ingrese el autor'
                            }]}
                        >
                            <Input prefix={<UserOutlined />} placeholder='Autor' />
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
                                message: 'Por favor ingrese el género'
                            }]}
                        >
                            <Input prefix={<TagsOutlined />} placeholder='Género' />
                        </Form.Item>

                        <Form.Item
                            name="review"
                            rules={[{
                                required: true,
                                message: 'Por favor ingrese una pequeña reseña'
                            }]}
                        >
                            <Input prefix={<FileTextOutlined />} placeholder='Reseña' />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="edit-form-button" loading={loading}>
                                Editar
                            </Button>
                        </Form.Item>
                    </Form>
                ) : (
                    <p>No se pudo cargar el producto.</p>
                )}
            </div>
        </Card>
    </div>
);
};

export default FormEditP;
