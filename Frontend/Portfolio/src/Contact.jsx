import React from 'react'
import './Css/Contact.css'
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
    <div className='main-containers'>
      
      
        <div className='sub-containers'>
        <div><h1 className='Contact'>FEEDBACK</h1></div>
       
        <div class="container-p">
        <form action="#">
           
            <div class="tittle">Hello Buddy</div>
        
            <div class="input-box">
                <input type="email" placeholder="Enter your Name" required />
                
            </div>
          
            <div class="input-box">
                <input type="email" placeholder="Enter your Email" required />
                
            </div>
          
            <div class="input-box text-area">
                <textarea placeholder='Enter your Message ...'> </textarea>
              
                
            </div>
          
            <div class="input-box button ">
              
            <button className="submit-button">Submit</button>

               
            </div>
        </form>

        <div class="option">or Connect with Social Media</div>
     
        <div className="social-buttons">
  
  <div className="button linkedin">
    <a href="https://www.linkedin.com/in/sonuparmar349" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-linkedin"></i> Connect with LinkedIn
    </a>
  </div>

  <div className="button instagram">
    <a href="https://www.instagram.com/100nuparmar340/" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-instagram"></i> Connect with Instagram
    </a>
  </div>

</div>

      

    
        </div>

        </div>


    </div>
         
    )
}
export default Contact;