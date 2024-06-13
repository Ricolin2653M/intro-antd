import React, { useState } from 'react';
import { Drawer, Avatar, Button} from 'antd';
import { UserOutlined } from '@ant-design/icons';
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
                style={{ backgroundColor:'#87d068', cursor:'pointer'}}
                icon={<UserOutlined />}
            />
            <Drawer title="Perfil" onClose={onClose} open={open}>
                <div className="drawer-content">
                    <div className="info-section">
                        <p className="info-label">Usuario:</p>
                        <p className="info-value">{user.readerFound.readername}</p>
                    </div>
                    <div className="info-section">
                        <p className="info-label">Correo:</p>
                        <p className="info-value">{user.readerFound.email}</p>
                    </div>
                    <Button className="logout-button" onClick={logout}>Cerrar sesión</Button>
                </div>
            </Drawer>
        </>
    );
};

export default DrawerComponent;
