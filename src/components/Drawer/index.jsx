import { useState } from 'react';
import { Drawer, Avatar, Button, } from 'antd';
import { UserOutlined, MailOutlined, LogoutOutlined, LockOutlined } from '@ant-design/icons';
import { useAuth } from '../../hooks/useAuth';
import { Link, } from 'react-router-dom';
import ModalPassword from '../Modals/ModalPassword';
import ModalUsername from '../Modals/ModalUsername';
import ModalEmail from '../Modals/ModalEmail';
import './styles.css';

const DrawerComponent = () => {
    const { user, logout } = useAuth();
    const [open, setOpen] = useState(false);
    const [isModalPasswordOpen, setIsModalPasswordOpen] = useState(false);
    const [isModalUsernameOpen, setIsModalUsernameOpen] = useState(false);
    const [isModalEmailOpen, setIsModalEmailOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const showModalPassword = () => {
        setIsModalPasswordOpen(true);
    };

    const showModalUsername = () => {
        setIsModalUsernameOpen(true);
    };

    const showModalEmail = () => {
        setIsModalEmailOpen(true);
    };

    const handleCancelPassword = () => {
        setIsModalPasswordOpen(false);
    };

    const handleCancelUsername = () => {
        setIsModalUsernameOpen(false);
    };

    const handleCancelEmail = () => {
        setIsModalEmailOpen(false);
    };

    return (
        <>
            {user ? (
                <>
                    <Avatar
                        onClick={showDrawer}
                        size={44}
                        style={{ backgroundColor: '#AFB3FF', cursor: 'pointer' }}
                        icon={<UserOutlined />}
                    />
                    <Drawer title="Perfil" onClose={onClose} open={open}>
                        <div className="drawer-content">
                            <div className="info-section">
                                <div className="info-content">
                                    <UserOutlined className="info-icon" />
                                    <p className="info-label">Usuario:</p>
                                    <p className="info-value">{user.readerFound.readername}</p>
                                </div>
                                <Button className="edit-button-username" onClick={showModalUsername}>Editar usuario</Button>
                            </div>
                            <div className="info-section">
                                <div className="info-content">
                                    <MailOutlined className="info-icon" />
                                    <p className="info-label">Correo:</p>
                                    <p className="info-value">{user.readerFound.email}</p>
                                </div>
                                <Button className="edit-button-email" onClick={showModalEmail}>Editar correo</Button>
                            </div>
                            <div className="info-section">
                                <div className="info-content">
                                    <LockOutlined className="info-icon" />
                                    <p className="info-label">Contraseña:</p>
                                    <p className="info-value">********</p>
                                </div>
                                <Button className="edit-button-password" onClick={showModalPassword}>Editar contraseña</Button>
                            </div>
                            <Button className="logout-button" onClick={logout} icon={<LogoutOutlined />}>
                                <strong>Cerrar sesión</strong>
                            </Button>
                        </div>
                    </Drawer>
                    <ModalPassword
                        isVisible={isModalPasswordOpen}
                        onCancel={handleCancelPassword}
                        loading={loading}
                        setLoading={setLoading}
                    />
                    <ModalUsername
                        isVisible={isModalUsernameOpen}
                        onCancel={handleCancelUsername}
                        loading={loading}
                        setLoading={setLoading}
                    />
                    <ModalEmail
                        isVisible={isModalEmailOpen}
                        onCancel={handleCancelEmail}
                        loading={loading}
                        setLoading={setLoading}
                    />
                </>
            ) : (
                <Link to="/login">
                    <Button type="primary">Iniciar Sesión</Button>
                </Link>
            )}
        </>
    );
};

export default DrawerComponent;