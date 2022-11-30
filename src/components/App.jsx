import React,{useState} from "react";


function App() {
  var [headingText,setHeadingText] = useState("Hello");
  var[ismouseOver,setmouseOver] = useState(false);
function handleClick(){
  setHeadingText("submitted");
}
function onmouseOver(){
      setmouseOver (true);
}
function onmouseOut(){
     setmouseOver(false);
}
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{backgroundColor:ismouseOver?'white':'black'}}
      onMouseOver={onmouseOver} onMouseOut={onmouseOut} onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
