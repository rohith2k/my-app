import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
var msgs=["welcome","hi","your age?"];
var output1=msgs.map((ms,index)=>{
    if(index===0)
    {
      return(<div className="message1"><ListGroup.Item >{ms}</ListGroup.Item></div>);
    }
    else{
      return(<div className="message"><ListGroup.Item >{ms}</ListGroup.Item></div>);
    }
  }
  );
  const Comp2=()=>{
      return(
          <div className="user_msgs">
              <ListGroup >{output1}</ListGroup>
          </div>
      );
  }

  export default Comp2;