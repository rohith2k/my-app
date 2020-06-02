import React from 'react';
import Comp from './Comp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component{
render(){
    return (
      <>
      <div className="chatBox">
      <div className="chatArea"> 
      <Comp/>
      </div>
      </div>
      </>
    );
    }
  }

  export default App;
  



