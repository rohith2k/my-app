import React from 'react';
import Form from 'react-bootstrap/Form';
import Comp from './Comp';
import Header from './Header';
import Inputbox from './Inputbox';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App=()=> {
    return (
      <>
      <div className="chatBox">
      <Form>
      <div className="headerInfo">
      <Header/>
      </div>
      <div className="chatArea"> 
      <Comp/>
      </div>
      <div className="userInput">
      <Inputbox/>
      </div>
      </Form>
      </div>
      </>
    );
  }

  export default App;
  



