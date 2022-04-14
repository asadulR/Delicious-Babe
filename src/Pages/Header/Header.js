import './Header.css'
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import { MenuIcon, ShoppingCartIcon, UserCircleIcon } from '@heroicons/react/solid'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';



const Header = () => {
    const [user, loading, error] = useAuthState(auth);



    const handleSignout = () => {
        signOut(auth);
    }

    return (
        <div className='nav-bar-container sticky-md-top bg-white'>
            <Navbar collapseOnSelect expand="lg" className='shadow-sm' variant="light">
                <Container>
                    <Link className='nav-logo' to='/'><Navbar.Brand> Delicious Babe </Navbar.Brand></Link>
                    <Navbar.Toggle className='text-white' aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto align-items-center">
                            <CustomLink className='mx-3' to='/home'>HOME</CustomLink>
                            <CustomLink className='mx-3' to='/menu/cheese'>MENU</CustomLink>
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
                            {
                                user ? 
                                <button onClick={handleSignout} className='signout-btn'>Sign out</button>    
                                
                                : <CustomLink id="RouterNavLink" to='/login'>LOGIN</CustomLink>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;