import { Button } from "antd";
import { useAuth } from "../../../hooks/useAuth";

const Home = () => {
    const {user, logout} = useAuth();
    //console.log("Datos de usuario:\n", JSON.stringify(user));
    return (
        <div>
            <h1>Hola, {user.readerFound.readername}</h1>
            <Button onClick={()=>logout()}>Cerrar sesion</Button>
        </div>

    );
}

export default Home;