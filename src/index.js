import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import reportWebVitals from './reportWebVitals';
import { loremIpsum } from 'lorem-ipsum';

function Input(props){
  return <div className="input">
    <h2>Lorem Ipsum Generator</h2>
    <form onSubmit={e => props.generate(e)}>
      <table>
        <tbody>
        <tr>
          <td>Paragraphs:</td>
          <td>
          <input type="number" min={1} max={99} value={props.paragraphs} onChange={e => props.changeParagraphs(e)} required/>
          </td>
        </tr>
        <tr>
          <td>Sentences per Paragraph:</td>
          <td>
          <input type="number" min={1} max={99} value={props.sentences} onChange={e => props.changeSentences(e)}/>
          </td>
        </tr>
        <tr>
          <td>Words per Sentence:</td>
          <td>
          <input type="number" min={1} max={99} value={props.words} onChange={e => props.changeWords(e)}/>
          </td>
        </tr>
        </tbody>
      </table>
      <br/>
      <input type="submit" value="Generate"/>
    </form>
  </div>
}

function Output(props){
  return <div className="output" dangerouslySetInnerHTML={{__html:props.generatedText}}></div>
}

function App(){

  let [paragraphs, setParagraphs] = useState("");
  const changeParagraphs = e => setParagraphs(e.target.value); 
  let [sentences, setSentences] = useState("");
  const changeSentences = e => setSentences(e.target.value);
  let[words, setWords] = useState("");
  const changeWords = e => setWords(e.target.value);

  let [generatedText, setGeneratedText] = useState("");

  function generate(e){
    e.preventDefault();


    setGeneratedText(loremIpsum({
      count:parseInt(paragraphs),
      format:"html",
      paragraphLowerBound: sentences ? parseInt(sentences) : 3,
      paragraphUpperBound: sentences ? parseInt(sentences) : 7,
      sentenceLowerBound: words ? parseInt(words) : 5,   // Min. number of words per sentence.
      sentenceUpperBound: words ? parseInt(words) : 15,  // Max. number of words per sentence.
      units:"paragraphs",
      suffix:"\n\n"
    }));

  }

  return <div className="container">
    <Input 
    paragraphs={paragraphs} 
    sentences={sentences}
    words={words}
    changeParagraphs={changeParagraphs} 
    changeSentences={changeSentences}
    changeWords={changeWords}
    generate={generate}
    />
    <br/>
    <Output
    generatedText={generatedText}
    />
  </div>
  
}


const el = <App/>;

ReactDOM.render(el, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
