import mudkip from '../../assets/img/descarga.jpg'

const ImageLogin = () => {
    return (
        <div className="App">
            <img src={mudkip} alt="mudkip"/>
            <a href="/prod">Libros</a>
        </div>
    );
}

export default ImageLogin;