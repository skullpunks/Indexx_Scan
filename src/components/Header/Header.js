import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import LogoIcon from "../../assets/icons/indexxLogo.png";
import "./Header.css"

const Header = () => {
    return (
        <Navbar className="main-header" expand="lg">
            <Container>
                <Navbar.Brand href="https://www.indexx.ai/services">
                    <img src={LogoIcon} alt="logo" className="indexx-icon" />
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default Header;
