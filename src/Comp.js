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
var question_ids=[];
var show_ques=[];
var check_values=[];
var text=5;
var first=0;
var ques_ind;
for(var i=0;i<msgs.length;i++)
{
  question_ids.push(msgs[i].question_id);
}

const RenderMultiSelect=(props)=>{
  const [current,setCurrent]=useState([]);
  // var check_start=check_count,check_end=check_count+options.length-1;
  const handleChange=(e,i)=>{
    if(check_values[e.target.id][1]===1)check_values[e.target.id][1]=0;
    else check_values[e.target.id][1]=1;
    var cur=current;
    cur[i]=check_values[e.target.id][1]&&1;
    if(props.options[i].clear_others&&cur[i])
    for(let j=0;j<props.options.length;j++)
    {
      if(!(j===i))cur[j]=false;
    }
    setCurrent(cur);
 }
  return(
    props.options.map((option,i)=>{
      check_values.push([option.name,0,option.id,option.clear_others]);
      var str=(check_count).toString();
      check_count++;                 
            return (

                <div className="mb-3">
                  <Form.Check 
                    type='checkbox'
                    label={option.name}
                    id={str}
                    checked={current[i]}
                    onChange={(e) => handleChange(e,i)}
                  />
                </div>
                 );
        })
  );
}
//returning messages in the form of ListGroup
const Comp=()=>{
  const [count,setCount] = useState(1); //displays 1st question initially
  const [clear,setClear] = useState(false);
  //setDisplay(display.push(ordered_output[0]));  
      // const handleChange=(e)=>{
      //    if(check_values[e.target.id][1]===1)check_values[e.target.id][1]=0;
      //    else check_values[e.target.id][1]=1;
      //    e.target.checked=false;
      //    setCount(count);
      // }
      const handleChange2=(e)=>{
         text=e.target.value;
      }
      const handleClick=(e)=>{
        e.target.className="list-item-question list-group-item list-group-item-light list-group-item-action buttonSelected";
        setCount(count + 1);
        var s=e.target.value.split(',');
        selected.push([s[0],s[1]]);
      } 
      const handleClick2=(e)=>{
        var ar=[];
        var num=e.target.value;
        var s=num.split(',');
        var st=parseInt(s[0]);
        var end=parseInt(s[1])-1;
        for(var i=st;i<=end;i++)
        {
          if(check_values[i][1]===1)
          {
            ar.push(check_values[i][0]);
            ar.push(check_values[i][2]);
          }
        }
        setCount(count+1);
        selected.push(ar);
      }
      const handleClick3=()=>{
        selected.push([text]);
        setCount(count+1);
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
                  for(var l=1;l<selected[ques_ind].length;l+=2)if(selected[ques_ind][l].toString()===arr1)hi=true;
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
                  var return_val=option.name+","+option.id;
                return (<div className="flexButton"><Button type="button" value={return_val} variant="outline-secondary" disabled={count-index!==1} onClick={handleClick}>{option.name}</Button></div>);
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
                // inner_output =msg.options.map((option)=>{
                //   check_values.push([option.name,0,option.id,option.clear_others]);
                //   var str=(check_count).toString();
                //   check_count++;                 
                //         return (

                //             <div className="mb-3">
                //               <Form.Check 
                //                 type='checkbox'
                //                 label={option.name}
                //                 id={str}
                //                 onClick={handleChange}
                //               />
                //             </div>
                //              );
                //     });
                    var str2=(start).toString();
                    str2+=",";
                    str2+=(check_count).toString();
                    inner_output.push(<RenderMultiSelect value={str2} count={count} options={msg.options}/>);
                inner_output.push(<Button variant="outline-secondary" value={str2} className="buttonList" disabled={count-index!==1} onClick={handleClick2}>Next</Button>);
                inner_output=<Form>{inner_output}</Form>;
            }
            else ;

            return ([<>{heading}<br/><div className="msgDisplay">{inner_output}</div><br/></>]);
          }
          else if(index<count&&show_ques[index])
          {
            if(msg.selection_type==="Number")return ([<>{heading}<br/><div className="user_msgs">{selected[index]}</div><br/></>]);
            else
            {
              var res_arr=[];
              res_arr=selected[index].map((vals,indi)=>{
                if(indi%2===0)return(vals);
                else return(",");
              });
              res_arr.pop();
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