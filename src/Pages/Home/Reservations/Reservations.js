import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import './Reservations.css';


const Reservations = () => {
    return (
        <section className='reservations'>
            <div className="container">
                <p className='text-center pt-5 mb-2 text-lightgray'>TASTY AND CRUNCHY</p>
                <h2 className='text-center title text-white'>RESERVATIONS</h2>
                <p className='text-center text-lightgray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm reminusto doeiusmod tempor incidition ulla mco laboris nisi ut aliquip ex ea commo condorico consectetur adipiscing elitut aliquip.</p>

                <div className='reserve-form'>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Control type="name" required placeholder="Your name*" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Control required type="email" placeholder="Email*" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridPhone">
                                <Form.Control required type="phone" placeholder="Phone*" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridTime">
                                <Form.Control required type="time" placeholder="Time*" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridDate">
                            <Form.Control required type='date' />
                        </Form.Group>

                        <Row className="mb-3">

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Select defaultValue="Choose...">
                                    <option>Chinese</option>
                                    <option>Thai</option>
                                    <option>Asian</option>
                                    <option>French</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Control type='text' placeholder='Your favourite ?' />
                            </Form.Group>
                        </Row>

                        <div className='w-50 mt-5 mx-auto'>
                            <Button className='bg-white py-3 border-0 w-100 text-black reserve-btn' type="submit">
                                RESERVE
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </section>
    );
};

export default Reservations;