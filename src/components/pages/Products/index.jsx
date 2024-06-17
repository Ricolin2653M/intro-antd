import { useEffect, useState } from 'react';
import { Divider, Table, Button, Space, Modal, notification } from 'antd';
import { BookOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import ProductService from '../../../services/products'; // Asegúrate de importar tu servicio correctamente
import Nav from '../../Nav/index';
import { useAuth } from '../../../hooks/useAuth';
import './styles.css';

const Productos = () => {
    const { user } = useAuth();
    const [products, setProducts] = useState([]);
    const [selectionType, setSelectionType] = useState('checkbox');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedRecord, setSelectedRecord] = useState(null);

    const columns = [
        {
            title: 'Nombre',
            dataIndex: 'name',
        },
        {
            title: 'Autor',
            dataIndex: 'author',
        },
        {
            title: 'Editorial',
            dataIndex: 'editorial',
        },
        {
            title: 'Páginas',
            dataIndex: 'pages',
        },
        {
            title: 'Precio',
            dataIndex: 'price',
        },
        {
            title: 'Año',
            dataIndex: 'year',
        },
        {
            title: 'Género',
            dataIndex: 'genre',
        },
    ];

    if (user) {
        columns.push({
            title: 'Acciones',
            dataIndex: 'actions',
            render: (text, record) => (
                <Space size="middle">
                    <Button className="edit-button" icon={<EditOutlined />} onClick={() => handleEdit(record)} />
                    <Button className="delete-button" icon={<DeleteOutlined />} onClick={() => showDeleteConfirm(record)} />
                </Space>
            ),
        });
    }

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows:', selectedRows);
        },
        getCheckboxProps: (record) => ({
            disabled: record.name === 'disabled user',
            name: record.name,
        }),
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await ProductService.getProducts();
                const productsWithKey = data.map(product => ({
                    ...product,
                    key: product._id,
                }));
                setProducts(productsWithKey);
            } catch (error) {
                console.error('Error al obtener los productos', error);
            }
        };
        fetchProducts();
    }, []);

    const handleEdit = (record) => {
        console.log('Editar:', record);
    };

    const handleDelete = async (record) => {
        try {
            await ProductService.deleteProduct(record._id);
            setProducts(products.filter(product => product._id !== record._id));
            notification.success({
                message: 'Éxito',
                description: 'El libro ha sido eliminado correctamente.',
            });
        } catch (error) {
            console.error('Error al eliminar el producto:', error);
            notification.error({
                message: 'Error',
                description: 'Hubo un problema al eliminar el libro. Por favor, inténtalo de nuevo.',
            });
        } finally {
            setIsModalVisible(false);
            setSelectedRecord(null);
        }
    };

    const showDeleteConfirm = (record) => {
        setSelectedRecord(record);
        setIsModalVisible(true);
    };

    const handleOk = () => {
        handleDelete(selectedRecord);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setSelectedRecord(null);
    };

    return (
        <div className='color-container'>
            <Nav />
            <div className="button-container">
                {user ? (
                    <Button className="add-button" icon={<BookOutlined />} href="/nuevoLibro">
                        Agregar libro
                    </Button>
                ) : null}
            </div>
            <div className="table-container">
                <Table
                    rowSelection={{
                        type: selectionType,
                        ...rowSelection,
                    }}
                    columns={columns}
                    dataSource={products}
                    scroll={{ y: 315 }}
                />
            </div>
            <Modal
                title="Confirmar eliminación"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                okText="Eliminar"
                cancelText="Cancelar"
            >
                <p>¿Estás seguro de que deseas eliminar el libro <strong>{selectedRecord?.name}</strong>?</p>
            </Modal>
        </div>
    );
}

export default Productos;
