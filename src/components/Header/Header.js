import React from "react";
import Navbar from "react-bootstrap/Navbar";
import IndexLogo from "../../assets/icons/Indexx.png";
import "./Header.css"

const Header = () => {
    return (
        <Navbar className="main-header" expand="lg">
            <div>
                <Navbar.Brand href="https://www.indexx.ai/services">
                    <img src={IndexLogo} alt="logo" className="indexx-icon" />
                </Navbar.Brand>
            </div>
        </Navbar>
    );
};

export default Header;
