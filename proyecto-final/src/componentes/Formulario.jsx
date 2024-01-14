import {Link} from 'react-router-dom'
import { useState } from 'react';

const Formulario = () => {

    const [nombre, setNombres] = useState('');
    const [apellido, setApellido] = useState('');
    const [provincia, setProvincia] = useState('');

    const imprimimosDatos = () => {
        console.log(`Los elementos son: ${nombre} ${apellido} ${provincia}`);
        alert(`Los elementos son: ${nombre} ${apellido} ${provincia}`)

        setNombres('')
        setApellido('')
        setProvincia('')
    }
    return (
        <>
        <form>
            <div className="mb-3">
                <label  className="form-label">Nombre</label>
                <input 
                type="text" 
                className="form-control" 
                aria-describedby="emailHelp"
                value= {nombre}
                onChange={(e) => setNombres(e.target.value)}
                required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Apellido</label>
                <input 
                type="Apellido" 
                className="form-control" 
                value= {apellido}
                onChange= {(e) => setApellido(e.target.value)}
                required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Provincia</label>
                <input 
                type="text" 
                className="form-control" 
                value= {provincia}
                onChange= {(e) => setProvincia(e.target.value)}
                required
                />
            </div>
            <button type="submit" className="btn btn-primary">Enviar Datos</button>
        </form>

        <Link to= "/">
            <h2>
                Pagina Principal
            </h2>
        </Link>
        </>
    )
}

export default Formulario;