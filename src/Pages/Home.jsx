import { useState } from "react";
function  Home(){

  let [duration,setDuration] =useState();
     let audio = new Audio("../public/music/FYRE.mp3")
     audio.onloadedmetadata=e=>{
      setDuration(audio.duration);
     }

    const start = () => {
      audio.play();
    
    }

    const stop = () => {
      audio.pause();
    }
    const soundupdate = () => {
     
      audio.currentTime=122;
    }

    const soundVolume= (e) => {
      console.log(e.target.value/100)
      let num=e.target.value/100
      audio.volume=num.toFixed(2)
      
      console.log(audio.duration);
      
    }
    const soundTime= (e) => {
      
      console.log(e.target.value)
      console.log(duration);

    }
  
  
    return (
      <div className="grid grid-cols-4 gap-4 m-16">
      <div className=" text-center w-28 bg-gray-400 rounded-lg" >
        <button className="mx-2" onClick={start}> Play </button>
        <button className="mx-2" onClick={stop}> stop </button>
        <button className="mx-2" onClick={soundupdate}> timeupdate </button>


        <label htmlFor="default-range" className="block  mb-2 text-sm font-medium text-gray-900 dark:text-white">soundVolume</label>
<input id="default-range" type="range"  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" onChange={soundVolume}></input>

<label htmlFor="default-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">video time</label>
<input id="default-range" type="range"  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" onChange={soundTime}></input>
      </div >
      </div>
    );
  
}

export default Home