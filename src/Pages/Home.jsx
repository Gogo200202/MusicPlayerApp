import React, { useEffect,useState, useCallback, memo, useRef } from "react";

import MusicPlayer from "./components/MusicPlayer";

let audio = new Audio("../public/music/FYRE.mp3");


function Home() {

 

  return (
    <div className="grid grid-cols-4 gap-4 m-16">
          
    <MusicPlayer prop={{audio:audio}}/>
    </div>
  );
}

export default Home;
