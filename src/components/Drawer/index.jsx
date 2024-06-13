import React, { useState } from 'react';
import { Drawer, Avatar, Button } from 'antd';
import { UserOutlined, MailOutlined, LogoutOutlined } from '@ant-design/icons';
import { useAuth } from '../../hooks/useAuth';
import './styles.css';

const DrawerComponent = () => {
    const { user, logout } = useAuth();
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Avatar
                onClick={showDrawer}
                size={44}
                style={{ backgroundColor: '#87d068', cursor: 'pointer' }}
                icon={<UserOutlined />}
            />
            <Drawer title="Perfil" onClose={onClose} open={open}>
                <div className="drawer-content">
                    <div className="info-section">
                        <UserOutlined className="info-icon" />
                        <p className="info-label">Usuario:</p>
                        <p className="info-value">{user.readerFound.readername}</p>
                    </div>
                    <div className="info-section">
                        <MailOutlined className="info-icon" />
                        <p className="info-label">Correo:</p>
                        <p className="info-value">{user.readerFound.email}</p>
                    </div>
                    <Button className="logout-button" onClick={logout} icon={<LogoutOutlined />}>
                        Cerrar sesión
                    </Button>
                </div>
            </Drawer>
        </>
    );
};

export default DrawerComponent;
