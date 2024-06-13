import React from 'react';
import {Link} from 'react-router-dom';
import {Layout, Menu,} from 'antd';
import './Nav.css';
import LogoNav from '../img/logo.jsx';
import DrawerComponent from '../Drawer';
const {Header} = Layout;

const Nav = () => {
    const tabNames = ["", "Libros", "Servicios", "Contacto"];
    const items = tabNames.map((name, index) => ({
        key: index + 1,
        label: name,
        url: index === 0 ? "/" : `/${name.toLowerCase()}`,
    }));
    return (
        <Header className='header-content'
        >
            <Link to= "/">
                <LogoNav />
            </Link>
            <Menu 
                theme="light"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    flex: 1,
                    minWidth: 0,
                    marginRight: '20px'
                }}
            >
                {items.map(item => (
                    <Menu.Item key={item.key}>
                        <Link to={item.url}>{item.label}</Link>
                    </Menu.Item>
                ))}    
            </Menu>
            <DrawerComponent />
        </Header>
    );
}

export default Nav;