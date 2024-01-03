import React, { useMemo,useEffect,useState, useCallback, memo, useRef } from "react";
import MusicPlayer from "./components/MusicPlayer";
// name corresponding to the names in public/music and public/img 

const namesOfAudioFiles=["FYRE","FNAFSurvivetheNight"];

// use for to loop through all name from namesOfAudioFiles to load audio and img
// and add them to the arr of components 

let componentPreRendered=[];
for (let index = 0; index < namesOfAudioFiles.length; index++) {
  let audio = new Audio("/music/"+namesOfAudioFiles[index]+".mp3");
  let Img = new Image();
    Img.src="/Img/"+namesOfAudioFiles[index]+".jpg"
  let currentComponent=<MusicPlayer key={index}  prop={{audio:audio,Img:Img}}/>
  componentPreRendered.push(currentComponent);
}

function handleSubmit(event) {
  event.preventDefault();
  const div = document.getElementById("audio");
  let files = event.target.files;
  let urlBlob= URL.createObjectURL(files[0]);
 let mp3= document.createElement("audio");
 
 mp3.setAttribute("src",urlBlob);
 div.appendChild(mp3);
 console.log(mp3);
  console.log(urlBlob);
    
}




function Home() {

  let [componentRender, setComponentRender] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    var files = event.target.files;
    var urlBlob= URL.createObjectURL(files[0]);
    let audio = new Audio(urlBlob);
    let Img = new Image();
    setComponentRender(<MusicPlayer   prop={{audio:audio,Img:Img}}/>);
    let currentComponent=<MusicPlayer   prop={{audio:audio,Img:Img}}/>
    componentPreRendered.push(currentComponent);
  }

  
 
  return (
    <div className="grid grid-cols-2 gap-2 m-16">
      <input className="absolute right-0" onChange={handleSubmit} type="file"/>
        {componentPreRendered}
        {componentRender}
    </div>
  );
}

export default Home;
