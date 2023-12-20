import React, { useState } from 'react';
import "../styles/styles.css"
import useControl from '../hook/useControl';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

//rafce
const FormularioLogin = () => {

    // useContex
    const { login } = useControl()

    // useState
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [autenticacion, setAutenticacion] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (login(user, password)) {
            console.log("login bien");
            setAutenticacion(true)
        } else {
            console.log("login mal");
        }
        console.log("autenticacion: " + autenticacion)
    }
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand className='text-center'>xXEMCAALXx</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                </Container>
            </Navbar>
            <div className="container my-5">
                <div className="row">
                    <div className="col-sm-3">
                    </div>
                    <div className="col-sm-6">
                        <form onSubmit={handleSubmit}>
                            <h3 className='text-center'>Bienvenido</h3>
                            <input
                                className='form-control my-3'
                                placeholder="Correo electrónico o número de teléfono"
                                type="text"
                                onChange={(e) => setUser(e.target.value)}
                                name={user} />
                            <input
                                className='form-control my-3 '
                                placeholder="Contraseña"
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                name={password} />
                            <div className="d-grid d-md-flex justify-content-md-center" bis_skin_checked="1">
                                <button className="btn btn-dark me-md-2 my-2" type="submit">Iniciar sesion</button>
                            </div>
                            <div className='text-center'>
                                <button type="button" className="btn btn-link my-2">¿Ha olvidado la contraseña?</button>
                            </div>
                        </form>
                        <div className="d-grid d-md-flex justify-content-md-center my-2" bis_skin_checked="1">
                                <button className="btn btn-success me-md-2" type="submit">Crear cuenta nueva</button>
                            </div>
                    </div>
                    <div className="col-sm-3">
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormularioLogin
