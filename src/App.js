import React from 'react';


import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Galeri from './Galeri';











import './jani.css';


function App(){

  return(

    <div className="App">
     
     


      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/galeri' element={<Galeri/>}/>


      </Routes>



     

      

    </div>
  )
}






    
   


export default App;















  


















