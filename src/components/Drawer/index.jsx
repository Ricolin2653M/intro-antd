import React, { useState} from 'react';
import { Drawer, Avatar, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useAuth } from '../../hooks/useAuth';

const DrawerComponent = () => {
    const {user, logout} = useAuth();
    const  [open, setOpen] = useState(false);
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
            <Drawer title={user.readerFound.readername} onClose={onClose} open={open}>
                <p style={{ color: 'black' }}>Correo: {user.readerFound.email}</p>
                <p style={{ color: 'black' }}>Some contents....</p>
                <p style={{ color: 'black' }}>Some contents....</p>
                <Button onClick={()=>logout()}>Cerrar sesion</Button>
            </Drawer>
        </>
    );
};

export default DrawerComponent;