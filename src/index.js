import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import reportWebVitals from './reportWebVitals';

function Input(){
  return <div>
    <h2>Metaphorpsum Generator</h2>
    Paragraphs<input type="number" max={99}/><br/>
    Sentences<input type="number" max={99}/>
  </div>
}

function Output(){
  return <div>
    
  </div>
}

function App(){

  return <div>
    <Input/>
    <Output/>
  </div>
  
}


const el = <App/>;

ReactDOM.render(el, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
