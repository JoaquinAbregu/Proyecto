import { Link } from 'react-router-dom'


const Menu = () => {
    return (
        <>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                </button>
                <ul className="dropdown-menu">
                    <li><Link to='/home' className="dropdown-item" >Pagina Principal</Link></li>
                    <li><Link to='/formulario' className="dropdown-item">Formulario</Link></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
        </>
    )
}

export default Menu;