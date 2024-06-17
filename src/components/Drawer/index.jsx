import React, { useState } from 'react';
import { Drawer, Avatar, Button, Modal, Input, Form, notification } from 'antd';
import { UserOutlined, MailOutlined, LogoutOutlined, LockOutlined } from '@ant-design/icons';
import { useAuth } from '../../hooks/useAuth';
import './styles.css';
import { Link, useNavigate } from 'react-router-dom';
import { usersService } from '../../services/users';

const DrawerComponent = () => {
    const navigate = useNavigate();
    const { user, logout } = useAuth();
    const [open, setOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        form.resetFields();
        setIsModalOpen(false);
    };

    const validatePassword = ({ getFieldValue }) => ({
        validator(_, value) {
            if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
            }
            return Promise.reject(new Error('Las contraseñas no coinciden'));
        },
    });

    const onFinish = async (values) => {
        setLoading(true);
        try {
            await usersService.updatePassword(user.readerFound._id, values.password);
            notification.success({
                message: 'Cambio exitoso',
                description: 'La contraseña se ha actualizado correctamente.',
            });
            form.resetFields(); 
            setIsModalOpen(false);
            navigate('/');
        } catch (error) {
            console.error('Error al actualizar contraseña:', error);
            notification.error({
                message: 'Error al actualizar contraseña',
                description: 'Hubo un problema al intentar actualizar la contraseña.',
            });
        } finally {
            setLoading(false);
        }
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
                                <UserOutlined className="info-icon" />
                                <p className="info-label">Usuario:</p>
                                <p className="info-value">{user.readerFound.readername}</p>
                            </div>
                            <div className="info-section">
                                <MailOutlined className="info-icon" />
                                <p className="info-label">Correo:</p>
                                <p className="info-value">{user.readerFound.email}</p>
                            </div>
                            <Button className="edit-button" onClick={showModal}>Editar contraseña</Button>
                            <Button className="logout-button" onClick={logout} icon={<LogoutOutlined />}>
                                Cerrar sesión
                            </Button>
                        </div>
                    </Drawer>
                    <Modal
                        title="Editar Contraseña"
                        visible={isModalOpen}
                        onOk={() => form.submit()}
                        onCancel={handleCancel}
                        confirmLoading={loading}
                    >
                        <div className="modal-content">
                            <Form
                                form={form}
                                name="change_password"
                                className="password-form"
                                initialValues={{}}
                                onFinish={onFinish}
                            >
                                <Form.Item
                                    name="password"
                                    rules={[{
                                        required: true,
                                        message: 'Por favor ingrese su contraseña'
                                    }]}
                                >
                                    <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Contraseña" />
                                </Form.Item>
                                <Form.Item
                                    name="password-repet"
                                    rules={[{
                                        required: true,
                                        message: 'Por favor repita su contraseña'
                                    }, ({ getFieldValue }) => validatePassword({ getFieldValue })]}
                                >
                                    <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Contraseña" />
                                </Form.Item>
                            </Form>
                        </div>
                    </Modal>
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
