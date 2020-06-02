function isDependent(msg,question_ids,selected){
    var res=true;
    var ques_ind;
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
    return res;
  }
export default isDependent;