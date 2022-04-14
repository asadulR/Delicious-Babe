import './Header.css'
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import { MenuIcon, ShoppingCartIcon, UserCircleIcon } from '@heroicons/react/solid'



const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className='shadow-sm' variant="light">
                <Container>
                    <Link className='nav-logo' to='/'><Navbar.Brand> Delicious Babe </Navbar.Brand></Link>
                    <Navbar.Toggle className='text-white' aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link ><CustomLink to='/home'>HOME</CustomLink></Nav.Link>
                            <Nav.Link> <CustomLink to='/menu'>MENU</CustomLink></Nav.Link>
                            <NavDropdown title="PAGES" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link> <CustomLink to='/blog'>BLOG</CustomLink></Nav.Link>
                        </Nav>
                        
                        <ShoppingCartIcon className='text-gray' width={18}></ShoppingCartIcon>
                        <Nav>
                    
                            <Nav.Link>
                                <CustomLink to='login'>LOGIN</CustomLink>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;