import { useEffect, useState } from 'react';
import { Divider, Table, Button, Space, Modal } from 'antd';
import { BookOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { getProducts } from '../../../services/products';
import Nav from '../../Nav/index';
import { useAuth } from '../../../hooks/useAuth';
import './styles.css';

const Productos = () => {
    const { user, logout } = useAuth();
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
                const data = await getProducts();
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

    const handleDelete = (record) => {
        console.log('Eliminar:', record);
        // Aquí iría el código para eliminar el producto
        setProducts(products.filter(product => product._id !== record._id));
    };

    const showDeleteConfirm = (record) => {
        setSelectedRecord(record);
        setIsModalVisible(true);
    };

    const handleOk = () => {
        handleDelete(selectedRecord);
        setIsModalVisible(false);
        setSelectedRecord(null);
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
