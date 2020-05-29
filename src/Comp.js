import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import {questions} from './Data';
import './App.css';

var msgs=questions.worflow_template;//messages to be displayed on the system side
var selected=[];
var check_count=0;
var check_values=[];
var text="";
//returning messages in the form of ListGroup
const Comp=()=>{
  const [count,setCount] = useState(1); //displays 1st question initially
  //setDisplay(display.push(ordered_output[0]));  
      const handleChange=(e)=>{
         if(check_values[e.target.id][1]===1)check_values[e.target.id][1]=0;
         else check_values[e.target.id][1]=1;
         setCount(count);
      }
      const handleChange2=(e)=>{
         text=e.target.value;
      }
      const handleClick=(e)=>{
        e.target.className="list-item-question list-group-item list-group-item-light list-group-item-action buttonSelected";
        setCount(count + 1);
        selected.push([e.target.value]);
      } 
      const handleClick2=(e)=>{
        var ar=[];
        var num=parseInt(e.target.value);
        var st=num%10;
        var end=num/10-1;
        var kj=0;
        for(var i=st;i<=end;i++)
        {
          if(check_values[i][1]===1)ar.push(check_values[i][0]);
          kj++;
        }
        setCount(count+1);
        selected.push([ar.join()]);
      }
      const handleClick3=(e)=>{
        selected.push([text]);
        setCount(count+1);
      }
      return(
        <>
        <div className="sys_msgs">
        <ListGroup >{
        msgs.slice(0,count).map((msg,index)=>{
          var heading = <div class="questionControl">{msg.question_text}</div>;
          var inner_output;
          if(index===count-1)
          {
            if(msg.selection_type==="Single-Select")
            {
                inner_output =msg.options.map((option)=>{
                return (<div className="flexButton"><Button type="button" value={option.name} variant="outline-secondary" disabled={count-index!==1} onClick={handleClick}>{option.name}</Button></div>);
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
                onChange={handleChange2}
              />
              <InputGroup.Append>
                <Button variant="outline-secondary" className="buttonList" disabled={count-index!==1} onClick={handleClick3}>Next</Button>
              </InputGroup.Append>
              </InputGroup>
              </div>);
            }
            else if(msg.selection_type==="Multi-Select")
            {
                var start=check_count;
                inner_output =msg.options.map((option)=>{
                  check_values.push([option.name,0]);
                  var str=(check_count).toString();
                  check_count++;
                return (
                    <div className="mb-3">
                      <Form.Check 
                        type='checkbox'
                        label={option.name}
                        id={str}
                        onClick={handleChange}
                      />
                      {/* <input type="checkbox" id={str} onChange={handleChange} />
                      <label>{option.name}</label><br></br> */}
                    </div>);
                });
                var str2=(check_count*10+start).toString();
                inner_output.push(<Button variant="outline-secondary" value={str2} className="buttonList" disabled={count-index!==1} onClick={handleClick2}>Next</Button>);
                inner_output=<Form>{inner_output}</Form>;
            }
            else ;

            return ([<>{heading}<br/><div className="msgDisplay">{inner_output}</div><br/></>]);
          }
          else if(index<count)
          {
            return ([<>{heading}<br/><div className="user_msgs">{selected[index]}</div><br/></>]);
          }
          else;
        }
        )}
        </ListGroup>
        </div>
        </>
      );
  
  }
export default Comp;

//className="list-item-question list-group-item list-group-item-light list-group-item-action"