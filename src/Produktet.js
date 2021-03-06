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
 
    
    
 
    <p class="home"><Link to='/kontakt'>KONTAKT</Link></p>
     <p class="home"><Link to='/rejat'>TE REJAT</Link></p>
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
   
Mnushaqja ??sht??  nj?? lule  ebukur q?? mund t?? rritet fare leht?? n?? kopshtet tuaja.

Kjo lule p??rmban acid salicilik dhe ??sht?? nj?? kur?? e mrekullueshme p??r kujdesin e l??kur??s.
   </p>


  </div>


  <div class="small-otherdivs">

  <img src={img31} alt="then" class="foto9"></img>

  <h3 class="manu">Murrizi</h3>

  <p class="manushaqe">
  Kokrrat e kuqe t?? murrizit jan?? nj?? mrekulli p??r sh??ndetin e zemr??s.

Ato i gjeni t?? p??rhapura n?? pjes??n m?? t?? madhe t?? vendit dhe ??elin n?? periudh??n Prill ??? Maj.
  </p>


  </div>


  <div class="small-otherdivs">

  <img src={img33} alt="then" class="foto9"></img>

  <h3 class="manu">Dafina</h3>

  <p class="manushaqe">
    Dafina hyn tek m?? t?? njohurat, at?? mund ta p??rdorni n?? gatim p??r arom?? t?? mir??, n??mjek??si p??r kurimin e rrug??ve t?? frym??marrjes.
    </p>


  </div>

  <div class="small-otherdivs">

  <img src={img34} alt="then" class="foto9"></img>

  <h3 class="manu">Lavanda</h3>

  <p class="manushaqe">Lavanda, livado apo lavandra ??sht?? gjithashtu shum?? e njohur.

Ajo p??rdoret masivisht si bim?? aromatike, dekoruese, por jo vet??m.

N?? shum?? raste mund ta gjeni p??rdorimin e saj edhe n?? mjek??si kund??r diabetit, ul??er??s apo reumatizm??s.
</p>


  </div>

  <div class="small-otherdivs">

  <img src={img35} alt="then" class="foto9"></img>

  <h3 class="manu">Kamomili</h3>

  <p class="manushaqe">
  Kamolili njihet p??r vetit?? e tij kuruese dhe qet??suese n?? organiz??m apo l??kur?? n?? form??n e ??ajit.
  </p>


  </div>

  <div class="small-otherdivs">

  <img src={img36} alt="then" class="foto9"></img>

  <h3 class="manu">Lulekuqja</h3>

  <p class="manushaqe">
  Lul??kuqja ka aft??sin?? t?? fuqizoj?? sistemin imunitar, mbroj?? sh??ndetin e zemr??s, p??rmir??soj?? shikimin, forcoj?? kockat, rris?? qarkullimin e gjakut, ndihmoj?? tretjen, rregulloj?? sistemin nervor, dhe parandaloj?? diabetin e tipit 2.
  </p>


  </div>

  </div>










        </div>
    )
}


export default Produktet;