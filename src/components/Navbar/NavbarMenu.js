import React from 'react'
import logo from './logo.png';
import './Navbar.css';
import { Nav,Navbar,NavDropdown,Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function NavbarMenu() {
  return (
    <div>

  
    <Navbar bg="dark" variant="dark" sticky='top' expand='lg' >
  <Container>

  <Link to={'/tiendaweb'}> 
  <Navbar.Brand className='logoName'>
    <img src={logo} width='90px' height='90px'  />{' '}
   RAYO DEPORTES
    </Navbar.Brand>
      </Link>
 


<Navbar.Toggle/>
<Navbar.Collapse>




    <Nav className="ms-auto">
    <Link to={'/tiendaweb'}>Inicio</Link>
    {/* <NavDropdown title="Remeras"> */}

        {/* <NavDropdown.Item >Adidas</NavDropdown.Item> */}
        {/* <NavDropdown.Item >Nike</NavDropdown.Item> */}
        {/* <NavDropdown.Item >Puma</NavDropdown.Item> */}
      {/* </NavDropdown> */}
      
      <Link to={'/tiendaweb/categoria/zapatillas'}>Zapatillas</Link>
      <Link to={'/tiendaweb/categoria/gorras'}>Gorras</Link>
      <Link to={'/tiendaweb/categoria/camperas'}>Camperas</Link>
      <Link to={'/tiendaweb/contacto'}>Contacto</Link>
          <Link to={'/tiendaweb/cart'}> 
          <FontAwesomeIcon icon={faShoppingCart} className='cartIcon'/>
      </Link>
    
    </Nav>
   
    </Navbar.Collapse>
     </Container>
  </Navbar>
    </div>
  )
}

export default NavbarMenu