import React, { useEffect,useState, useCallback, memo, useRef } from "react";
import MusicPlayer from "./components/MusicPlayer";

const namesOfAudioFiles=["FYRE","FNAF Survive the Night"];



let component=[];
for (let index = 0; index < namesOfAudioFiles.length; index++) {
  let audio = new Audio("/music/"+namesOfAudioFiles[index]+".mp3");
  let currentComponent=<MusicPlayer key={index}  prop={{audio:audio}}/>
  component.push(currentComponent);
}


function Home() {

    

  return (
    <div className="grid grid-cols-4 gap-4 m-16">
          
    {component}
    </div>
  );
}

export default Home;
