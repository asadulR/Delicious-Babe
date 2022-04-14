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
                        <Nav className="me-auto align-items-center">
                            <CustomLink className='mx-3' to='/home'>HOME</CustomLink>
                            <CustomLink className='mx-3' to='/menu'>MENU</CustomLink>
                            <CustomLink to='/blog'>BLOG</CustomLink>
                            <NavDropdown className='mx-3' title="PAGES" id="collasible-nav-dropdown">
                                <NavDropdown.Item >Action</NavDropdown.Item>
                                <NavDropdown.Item >Another action</NavDropdown.Item>
                                <NavDropdown.Item >Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item >Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                        <Nav className='text-center align-items-center'>
                            <p className='mb-0 me-3'><ShoppingCartIcon className='text-gray' width={18}></ShoppingCartIcon></p>
                            <CustomLink id="RouterNavLink" to='/login'>LOGIN</CustomLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;