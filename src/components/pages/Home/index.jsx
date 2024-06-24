import { Button } from "antd";
import { useAuth } from "../../../hooks/useAuth";
import Nav from '../../Nav/index';
import './Home.css';

const Home = () => {
    const { user } = useAuth();

    return (
        <div className="home-container">
            <Nav />
            <div className="home-content">
                <div className="text-content">
                    <h1>Tu Biblioteca Digital Personalizada</h1>
                    <p>Encuentra una gran colección de libros a tu disposición, listos para ser explorados y disfrutados.</p>
                    <Button type="primary" size="large" onClick={() => window.location.href = '/Libros'}>Explorar Ahora</Button>

                </div>
                <div className="image-content">
                    <img src="/src/assets/img/leer.jpg" alt="Libros" />
                </div>
            </div>
        </div>
    );
}

export default Home;