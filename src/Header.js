import React from 'react';
import Nav from 'react-bootstrap/Nav';

//displays header of the chatbot
const Header=()=>{
    return(
        <Nav className="justify-content-center" activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
        <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
        Welcome to the Chatbot!!
        </Nav.Link>
        </Nav.Item>
        </Nav>
    );
}

export default Header;