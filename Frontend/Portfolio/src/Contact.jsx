import React,{useState} from 'react'
import './Css/Contact.css'
import { Link } from 'react-router-dom';
import axios from "axios"
 const Contact = () => {
  const [input, setInput] = useState({
    name: '',
    Email: '',
    message: ''
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault(); 
    try {
      let data = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/contact`,  // ✅ Backend URL from .env
        input
      );

    //  let data=await axios.post("http://localhost:4000",input);
      console.log("Response", data);
      setInput({ name: "", Email: "", message: "" });
      alert("Feedback sent successfully");
    } catch (err) {
      console.log("Error:",err);
      alert("Failed");
    }
};

  
    return (
    <div className='main-containers'>
      
      
        <div className='sub-containers'>
        <div><h1 className='Contact'>FEEDBACK</h1></div>
       
        <div class="container-p">
        <form onSubmit={handleClick}>
           
            <div class="tittle">Hello Buddy</div>
         
         {/* Name Input Data */}
            <div class="input-box">
                <input type="text" name="name"  placeholder="Enter your Name" value={input.name} onChange={handleChange} required />

                
            </div>
          
        {/* Email input Data */}
            <div class="input-box">
                <input type="email" name='Email' value={input.Email} onChange={handleChange} placeholder="Enter your Email" required />
                
            </div>
          
          {/* Textarea input Data */}
            <div class="input-box text-area">
                <textarea name='message' value={input.message} onChange={handleChange} placeholder='Enter your Message ...'> </textarea>
              
                
            </div>
          
            <div class="input-box button ">
              
            <button type='submit' className="submit-button ">Submit</button>

               
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