import React from 'react';
import Form from 'react-bootstrap/Form';  
import Comp from './Comp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component{
render(){
    return (
      <>
      <div className="chatBox">
      <Form>
      <div className="chatArea"> 
      <Comp/>
      </div>
      </Form>
      </div>
      </>
    );
    }
  }

  export default App;
  



