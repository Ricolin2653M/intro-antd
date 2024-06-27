import { useAuth } from "../../../hooks/useAuth";
import Nav from '../../Nav/index';
import './ContactUs.css';

const ContactUs = () => {
    const { user } = useAuth();

    return (
        <div className="ContactUs-container">
            <Nav />
            <div className="contact-header">
                <h2>Contáctanos</h2>
                <p>Si tienes alguna pregunta o necesitas asistencia, por favor no dudes en contactarnos mediante la información abajo.</p>
            </div>
            <div className="contact-content">
                <div className="contact-details">
                    <h3>Detalles de Contacto</h3>
                    <p><strong>Email:</strong> carlos@gmail.com</p>
                    <p><strong>Teléfono:</strong> 1-800-999-8080</p>
                    <p><strong>Fax:</strong> 1-850-201-1234</p>
                    <p><strong>Oficina C de México:</strong> Tucuman #1465 </p>
                    <p><strong>Oficina Querétaro:</strong> 1650, la cañada, #1803 </p>
                </div>
                <div className="contact-form">
                    <h3>¿En qué te podemos ayudar?</h3>
                    <form>
                    <p><strong>Libros:</strong> Titulos especificos sobre algún genero</p>
                    <p><strong>Ofertas de empleo:</strong> Sé parte de nuestro equipo de desarrolladores en nuestro sitio web </p>
                    <p><strong>Comunicate:</strong> Llama directamente con el administrador de la página web para información más directa </p>
                    <p><strong>Sucursales</strong> Obtén información sobre las sucursales operando en todo México</p>
                    <p><strong>Problemas en el sitio:</strong> Si tuviste algún problema o anomalía al navegar por la web, contactanos. </p>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
