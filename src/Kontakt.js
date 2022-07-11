import React from 'react'
import './jani.css';
import { Link } from 'react-router-dom';
import profileImage from './img/img5.jpg';
import img41 from './img/img41.jpg';



function Kontakt(){


   






    return(


        <div>


            
<div class="big-div">
     <div class="top-div">
 
 <i class="fa-solid fa-location-arrow location1 " id="mous"></i>
         
         <p class="tirane">
             Tirane - Albania
         </p>
 
         <i class="fa-solid fa-phone phone1" id="tel"></i>
 
         
         <p class="tel-number"><a href="tel:+355 69 370 7104">
             +355 69 370 7104
             </a>
         </p>
 
 <div class="fb"><a href="https://www.facebook.com/Boronica.al/" target="_blank"><i class="fa-brands fa-facebook-f face1"></i></a></div>
 
 <div class="instagram"><a href="https://www.instagram.com/boronica_.al/?hl=en" target="_blank"><i class="fa-brands fa-instagram insta1"></i></a></div>
 
 <div class="google"><i class="fa-brands fa-google go1"></i></div>
 
 
     </div>
 
     <div class="logo">
 
         <img src={profileImage} alt="main" class="foto1"></img>
 
 
    </div>
 
 
  
    <div class="display-div">
 
    
    
 
     <p class="home"><Link to='/kontakt'>KONTAKT</Link></p>
     <p class="home"><Link to='/rejat'>TE REJAT</Link></p>
     <p class="home"><Link to='/galeri'>GALERI</Link></p>
     <p class="home"><Link to='/produktet'>PRODUKTET</Link></p>
     <p class="home"><Link to='/'>HOME</Link></p>
 
     
 
 
 
 
     
 
   
 
 
     </div>
     </div>


     <div class="kontaktoo-div">

        <img src={img41} alt="ajo" class="ajo-in"></img>

     </div>


     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10122.058948355243!2d19.77582271536411!3d41.42871629616982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350329805684967%3A0x60e50a5ac270cf1c!2sTirana%2C%20Albania!5e0!3m2!1sen!2s!4v1657399377897!5m2!1sen!2s"
      width="100%"  style={{border:"0", position: "relative", top: "12.3rem", minHeight: "25rem"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


      <p class="detaje">Per me shum detaje, na kontaktoni</p>

      <form action="https://formspree.io/f/xwkydwdv"
  method="POST">

        <input type="text" name="Name" class="inputi" id='name' placeholder="Name"></input>
        
        <input type="email" name="email" class="inputi" id='email' placeholder="E-mail"></input>
        
        <input type="tel" name="telefon" class="inputi" id='phone' placeholder='Telephone'></input>
        
        <textarea name='message'
         required
         placeholder='Message' class="text-area" id='service'>
        </textarea> 
         
         <input type="submit" class="submit" value="Send" onClick="gotowhatsapp()"></input>

      </form>


      









    


    




        </div>




    )
}



export default Kontakt;