import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

var msgs=["welcome","hi","your age?"];//messages to be displayed on the system side

var output=msgs.map((msg)=><div className="message"><ListGroup.Item >{msg}</ListGroup.Item></div>);

//returning messages in the form oh ListGroup
const Comp1=()=>{    
      return(
        <div className="sys_msgs">
        <ListGroup >{output}</ListGroup>
        </div>
        );
  
  }
export default Comp1;