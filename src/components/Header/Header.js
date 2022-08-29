import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import LogoIcon from "../assets/icons/indexx500.gif";

const Header = () => {
    return (
        <Navbar className="main-header" expand="lg">
            <Container>
                <Navbar.Brand href="https://www.indexx.ai/services">
                    <img src={LogoIcon} alt="logo" className="indexx-icon" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Container>
        </Navbar>
    );
};

export default Header;
