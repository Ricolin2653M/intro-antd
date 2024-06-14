import { Divider, Table } from 'antd';
import { getProducts } from '../../../services/products';
import { useEffect } from 'react';
import Nav from '../../Nav/index';
import { useState } from 'react';
import NewProd from '../NewProd';

const columns = [
    {
        title: 'nombre',
        dataIndex: 'name',

    },
    {
        title: 'Precio',
        dataIndex: 'price',

    },
    {
        title: 'Editorial',
        dataIndex: 'editorial',

    },
];

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows:', selectedRows);
    },
    getCheckboxProps: (record) => ({
        disabled: record.name === 'disabled user',
        name: record.name,
    }),
};

const Productos = () => {
    const [products, setProducts] = useState([]);
    const [selectionType, setSelectionType] = useState('checkbox');

    useEffect(() => {
        const fetchProducts = async () => {
            try{
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
    return (
        <div>
            <Nav/>
            <a href="/NewLibro">Libros</a>
            <div className="products-container">
                <Table
                rowSelection={{
                    type: selectionType,
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={products}
                scroll={{y: 400}}
                />
            </div>    
        </div>
    );
}

export default Productos;