import React from "react";
import { Navbar, Container, Button } from 'react-bootstrap';

const MenuBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="/assets/images/logo.svg"
                            width="60"
                            alt="Disney+"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Button variant="outline-light" className='align-right'>LOGIN</Button>
                </Container>
            </Navbar>
        </div>
    )
};

export default MenuBar;