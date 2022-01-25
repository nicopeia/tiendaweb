import React from 'react'
import logo from './logo.png';
import './Navbar.css';
import { Nav,Navbar,NavDropdown,Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';

function NavbarMenu() {
  return (
    <div>
    <Navbar bg="dark" variant="dark" sticky='top' expand='lg' >
  <Container>
    <Navbar.Brand >
    <img src={logo} width='90px' height='90px' />{' '}
    RAYO-DEPORTES
    </Navbar.Brand>


<Navbar.Toggle/>
<Navbar.Collapse>




    <Nav className="ms-auto">
    <Nav.Link href="#home">Inicio</Nav.Link>
      <NavDropdown title="Remeras">

        <NavDropdown.Item >Adidas</NavDropdown.Item>
        <NavDropdown.Item >Nike</NavDropdown.Item>
        <NavDropdown.Item >Puma</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#features">Zapatillas</Nav.Link>
      <Nav.Link href="#features">Gorras</Nav.Link>
      <Nav.Link href="#features">Shorts</Nav.Link>
      <Nav.Link href="#pricing">Contacto</Nav.Link>
      <FontAwesomeIcon icon={faShoppingCart} className='cartIcon'/>
    </Nav>
   
    </Navbar.Collapse>
     </Container>
  </Navbar>
    </div>
  )
}

export default NavbarMenu