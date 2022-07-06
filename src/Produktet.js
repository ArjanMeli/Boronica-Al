import React from "react";
import './jani.css';
import { Link } from 'react-router-dom';
import profileImage from './img/img5.jpg';
import img6 from './img/img6.jpg';
import img30 from './img/img30.jpg';
import img31 from './img/img31.jpg';
import img36 from './img/img36.jpg';
import img33 from './img/img33.jpg';
import img34 from './img/img34.jpg';
import img35 from './img/img35.jpg';





function Produktet(){


    return(

        <div class="third-page">

            

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


  <div class="background-foto">

  <img src={img6} alt="then" class="foto8"></img>

  </div>

  <div class="produktet-in">
    <h1 class="pro1">PRODUKTET</h1>
  </div>


  <div class="container-div">


  <div class="small-otherdivs">

  <img src={img30} alt="then" class="foto9"></img>

  <h3 class="manu">
    Manushaqja
  </h3>

   <p class="manushaqe">
   
Mnushaqja është  një lule  ebukur që mund të rritet fare lehtë në kopshtet tuaja.

Kjo lule përmban acid salicilik dhe është një kurë e mrekullueshme për kujdesin e lëkurës.
   </p>


  </div>


  <div class="small-otherdivs">

  <img src={img31} alt="then" class="foto9"></img>

  <h3 class="manu">Murrizi</h3>

  <p class="manushaqe">
  Kokrrat e kuqe të murrizit janë një mrekulli për shëndetin e zemrës.

Ato i gjeni të përhapura në pjesën më të madhe të vendit dhe çelin në periudhën Prill – Maj.
  </p>


  </div>


  <div class="small-otherdivs">

  <img src={img33} alt="then" class="foto9"></img>

  <h3 class="manu">Dafina</h3>

  <p class="manushaqe">
    Dafina hyn tek më të njohurat, atë mund ta përdorni në gatim për aromë të mirë, nëmjekësi për kurimin e rrugëve të frymëmarrjes.
    </p>


  </div>

  <div class="small-otherdivs">

  <img src={img34} alt="then" class="foto9"></img>

  <h3 class="manu">Lavanda</h3>

  <p class="manushaqe">Lavanda, livado apo lavandra është gjithashtu shumë e njohur.

Ajo përdoret masivisht si bimë aromatike, dekoruese, por jo vetëm.

Në shumë raste mund ta gjeni përdorimin e saj edhe në mjekësi kundër diabetit, ulçerës apo reumatizmës.
</p>


  </div>

  <div class="small-otherdivs">

  <img src={img35} alt="then" class="foto9"></img>

  <h3 class="manu">Kamomili</h3>

  <p class="manushaqe">
  Kamolili njihet për vetitë e tij kuruese dhe qetësuese në organizëm apo lëkurë në formën e çajit.
  </p>


  </div>

  <div class="small-otherdivs">

  <img src={img36} alt="then" class="foto9"></img>

  <h3 class="manu">Lulekuqja</h3>

  <p class="manushaqe">
  Lulëkuqja ka aftësinë të fuqizojë sistemin imunitar, mbrojë shëndetin e zemrës, përmirësojë shikimin, forcojë kockat, rrisë qarkullimin e gjakut, ndihmojë tretjen, rregullojë sistemin nervor, dhe parandalojë diabetin e tipit 2.
  </p>


  </div>

  </div>










        </div>
    )
}


export default Produktet;