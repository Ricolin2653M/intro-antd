import logo from '../../assets/img/log.png';
import './Logo.css';

const LogoNav = () => {
    return (
        <div className="logo-container">
            <img src={logo} alt="logo" className="logo-img"/>
        </div>
    );
}

export default LogoNav;
