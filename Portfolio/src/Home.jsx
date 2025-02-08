import React, { useEffect, useState } from 'react';
import './App.css';
import sonu1 from './assets/sonuedits.jpg';
import About from './About';

const Home = () => {
  let arr=["I'm MERN STack Developer","i'm HardCoder","i'am Problem solver"];
  const [index,setindex]=useState(0);
  const [name,setname]=useState(arr[0]);
  useEffect(()=>{
    const interval=setInterval(()=>{

      setindex((previndex)=>(previndex==arr.length-1?0:previndex+1));
      
    },3000);
    return ()=>clearInterval(interval);
  },[]);

  useEffect(()=>{
    setname(arr[index]);
  },[index]);

  return (
    <div className="containers">

      <div className="sub-container">
        <div className="content">
         
          <div>
            <h1 className="name">
              👋 <p>Hi, I'm Sonu Parmar</p>
            </h1>
            
           
            <div class="skill-bar">
    <span class="skill-per">
        <h1 class="text">{arr[index]}</h1>
    </span>
</div>


            <div className="code-content">
              MERN  Stack Developer || 100Days of Code on @LeetCode || Institute 3rd Rank on GeeksforGeeks || 1000 Problems Solved on DSA
            </div>
            <button className="Hire">Hire me</button>
          </div>

          <div className="img">
            <img src={sonu1} className="img-fluid" alt="sonu" />
          </div>

        </div>
      </div>
      <About/>
    </div>
  );
};

export default Home;
