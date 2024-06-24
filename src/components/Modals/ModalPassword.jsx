import { Modal, Input, Form, notification } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import { usersService } from '../../services/users';
import { useAuth } from '../../hooks/useAuth';

const PasswordModal = ({ isVisible, onCancel, loading, setLoading }) => {
    const { user } = useAuth();
    const [form] = Form.useForm();

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
            onCancel();
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
        <Modal
            title="Editar Contraseña"
            visible={isVisible}
            onOk={() => form.submit()}
            onCancel={onCancel}
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
                        <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Nueva contraseña" />
                    </Form.Item>
                    <Form.Item
                        name="password-repet"
                        rules={[{
                            required: true,
                            message: 'Por favor repita su contraseña'
                        }, ({ getFieldValue }) => validatePassword({ getFieldValue })]}
                    >
                        <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Repita su contraseña" />
                    </Form.Item>
                </Form>
            </div>
        </Modal>
    );
};

export default PasswordModal;