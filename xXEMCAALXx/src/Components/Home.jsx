import React from 'react'
import useControl from '../hook/useControl';
import "../styles/styles.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import PersonCircle from 'bootstrap-icons/icons/alarm-fill.svg';



const Home = () => {
  const { isLoggedIn, logout, usuario } = useControl()
  return (
    <>
      {isLoggedIn ? (
        <div >
          <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="justify-content-between">
            <Container>
              <Navbar.Brand href="#home">xXEMCAALXx</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                <Nav className="mr-sm-2">
                  <Nav.Link href="#home">Ventas</Nav.Link>
                  <Nav.Link href="#link">Compras</Nav.Link>
                  <Nav.Link href="#link">Inventario</Nav.Link>
                  <i className="bi-person-circle mi-icono p-2" ></i>
                  <NavDropdown title={usuario} id="basic-nav-dropdown">                    
                    <NavDropdown.Item href="#action/3.2">Configuracion</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3" onClick={logout}>Cerrar Sesion</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <div className="container my-5 p-5">
            <div className="row">
              <div className="col-sm-3">
              </div>
              <div className="col-sm-6">
                <h1>Bienvenido {usuario} </h1>
              </div>
              <div className="col-sm-3">
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Debes iniciar sesión.</p>
      )}
    </>
  )
}

export default Home
