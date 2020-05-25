import React from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

//display input box and button for user input
const Inputbox=()=>{
    return(
        <InputGroup className="mb-3">
        <FormControl
         placeholder="enter message"
         aria-label="enter message"
         aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
        <Button variant="outline-secondary">Send</Button>
        </InputGroup.Append>
        </InputGroup>
    );
}

export default Inputbox;