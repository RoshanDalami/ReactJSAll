import React, { useState , useCallback } from 'react';
import Button from './components/UI/Button/Button';
import './App.css';
import Demo from './components/Demo/Demo';

function App() {
  const [showParagraph, setShowParagrahp] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  const showParagraphHandler= useCallback(()=>{
    if(allowToggle){setShowParagrahp((prevShowParagraph)=> !prevShowParagraph)}
    
  },[allowToggle])
  const allowToggleHandler = ()=>{
    setAllowToggle(true)
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Demo show={showParagraph} />
      <Button onClick={allowToggleHandler} >Allow Toggling</Button>
      <Button onClick={showParagraphHandler} >Show Paragraph!</Button>
    </div>
  );
}

export default App;
