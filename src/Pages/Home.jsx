import React, { useEffect,useState, useCallback, memo, useRef } from "react";
import MusicPlayer from "./components/MusicPlayer";

const namesOfAudioFiles=["FYRE","FNAFSurvivetheNight"];



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
