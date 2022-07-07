import React, {useState} from 'react';
import './jani.css';
import {Users} from './users';
import profileImage from './img/img5.jpg';
import { Link } from 'react-router-dom';


function Home() {

    const [mut, setMut] = useState(false);
 
    const [mbyll, setHap] = useState(false);
 
    const [query, setQuery] = useState('');
 
 
   
    
 
 
 
    
 
    
 
   
 
    
 
 
 
 
    return (
     <div className="App">
       
 
 
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
 
   <div class="tona">
       Produktet Tona
       
 
   </div>
 
   
   
   
   <div class="divat">
 
   
   {Users.filter((user) => user.first_name.includes(query)).map((user) => (
   
     <div key={user.id} class="all-in">
 
 
         <img src={user.img} alt="first"></img>
 
         
         
         <h3>{user.first_name}</h3>
 
         
 
         
 
         
 
         <p class="lule">{user.paragraf}</p>
 
     </div>
 
   ))}
   
 
   
   
   </div>
 
   
 
   
 
   
 
 
 
 
 
   <footer>
 
     <h2>
         PER ME TEPER INFORMACION
     </h2>
 
 
     <p class="informacion">
         Nëse dëshironi të bashkëpunoni me ne, apo të njheni më tepër me produktet që ne tregtojmë në tregun vendas, mos hezitoni të na kontaktoni.
     </p>
 
 
    
 
 <button class="kontakto" id="poshte"><a href="https://wa.me/447473907551" target="_blank">
     KONTAKTO
   </a></button>
 
   </footer>
 
   <div class="drop">
 
   <div class="logo1">
 
 <img src={profileImage} alt="main" class="foto2"></img>
 
 
 </div>
 
 <div class="display-div1">
   
 
 
 
 <p class="home1"><a href="#poshte">KONTAKT</a></p>
 <p class="home1"><a href="#">TE REJAT</a></p>
 <p class="home1"><Link to='/galeri'>GALERI</Link></p>
 <p class="home1"><Link to='/'>HOME</Link></p>
 
 
 
 
 
 </div>
 
 
 <div class="next">
 
 <div class="fb1"><a href="https://www.facebook.com/Boronica.al/" target="_blank"><i class="fa-brands fa-facebook-f face2"></i></a></div>
 
 <div class="instagram1"><a href="https://www.instagram.com/boronica_.al/?hl=en" target="_blank"><i class="fa-brands fa-instagram insta2"></i></a></div>
 
 <div class="google1"><i class="fa-brands fa-google go2"></i></div>
 </div>
 
   </div>
 
 
   <div class="small-div">
 
 
   <div class="logo2">
 
 <img src={profileImage} alt="main" class="foto3"></img>
 
 
 </div>
 
 
 
 <div class="drop-lines">
 <i class="fa-solid fa-grip-lines lines" onClick={() => setHap(!mbyll)}></i>
 </div>
 
 <div class="search">
 <i class="fa-solid fa-magnifying-glass search-icon" onClick={() => setMut(!mut)}></i>
 </div>
 
   </div>
 
 
 {mut && (
   <div class="inputi">
 
       <input type="text" name="text" class="text1" placeholder="Type and hit enter..." onChange={e => setQuery(e.target.value)}></input>
 
 
   </div>
 )}
 
 {mbyll && (
     
 <div class="side-file">
  
 
 
 
 
 
 
 <p class="home5"><Link to='/'>HOME</Link></p>
 <p class="home5"><Link to='/produktet'>PRODUKTET</Link></p>
 <p class="home5"><Link to='/galeri'>GALERI</Link></p>
 <p class="home5"><a href="#">TE REJAT</a></p>
 <p class="home5"><a href="#poshte">KONTAKT</a></p>
 
 <div class="fb2"><a href="https://www.facebook.com/Boronica.al/" target="_blank"><i class="fa-brands fa-facebook-f face3"></i></a></div>
 
 <div class="instagram2"><a href="https://www.instagram.com/boronica_.al/?hl=en" target="_blank"><i class="fa-brands fa-instagram insta3"></i></a></div>
 
 <div class="google2"><i class="fa-brands fa-google go3"></i></div>
 
 <i class="fa-solid fa-phone phone5"></i>
 
 <p class="tel-phonenumber"><a href="tel:+355 69 370 7104">
             +355 69 370 7104 </a>
         </p>
 
 
         <div class="close-page" onClick={() => setHap(!mbyll)}>
         <i class="fa-solid fa-x iksi"></i>
         </div>
 
 
 
 
 
 
 
 </div>
 
 )}
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
   
 
 
         
 
         
         
         
     
 
 
  
 
   
    
 
 
   </div>
 
 
   
 
 
 
   );
 
 
 
 
 
 
   
 };
 



export default Home;