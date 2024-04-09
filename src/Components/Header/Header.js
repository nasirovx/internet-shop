import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { MyContext } from "../../Context/My-context";
import './Header.css'

const Header = () => {
  const { searchClick } = useContext(MyContext);
  const { cart } = useContext(MyContext);
  const [input, setInput] = useState('');

  const btnClick = () => {
    searchClick(input);
  }

  return (
    <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>Internet Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link as={Link} to='/' style={{ textDecoration: 'none', fontSize: '1rem', margin: '0 15px', color: 'white' }}>Home</Nav.Link>
            <Nav.Link as={Link} to='/cart' style={{ textDecoration: 'none', fontSize: '1rem', margin: '0 15px', color: 'white' }}>Cart {cart.length} <i className="fa-solid fa-cart-shopping"></i></Nav.Link>
          </Nav>
          <Form className="d-flex v">
            <input
              type="search"
              placeholder="  Search"
              className="me-2"
              aria-label="Search"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className='click' variant="outline-light" onClick={btnClick}><i class="fa-solid fa-magnifying-glass"></i></button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
