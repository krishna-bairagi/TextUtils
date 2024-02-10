import React, { useState } from 'react';
export default function Form(props) {
  const handleclick=()=>{
    let newtext=text.toUpperCase();
    settext(newtext);
    props.showalert("Converted To Upper-Case","success")
  }
  const handleclickd=()=>{
    let newtext=text.toLowerCase();
    settext(newtext);
    props.showalert("Converted To Lower-Case","success")
  }
  const handleclear=()=>{
    settext('');
  }
  const speak=()=>{
    let msg= new SpeechSynthesisUtterance();
    msg.text=text;
    window.speechSynthesis.speak(msg);
  }
 const handlecopy=()=>{
  var text=document.getElementById("myBox");
  text.select();
  text.setSelectionRange(0,9999);
  navigator.clipboard.writeText(text.value);
  props.showalert("Copied","success")
 }
 const removeextra=()=>{
  let newtext=text.split(/[ ]+/);
  settext(newtext.join(" "))
 }
 const captital=()=>{
  let cc=text.toLowerCase();
  let newtext=cc.split(" ").map(el=>el.charAt(0).toUpperCase()+el.slice(1)).join(" ");
  settext(newtext);
 }
  const handlechange=(event)=>{
settext(event.target.value);
  }
  const[text,settext]=useState('');
  return (
    <>
    <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
    <h1> {props.heading}</h1>
     <div className='mb-3'>
   <textarea name="form-control" id="myBox" value={text} onChange={handlechange} cols="150" rows="10"></textarea>
  </div>
     <button className="btn btn-primary  mx-2" onClick={handleclick}>Convert to Uppercase</button>
     <button className="btn btn-primary mx-2" onClick={handleclickd}>Convert to Lowercase</button>
     <button className="btn btn-primary mx-2" onClick={handleclear}>Clear Text</button>
     <button className="btn btn-primary mx-2" onClick={speak}>Speak</button>
     <button className="btn btn-primary mx-2" onClick={handlecopy}>Copy To Clipboard</button>
     <button className="btn btn-primary mx-2" onClick={removeextra}>Remove Extra Spaces</button>
     <button className="btn btn-primary mx-2" onClick={captital}>Beautify</button>
      </div>
     <div className={`container my-3 dark text-${props.mode==='light'?'dark':'light'}`}>
      <h1>Your Text Summary</h1>
      <p>{(text.split(" ").length)} Words and {text.length} Characters</p>
      <p>{0.008*(text.split(" ").length)} Minutes read</p>
     </div>
     </>
    
  );
}
