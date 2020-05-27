import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import {questions} from './Data';

var msgs=questions.worflow_template;//messages to be displayed on the system side
//returning messages in the form of ListGroup
const Comp1=()=>{
  const [count,setCount] = useState(1); //displays 1st question initially
  //setDisplay(display.push(ordered_output[0]));   
      return(
        <>
        <div className="sys_msgs">
        <ListGroup >{
        msgs.slice(0,count).map((msg,index)=>{
          if(index<count)
          {
            var heading = <div class="questionControl">{msg.question_text}</div>;
            var inner_output;
            if(msg.selection_type==="Single-Select")
            {
                inner_output =msg.options.map((option)=>{
                return (<button type="button" class="list-item-question list-group-item list-group-item-light list-group-item-action" onClick={() => setCount(count + 1)} style={{outline:"invert"}}>{option.name}</button>);
              });
              inner_output=<div className="buttonControl">{inner_output}</div>;
            }
            else if(msg.selection_type==="Number")
            {
              inner_output=(
              <div className="inputControl">
              <InputGroup className="mb-3">
              <FormControl
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button variant="outline-secondary" onClick={() => setCount(count + 1)}>Next</Button>
              </InputGroup.Append>
              </InputGroup>
              </div>);
            }
            else if(msg.selection_type==="Multi-Select")
            {
                inner_output =msg.options.map((option)=>{
                return (
                    <div className="mb-3">
                      <Form.Check 
                        type='checkbox'
                        label={option.name}
                      />
                    </div>);
                });
              inner_output.push(<Button variant="outline-secondary" onClick={() => setCount(count + 1)}>Next</Button>);
              inner_output=<Form>{inner_output}</Form>;
            }
            else ;
          }
          return ([heading,<br/>,inner_output,<br/>]);
        }
        )}
        </ListGroup>
        </div>
        </>
      );
  
  }
export default Comp1;

//