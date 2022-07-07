import React from "react";
import './jani.css';
import { Link } from 'react-router-dom';
import profileImage from './img/img5.jpg';
import img40 from './img/img40.jpg';

function Rejat(){

    return(

        <div class="brand-new">

<style>{'body { background-color:  rgb(143, 187, 173); }'}</style>

            


            

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
     <p class="home"><Link to='/rejat'>TE REJAT</Link></p>
     <p class="home"><Link to='/galeri'>GALERI</Link></p>
     <p class="home"><Link to='/produktet'>PRODUKTET</Link></p>
     <p class="home"><Link to='/'>HOME</Link></p>
 
     
 
 
 
 
     
 
   
 
 
     
     </div>
 
     
 
 
 
 
 
 
 
 
   </div>


   

    <div class="gjat">
    <h1 class="artikujt">Artikujt e fundit</h1>
    </div>


    <div class="arra">

        <img src={img40} alt="arrat" class="arra-mjalte"></img>

    </div>

    
    <div class="center-page">
    <div class="arra-page">

        <p class="arramemjalte">Arra me mjaltë</p>

        <p class="pimjalti">
        Prej kohëve të lashta, njerëzit kanë njohur dhe përdorur arrat e gjelbra (të pabëra, të vjela në muajin qershor), për vlerat mjaft kurative dhe të rëndësishme që paraqesin për shëndetin. Vetëarrat janë një burim i pasur energjie dhe përmbajnë: ushqyes,minerale, antioksidantë dhe vitamina, të cilat janë esenciale për një shendet të plotë. Poashtu, arrat e pabëra janë të pasura me Omega-3. Konsumimi i rregullt i arrave ndihmon për të ulur kolesterolin e lartë në gjak, rrit elasticitetin e enëve të gjakut, jep efekte shumë të larta për shërimin e problemeve në gjendrën tiroide dhe është një preventive e mirë për sëmundjen e anemisë.

Vlerat e mjaltit janë kaq të njohura dhe të mire pranuara, sa do tëishte e tepërt ti përsëritnim. Pra, nëse bashkoni arrat e gjelbra me mjaltë, ju arrini të përgatisni një përbërje me vlera të mirëfillta shëndetësore si për parandalim të disa sëmundjeve, ashtu edhe për kurimin e tyre. Një përbërje e tillë me këto dy produkte natyrore, rrit aktivitetin hormonal, ka efekt pozitiv shumëpozitiv dhe efikas për problemet e tiroides, rigjeneron qelizat e dëmtuara dhe neutralizon helmet në organizëm.

Ky kombinim i vlerave të arrave dhe të mjaltit, rekomandohet tëpërdoret edhe fëmijëve me fizik të dobët dhe me imunitet të ulët, natyrisht edhe tek të rriturit me simptoma të tilla, ashtu edhe tek personat anemikë. Kjo pasi, kombinimi I mjaltit me arrat, jep efekt shumë pozitiv në rastin e anemisë pasi nxisin pastrimin e mëlçisë, stomakut dhe gjakut.

Ky shurup është gjithashtu i dobishëm për sëmundjet e fytit dhe rrugëve të frymëmarrjes, dhe efekte të dukshme positive sidomos për bronkitin. Gjithashtu përmirëson sistemin imunitar, lehtëson problemet e shkaktuara nga menopauza, obeziteti dhe sëmundjet kronike të frymëmarrjes.

Në mënyrë të përmbledhur disa nga vlerat shumë positive tëshirupit me arra të freskëta dhe mjaltë mund të përmblidhen: a përmirëson në mënyrë të ndjeshme situatën e personave me tiroide (mungesë të jodit); b ul tensionin e gjakut dhe kanë edhe efekt laksativ; c ndihmon me aneminë dhe gjakun; d forcon imunitetin e trupit pasi ka veprim multifunksional; e lehtëson dhimbjen e kokës nga shkaqe të ndryshme, përfshi edhe migrenën; f ndihmon në përmirësimin e situates tek personat qëvuajnë nga pagjumësia dhe qv janë të axhituar; g) përmirëson situatën e shëndetit tek personat me ulçera në stomak; nxit mirefunksionimin e organizmit.

Shirupi i mjaltit me arrra duhet që të ruhat në një zonë të errët dhe të freskët. Gjatë ditëve të nxehta, mund ta ruani edhe në frigorifer por gjithnjë në pjesën e freskut dhe jo në ngrirje.


        </p>

    </div>

    </div>

    



   




        


        </div>




    )
}



export default Rejat;