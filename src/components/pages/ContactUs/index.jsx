import { Button } from "antd";
import { useAuth } from "../../../hooks/useAuth";

const ContactUs = () => {
    const {user, logout} = useAuth();
    //console.log("Datos de usuario:\n", JSON.stringify(user));
    return (
        <div>
            <h1>Hola, {user.readerFound.readername}, contactanos</h1>
            
        </div>

    );
}

export default ContactUs;