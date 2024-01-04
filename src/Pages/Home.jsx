import React, { useMemo,useEffect,useState, useCallback, memo, useRef } from "react";
import MusicPlayer from "./components/MusicPlayer";
// name corresponding to the names in public/music and public/img 

const namesOfAudioFiles=["FYRE","FNAFSurvivetheNight"];
let count=namesOfAudioFiles.length;
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

function Home() {

  let [componentRender, setComponentRender] = useState([]);
// create url blot and then create audio object to blob url
  function handleSubmit(event) {
  
    event.preventDefault();
    const formData = new FormData(event.target);
    let urlBlobAudio= URL.createObjectURL(formData.get("audio"));
    let audio = new Audio(urlBlobAudio);
    let urlBlobImg= URL.createObjectURL(formData.get("img"));
    let Img = new Image();
    Img.src=urlBlobImg;
    // add it to the array to be stored in memory for rerouting
    let currentComponent=<MusicPlayer key={count}  prop={{audio:audio,Img:Img}}/>
       // TO DO fined a way to chase music after loading 
    // set the new added music to the hook to be rendered now
    setComponentRender([...componentRender,currentComponent]);
    componentPreRendered.push(currentComponent);
    count++;
    
  }
  return (
    <div className="grid grid-cols-2 gap-2 m-16">
      
      <form onSubmit={handleSubmit} className="absolute top-12 right-12"  id="form">
      
      <p>
          <label>Add audion (single): </label>
          <input type="file" name="audio" />
      </p>
      <p>
        <label>Add img (single): </label>
        <input type="file" name="img" />
    </p>

      <p>
      <button type="submit" name="submit" >Button</button>
      </p>
  </form>
      {componentPreRendered}
        {componentRender}
       
    </div>
  );
}

export default Home;
