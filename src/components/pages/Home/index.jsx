import { Button } from "antd";
import { useAuth } from "../../../hooks/useAuth";
import Nav from '../../Nav/index';

const Home = () => {
    const {user, logout} = useAuth();
    //console.log("Datos de usuario:\n", JSON.stringify(user));
    return (
        <div>
            <Nav></Nav>
            <h1>Hola, {user.readerFound.readername}</h1>
            
        </div>

    );
}

export default Home;