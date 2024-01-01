import React, { useEffect, useState, useCallback, memo, useRef } from "react";

function MusicPlayer({ prop }) {
  // update timer on sound playing
  let [timeUpdate, setTimeUpdate] = useState();
  // get duration on load 
  let [duration, setDuration] = useState(0);

  // play music put stop button
  const start = () => {
    prop.audio.play();
    setButton(stopButton);
  };

 // stop music put play button
  const stop = () => {
    prop.audio.pause();
    setButton(startButton);
  };

  let startButton = (
    <button className="mx-2" onClick={start}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
        viewBox="0 0 60 60"
        width="48"
        height="48"
      >
        <g>
          <path d="M45.563,29.174l-22-15c-0.307-0.208-0.703-0.231-1.031-0.058C22.205,14.289,22,14.629,22,15v30   c0,0.371,0.205,0.711,0.533,0.884C22.679,45.962,22.84,46,23,46c0.197,0,0.394-0.059,0.563-0.174l22-15   C45.836,30.64,46,30.331,46,30S45.836,29.36,45.563,29.174z M24,43.107V16.893L43.225,30L24,43.107z" />
          <path d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30   S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z" />
        </g>
      </svg>
    </button>
  );

  let stopButton = (
    <button className="mx-2" onClick={stop}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 122.88 122.88"
      >
        <g>
          <path d="M61.44,0c16.97,0,32.33,6.88,43.44,18c11.12,11.12,18,26.48,18,43.44c0,16.97-6.88,32.33-18,43.44 c-11.12,11.12-26.48,18-43.44,18c-16.97,0-32.33-6.88-43.44-18C6.88,93.77,0,78.41,0,61.44C0,44.47,6.88,29.11,18,18 C29.11,6.88,44.47,0,61.44,0L61.44,0z M42.3,39.47h13.59v43.95l-13.59,0V39.47L42.3,39.47L42.3,39.47z M66.99,39.47h13.59v43.95 l-13.59,0V39.47L66.99,39.47L66.99,39.47z M97.42,25.46c-9.21-9.21-21.93-14.9-35.98-14.9c-14.05,0-26.78,5.7-35.98,14.9 c-9.21,9.21-14.9,21.93-14.9,35.98s5.7,26.78,14.9,35.98c9.21,9.21,21.93,14.9,35.98,14.9c14.05,0,26.78-5.7,35.98-14.9 c9.21-9.21,14.9-21.93,14.9-35.98S106.63,34.66,97.42,25.46L97.42,25.46z" />
        </g>
      </svg>
    </button>
  );
// make range tag to audio volume
  const soundVolume = (e) => {
    let num = e.target.value / 100;
    prop.audio.volume = num.toFixed(2);
  };

  // change time on audion on range update
  const soundTime = (e) => {
    let percentage = e.target.value / 100;
    let result = prop.audio.duration * percentage;
    prop.audio.currentTime = result;
  };

  // update curetTime on range attribute
  function ChangeTimeOnRage(e) {
    setDuration(prop.audio.duration);
    let result =
      (e.originalTarget.currentTime / e.originalTarget.duration) * 100;
    setTimeUpdate(result);
  }

  useEffect(() => {
    prop.audio.addEventListener("timeupdate", ChangeTimeOnRage);
  
  }, []);

  // check if audi is playing on load to plays correct button
  let firstButton;
  if (!prop.audio.paused) {
    firstButton = stopButton;
  } else {
    firstButton = startButton;
  }

  let [button, setButton] = useState(firstButton);

  // set current  time and duration time
  let AllMinutes = duration / 60;
  let currentTimeMInets=prop.audio.currentTime / 60;




  return (
    <div className="relative text-center w-64 bg-gray-400 rounded-lg">
    
    <img   className=" object-scale-down h-20 w-20 absolute bottom-0 left-0 mb-5" src={prop.Img.src} alt="Logo" />
      {button}

      
      <input
        type="range"
        className=" left-0 -mr-40 -rotate-90 w-20 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        onChange={soundVolume}
      ></input>

      <label
        htmlFor="default-range"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        { currentTimeMInets.toFixed(2) +":"+AllMinutes.toFixed(2)}
      </label>
      
      <input
   
        type="range"
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        value={timeUpdate || "0"}
        onChange={soundTime}
      ></input>
      <audio />
    </div>
  );
}
export default MusicPlayer;
