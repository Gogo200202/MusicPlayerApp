import React, { useEffect,useState, useCallback, memo, useRef } from "react";


 function MusicPlayer({prop}){

  let [timeUpdate,setTimeUpdate]=useState();

     const start = () => {
        prop.audio.play();
      };
    
      
      const stop = () => {
        prop.audio.pause();
      };

      const soundVolume = (e) => {
        let num = e.target.value / 100;
        prop.audio.volume = num.toFixed(2);
      };

      const soundTime = (e) => {
        let percentage = e.target.value / 100;
        let result = prop.audio.duration * percentage;
        prop.audio.currentTime = result;
      };
    
      function ChangeTimeOnRage(e){
        let result=(e.originalTarget.currentTime/e.originalTarget.duration)*100;
        setTimeUpdate(result);
    
      }
    
      useEffect(() => {
        prop.audio.addEventListener("timeupdate", ChangeTimeOnRage);
      }, []);

    return (
     
          <div className=" text-center w-40 bg-gray-400 rounded-lg">
            <button className="mx-2" onClick={start}>
              
              Play
            </button>
            <button className="mx-2" onClick={stop}>
              
              stop
            </button>
    
    
            <label
              htmlFor="default-range"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              soundVolume
            </label>
            <input
              id="default-range"
              type="range"
              className="ml-16 -rotate-90 w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              onChange={soundVolume}
            ></input>
    
            <label
              htmlFor="default-range"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              video time
            </label>
            <input
              id="default-range"
              type="range"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              value={timeUpdate|| '0'}
              onChange={soundTime}
            ></input>
            <audio />
          </div>
      
      );


}
export default MusicPlayer;