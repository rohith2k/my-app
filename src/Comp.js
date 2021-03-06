import React, { useState,useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Alert from 'react-bootstrap/Alert'
import lodash from 'lodash';
import isDependent from './Utils';
import {questions} from './Data';
import './App.css';

var msgs=questions.worflow_template,selected=[],question_ids=[],show_ques=[],first=0,text="";//messages to be displayed on the system side
for(var i=0;i<msgs.length;i++)
{
  question_ids.push(msgs[i].question_id);
}
//returning messages in the form of ListGroup
const Comp=()=>{
  const [count,setCount] = useState(1); 
  const [current,setCurrent]=useState([""]);
  const [err,setErr]=useState();
  const message = React.createRef();

//function to scroll to bottom
  const scrollToBottom = () => {
    message.current.scrollIntoView({ behavior: "smooth" });
  }
//effect to scroll to bottom when content is added
  useEffect(()=> {
    scrollToBottom();
  });
//handling change in checkboxes
  const handleChange=(e,i,ops)=>{
      var cur=current.slice();
      var index=lodash.findIndex(cur,{"id":e.target.id});
      var obj={"label":e.target.value,"id":e.target.id,"clear_others":ops[i].clear_others};
      if(ops[i].clear_others&&e.target.checked)
      {
        cur=[obj];
        setErr();
      }
      else if(index>-1)
      {
        cur.splice(index,1);
      }
      else
      {
        cur.push(obj);
        var removable=[];
        for(let ind=0;ind<cur.length;ind++)if(cur[ind].clear_others)removable.push(ind);
        for(let ind=removable.length-1;ind>=0;ind--)cur.splice(removable[ind],1);
        setErr();
      }
      setCurrent(cur);
  }
//handling change in text area
  const handleChange2=(e)=>{
      text=e.target.value;
      if(parseInt(text)===parseInt(text,10)&&!isNaN(text))setErr();
      else setErr(
      <>
      <br/>
      <Alert variant="danger" className="errorControl">
      <p className="errorDisplay">Please enter a valid age</p>
      </Alert>
      </>);
  }
//handling single select
  const handleClick=(e)=>{
    var obj={"label":e.target.value,"id":e.target.id};
    selected.push([obj]);
    var new_count=lodash.cloneDeep(count);
    setCount(new_count + 1);
  } 
//handling multi-select
  const handleClick2=(e)=>{
    var cur=current.slice();
    if(cur.length===0)
    {
      setErr(
        <>
        <br/>
        <Alert variant="danger" className="errorControl">
        <p className="errorDisplay">No option selected</p>
        </Alert>
        </>);
        setCurrent([]);
    }
    else
    {
      selected.push(cur);
      setCurrent([]);
      setErr();
      var new_count=lodash.cloneDeep(count);
      setCount(new_count + 1);
    }
  }
//handling text area input
  const handleClick3=()=>{
    if((parseInt(text)===parseInt(text,10))&&!isNaN(text))
    {
      selected.push([text]);
      var new_count=lodash.cloneDeep(count);
      setErr();
      setCount(new_count + 1);
    }
    else
    {
      setErr(
        <>
        <br/>
        <Alert variant="danger" className="errorControl">
        <p className="errorDisplay">Please enter a valid age</p>
        </Alert>
        </>);
        setCurrent([]);
    }
  }
  return(
    <>
    <div className="chatArea">
    <ListGroup>{
      msgs.slice(0,count).map((msg,index)=>{
      var heading = <div class="questionControl">{msg.question_text}</div>;
      var inner_output=[];
      //displaying current question
      if(index===count-1)
      {
          show_ques.push(true);
          var res=isDependent(msg,question_ids,selected);
          if(res===false)
          {
            show_ques[index]=false;
            if(first++===0)selected.push([]);
            setCount(count+1);
          }
          else if(msg.selection_type==="Single-Select")
          {
            inner_output=msg.options.map((option)=>{
              return (<div className="flexButton"><Button type="button" key={option.id} value={option.name} id={option.id} variant="outline-secondary" disabled={count-index!==1} onClick={handleClick}>{option.name}</Button></div>);
            });
            inner_output=<div className="buttonControl">{inner_output}</div>;
          }
          else if(msg.selection_type==="Number")
          {
            inner_output=(
            <>
            <div className="inputControl">
            <InputGroup >
            <FormControl
              aria-describedby="basic-addon2"
              onChange={handleChange2}
            />
            <InputGroup.Append>
              <Button variant="outline-secondary" className="buttonList" disabled={count-index!==1} onClick={handleClick3}>Next</Button>
            </InputGroup.Append>
            </InputGroup>
            </div>
            <div className="errorControl">
              {err}
            </div>
            </>
            );
          }
          else if(msg.selection_type==="Multi-Select")
          {
              var arr2=msg.options;
              inner_output =msg.options.map((option,ind2)=>{   
                    return (
                    <div className="flexbutton2">
                      <Form.Check className="check-box" type='checkbox' key={option.id} variant="outline-secondary" id={option.id} value={option.name} checked={lodash.find(current,{"id":option.id})} label={option.name}  onChange={(e) => handleChange(e,ind2,arr2)}/>
                    </div>
                    );
              });
              inner_output=<div className="buttonControl">{inner_output}</div>;
              var next= <Button variant="outline-secondary" className="buttonList" disabled={count-index!==1} onClick={handleClick2}>Next</Button>
              inner_output=<Form>{inner_output}{next}<div className="errorControl">{err}</div></Form>;
          }
          else ;

          return ([<>{heading}<br/><div className="msgDisplay">{inner_output}</div><br/></>]);
      }
      else if(index<count&&show_ques[index])
      {
          if(msg.selection_type==="Number")return ([<> {heading}<br/><div className="user_msgs">{selected[index]}</div><br/></>]);
          else
          {
            var arr=selected[index];
            var len=arr.length;
            var res_arr=arr.map((vals,ind)=>{
              if(ind<len-1)return(vals.label+",");
              else return(vals.label);
            });
            return ([<> {heading}<br/><div className="user_msgs">{res_arr}</div><br/></>]);
          }
      }
      else;
    }
    )}
    </ListGroup>
    <div ref={message}></div>
    </div>
    </>
  );
  }
export default Comp;
