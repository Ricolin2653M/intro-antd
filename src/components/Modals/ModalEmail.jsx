import { Modal, Input, Form, notification } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { usersService } from '../../services/users';
import { useAuth } from '../../hooks/useAuth';

const EmailModal = ({ isVisible, onCancel, loading, setLoading }) => {
    const { user } = useAuth();
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        setLoading(true);
        try {
            await usersService.updateEmail(user.readerFound._id, values.email);
            notification.success({
                message: 'Cambio exitoso uwu',
                description: 'El correo electrónico se ha actualizado correctamente. \n Recargue la página para ver los cambios',
            });
            form.resetFields();
            onCancel();
        } catch (error) {
            console.error('Error al actualizar el correo electrónico:\n', error);
            notification.error({
                message: 'Error al actualizar el correo electrónico',
                description: 'Hubo un problema al intentar actualizar el correo electrónico.',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal
            title="Editar Correo"
            visible={isVisible}
            onOk={() => form.submit()}
            onCancel={onCancel}
            confirmLoading={loading}
        >
            <div className="modal-content">
                <Form
                    form={form}
                    name="change_email"
                    className="email-form"
                    initialValues={{}}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="email"
                        rules={[{
                            required: true,
                            message: 'Por favor ingrese su correo electrónico'
                        }, {
                            type: 'email',
                            message: 'Por favor ingrese un correo electrónico válido'
                        }]}
                    >
                        <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Nuevo correo electrónico" />
                    </Form.Item>
                </Form>
            </div>
        </Modal>
    );
};

export default EmailModal;