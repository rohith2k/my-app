import React from 'react';
import Form from 'react-bootstrap/Form';
import Comp2 from './Comp2';
import Comp1 from './Comp1';
import Header from './Header';
import Inputbox from './Inputbox';
import ScrollArea from 'react-scrollbar';
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
      <ScrollArea
            speed={0.8}
            className="area"
            contentClassName="content"
            horizontal={false}
            >
      <div className="chatArea"> 
      <Comp1/>
      <Comp2/>
      </div>
      </ScrollArea>
      <div className="userInput">
      <Inputbox/>
      </div>
      </Form>
      </div>
      </>
    );
  }

  export default App;
  



