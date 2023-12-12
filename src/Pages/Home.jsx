import React, { useEffect,useState, useCallback, memo, useRef } from "react";
import MusicPlayer from "./components/MusicPlayer";
// name corresponding to the names in public/music and public/img 

const namesOfAudioFiles=["FYRE","FNAFSurvivetheNight"];

// use for to loop through all name from namesOfAudioFiles to load audio and img
// and add them to the arr of components 
let component=[];
for (let index = 0; index < namesOfAudioFiles.length; index++) {
  let audio = new Audio("/music/"+namesOfAudioFiles[index]+".mp3");
  var Img = new Image();
    Img.src="/Img/"+namesOfAudioFiles[index]+".jpg"
  let currentComponent=<MusicPlayer key={index}  prop={{audio:audio,Img:Img}}/>
  component.push(currentComponent);
}


function Home() {

    

  return (
    <div className="grid grid-cols-2 gap-2 m-16">
        {component}
    </div>
  );
}

export default Home;
