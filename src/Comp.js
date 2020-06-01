import React, { useState,useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import lodash from 'lodash';
import {questions} from './Data';
import './App.css';

var msgs=questions.worflow_template;//messages to be displayed on the system side
var selected=[];
var question_ids=[];
var show_ques=[];
var first=0;
var text="";
var ques_ind;
for(var i=0;i<msgs.length;i++)
{
  question_ids.push(msgs[i].question_id);
}
//returning messages in the form of ListGroup
const Comp=()=>{
  const [count,setCount] = useState(1); //displays 1st question initially
  const [current,setCurrent]=useState([]);
      const handleChange=(e,i,ops)=>{
        var cur=current.slice();
        var index=lodash.findIndex(cur,{"id":e.target.id});
        console.log(e.target);
        if(ops[i].clear_others&&e.target.checked)
        {
          var obj={"label":e.target.value,"id":e.target.id,"clear_others":ops[i].clear_others};
          cur=[obj];
        }
        else if(index>-1)
        {
          cur.splice(index,1);
        }
        else
        {
          var obj={"label":e.target.value,"id":e.target.id,"clear_others":ops[i].clear_others};
          cur.push(obj);
          var removable=[];
          for(let ind=0;ind<cur.length;ind++)if(cur[ind].clear_others)removable.push(ind);
          for(let ind=removable.length-1;ind>=0;ind--)cur.splice(removable[ind],1);
        }
        console.log("afterforloop",cur);
        setCurrent(cur);
      }
      const handleChange2=(e)=>{
         text=e.target.value;
      }
      const handleClick=(e)=>{
        //e.target.className="list-item-question list-group-item list-group-item-light list-group-item-action buttonSelected"
        var obj={"label":e.target.value,"id":e.target.id};
        selected.push([obj]);
        var new_count=lodash.cloneDeep(count);
        setCount(new_count + 1);
      } 
      const handleClick2=(e)=>{
        var cur=current.slice();
        if(cur.length===0)
        {
          alert("no option selected");
        }
        else
        {
          selected.push(cur);
          setCurrent([]);
          var new_count=lodash.cloneDeep(count);
          setCount(new_count + 1);
        }
      }
      const handleClick3=()=>{
        if(isNaN(text))
        {
          alert("please enter a valid number");
        }
        else
        {
          selected.push([text]);
          var new_count=lodash.cloneDeep(count);
          setCount(new_count + 1);
        }
      }
      return(
        <>
        <div className="sys_msgs">
        <ListGroup >{
        msgs.slice(0,count).map((msg,index)=>{
          var heading = <div class="questionControl">{msg.question_text}</div>;
          var inner_output=[];
          if(index===count-1)
          {
            show_ques.push(true);
            //question_ids.push(msg.question_id);
            var res=true;
            if(msg.dependencies.length>0)
            {
              for(var i=0;i<msg.dependencies.length;i++){
                var dependency=msg.dependencies[i];
                for(var j=0;j<question_ids.length;j++)
                {
                  var s1=(question_ids[j]).toString();
                  if(s1===dependency.question)
                  {
                    ques_ind=j;
                    break;
                  }
                }
                if(dependency.condition==="present")
                {
                  var arr1=dependency.options[0];
                  var hi=false;
                  for(var l=0;l<selected[ques_ind].length;l++)if(selected[ques_ind][l].id.toString()===arr1)hi=true;
                  res=res&&hi;
                }
                else if(dependency.condition==="range")
                {
                  var low=dependency.range.min;
                  var high=dependency.range.max;
                  var age=selected[ques_ind];
                  res=res&&(age<=high&&age>=low);
                }
                else;
              }
            }
            if(res===false)
            {
              show_ques[index]=false;
              if(first++===0)selected.push([]);
              setCount(count+1);
            }
            else if(msg.selection_type==="Single-Select")
            {
                inner_output =msg.options.map((option)=>{
                return (<div className="flexButton"><Button type="button" value={option.name} id={option.id} variant="outline-secondary" disabled={count-index!==1} onClick={handleClick}>{option.name}</Button></div>);
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
                var arr2=msg.options;
                inner_output =msg.options.map((option,ind2)=>{   
                        return (
                           
                            <div className="flexButton">
                              <Form.Check
                                type='checkbox'
                                variant="outline-secondary"
                                id={option.id}
                                value={option.name}
                                checked={lodash.find(current,{"id":option.id})}
                                label={option.name}
                                onChange={(e) => handleChange(e,ind2,arr2)}
                              />
                            </div>
                             );
                    });
                    inner_output=<div className="buttonControl">{inner_output}</div>;
                    //inner_output.push(<RenderMultiSelect key={index} state1={current} changeState={setCurrent} value={str2} count={count} options={msg.options}/>);
                    var next= <Button variant="outline-secondary" className="buttonList" disabled={count-index!==1} onClick={handleClick2}>Next</Button>
                inner_output=<Form>{inner_output}{next}</Form>;
            }
            else ;

            return ([<>{heading}<br/><div className="msgDisplay">{inner_output}</div><br/></>]);
          }
          else if(index<count&&show_ques[index])
          {
            if(msg.selection_type==="Number")return ([<>{heading}<br/><div className="user_msgs">{selected[index]}</div><br/></>]);
            else
            {
              var arr=selected[index];
              var len=arr.length;
              var res_arr=arr.map((vals,ind)=>{
                if(ind<len-1)return(vals.label+",");
                else return(vals.label);
              });
              console.log("res_arr",res_arr);
              return ([<>{heading}<br/><div className="user_msgs">{res_arr}</div><br/></>]);
            }
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