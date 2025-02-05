import React from 'react';
import './App.css';
import sonu1 from './assets/sonu1.jpg';

const Home = () => {
  return (
    <div className='containers'>
      <div className='sub-container'>
        <div className='content'>
         
          <div >
            <h1 className='name'>
              👋 <p>Hi, I'm Sonu Parmar</p>
            </h1>
            <h1 className='text'>I'm a MERN Stack Developer</h1>
          
            <div className='code-content'>
              MERN Stack Developer || 100Days of Code on @LeetCode || Institute 3rd Rank on GeeksforGeeks || 1000 Problems Solved on DSA
            </div>
            <button className='Hire'>Hire me</button>
          </div>
         
          <div className='img'>
            <img src={sonu1} className='img-fluid' alt='sonu' />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
