import React from "react";
import './jani.css';
import { Link } from 'react-router-dom';
import profileImage from './img/img5.jpg';
import img7 from './img/img7.jpg';
import img8 from './img/img8.jpg';
import img9 from './img/img9.jpg';
import img10 from './img/img10.jpg';
import img11 from './img/img11.jpeg';
import img12 from './img/img12.jpg';
import img13 from './img/img13.jpeg';
import img14 from './img/img14.jpg';
import img15 from './img/img15.jpg';
import img16 from './img/img16.jpg';
import img18 from './img/img18.jpg';
import img19 from './img/img19.jpg';




function Galeri(){


   


    return(

        

        <div class="next-page">


            

            

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
 
    
    
 
     <p class="home"><a href="#poshte">KONTAKT</a></p>
     <p class="home"><a href='#'>TE REJAT</a></p>
     <p class="home"><Link to='/galeri'>GALERI</Link></p>
     <p class="home"><a href="#">PRODUKTET</a></p>
     <p class="home"><Link to='/'>HOME</Link></p>
 
     
 
 
 
 
     
 
   
 
 
     
     </div>
 
     
 
 
 
 
 
 
 
 
   </div>

   <div class="galeri-div">

    <div class="small-divgaleri">

    <img src={img7} alt="the" class="foto7"></img>

    </div>

    <div class="small-divgaleri">

    <img src={img8} alt="the" class="foto7"></img>

    </div>


    <div class="small-divgaleri">

    <img src={img9} alt="the" class="foto7"></img>

    </div>


    <div class="small-divgaleri">

    <img src={img10} alt="the" class="foto7"></img>

    </div>


    <div class="small-divgaleri">

    <img src={img11} alt="the" class="foto7"></img>

    </div>

    <div class="small-divgaleri">

    <img src={img12} alt="the" class="foto7"></img>

    </div>

    <div class="small-divgaleri">

    <img src={img13} alt="the" class="foto7"></img>

    </div>

    <div class="small-divgaleri">

    <img src={img14} alt="the" class="foto7"></img>

    </div>

    <div class="small-divgaleri">

    <img src={img15} alt="the" class="foto7"></img>

    </div>

    <div class="small-divgaleri">

    <img src={img16} alt="the" class="foto7"></img>

    </div>

    <div class="small-divgaleri">

    <img src={img18} alt="the" class="foto7"></img>

    </div>

    <div class="small-divgaleri">

    <img src={img19} alt="the" class="foto7"></img>

    </div>

    

    



    


    


   </div>

          
        </div>
    )
}


export default Galeri;