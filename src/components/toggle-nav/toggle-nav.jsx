import React from 'react';
import './toggle-nav.css';

const ToggleNav = ({ tNav }) => {
  return(  
    <div className= 'toggle-menu'> 
        <div><a href="#">AboutUs</a></div>
        <div><a href="#services">Services</a> </div>
        <div><a href="#projects">Projects</a> </div>
        <div><a href="#blog">Blog</a> </div>
        <div><a href="#contact">ContactUs</a> </div>
     
        
    </div>
    ) 
}
;

export default ToggleNav;