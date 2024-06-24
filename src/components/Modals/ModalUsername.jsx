import { Modal, Input, Form, notification } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { usersService } from '../../services/users';
import { useAuth } from '../../hooks/useAuth';

const UsernameModal = ({ isVisible, onCancel, loading, setLoading }) => {
    const { user } = useAuth();
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        setLoading(true);
        try {
            await usersService.updateUsername(user.readerFound._id, values.username);
            notification.success({
                message: 'Cambio exitoso',
                description: 'El nombre de usuario se ha actualizado correctamente.\n Recargue la página para ver los cambios',
            });
            form.resetFields();
            onCancel();
        } catch (error) {
            console.error('Error al actualizar el nombre de usuario: \n', error);
            notification.error({
                message: 'Error al actualizar el nombre de usuario',
                description: 'Hubo un problema al intentar actualizar el nombre de usuario.',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal
            title="Editar Usuario"
            visible={isVisible}
            onOk={() => form.submit()}
            onCancel={onCancel}
            confirmLoading={loading}
        >
            <div className="modal-content">
                <Form
                    form={form}
                    name="change_username"
                    className="username-form"
                    initialValues={{}}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[{
                            required: true,
                            message: 'Por favor ingrese su nombre de usuario'
                        }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Nuevo nombre de usuario" />
                    </Form.Item>
                </Form>
            </div>
        </Modal>
    );
};

export default UsernameModal;
