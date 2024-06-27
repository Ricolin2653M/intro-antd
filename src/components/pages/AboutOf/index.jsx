import { useAuth } from "../../../hooks/useAuth";
import Nav from '../../Nav/index';
import './AboutOf.css';

const AboutOf = () => {
    const { user } = useAuth();

    return (
        <div className="AboutOf-container">
            <Nav />
            <div className="AboutOf-content">
                <div className="mission-section">
                    <h2>Nuesta misión</h2>
                    <p>Queremos facilitar la adquisición de libros a nuestros clientes mediante una aplicación web intuitiva para todas las personas, que puedan acceder de una forma sencilla, sin ninguna complejidad y con ello incentivar a las personas a leer, el aprendizaje mediante la lectura es gratificante para las personas. </p>
                </div>
                <div className="image-content">
                    <img src="/src/assets/img/lib.jpg" alt="Our Team" />
                </div>
            </div>
            <div className="story-section">
                <h2>Nuestra historia</h2>
                <p>Esta aplicación se desarrolló el 24 de junio del año 2024 como un proyecto de Desarrollo Web Integral,tomamos de inspiración los libros, ya que la lectura es el principal medio de aprendizaje desde tiempos memoriales, así que plasmamos la idea en una aplicación web.</p>
                
            </div>
        </div>
    );
}

export default AboutOf;