import React from 'react';
import './toggle-nav.css';

const ToggleNav = ({ tNav }) => {
  return(  
    <div className= 'toggle-menu'> 
        <div><a href="">AboutUs</a></div>
        <div><a href="">Services</a> </div>
        <div><a href="">Projects</a> </div>
        <div><a href="">Blog</a> </div>
        <div><a href="">ContactUs</a> </div>
     
        
    </div>
    ) 
}
;

export default ToggleNav;