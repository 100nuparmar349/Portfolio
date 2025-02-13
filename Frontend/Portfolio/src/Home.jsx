import React, { useEffect, useState } from 'react';
import './App.css';
import sonu1 from './assets/sonuedits.jpg';
import About from './About';
import days from './month.js'
const Home = () => {
  let arr=["I'm MERN STack Developer","i'm HardCoder","i'am Problem solver"];
  const [index,setindex]=useState(0);
  const [name,setname]=useState(arr[0]);
  const [Days,setDays]=useState(153);
  useEffect(()=>{
    const interval=setInterval(()=>{

      setindex((previndex)=>(previndex==arr.length-1?0:previndex+1));
    
    },3000);

    return ()=>clearInterval(interval);
  
  },[]);

 
useEffect(()=>{
  setDays(prev=>prev+days);
},[]);

  useEffect(()=>{
    setname(arr[index]);
  },[index]);


  return (
    <div className="containers">

      <div className="sub-container">
     
      <div>
            <h1 style={{ color: "red", fontSize: "20px", textAlign: "center", fontWeight: "bold" }}>
                Currently it's not completed. i'm working daily to improve my portfolio.
            </h1>
        </div>

        <div className="contents">
         
          <div>
          
            <h1 className="name">
             <span>👋</span> <p>Hi, I'm Sonu Parmar</p>
            
            </h1>
            
           
            <div class="skill-bar">
    <span class="skill-per">
        <h1 class="text">{arr[index]}</h1>
    </span>
          </div>


            <div className="code-content">
            I'm a software engineer located in India. I'm proficient in HTML5, CSS3, JavaScript, React, Node.js, Express.js, MongoDB, and more.
              MERN  Stack Developer || {Days} Days streak now @LeetCode || Institute 3rd Rank on GeeksforGeeks || 1000 Problems Solved on DSA
              
            </div>
              
            <div className='button'>
            <button className="Hire">Hire me</button>
            </div>
           
         
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
