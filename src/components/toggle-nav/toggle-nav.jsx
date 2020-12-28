import React, { useEffect, useState } from 'react';
import './toggle-nav.css';

const ToggleNav = ({ tNav,show }) => {

    const [fade,setFade]= useState(false)

//1. when component mounts trigger the fade in animation
    useEffect(()=>{
        if(show){
            setFade(true)
        }
    },[show])

//when the close icon is clicked trigger the fade out animation before you alter the state that triggers the commonent's unmount
   const handleToggle= ()=> {
     setFade(false)
     setTimeout(tNav,500)
    }
    
  return(  
    <div className = {`toggle-nav ${ fade ?'show':'hide'}`} >
        <div className = 'toggle-nav-center'>       
            <div className = 'exit-button' onClick = {handleToggle}>
                <span className = 'bar bar1'></span>
                <span className = 'bar bar3'></span>
            </div>
            <div className= 'toggle-nav-center-maxi'>
                <div className = 'toggle-nav-center-mini' >
                    <a href="/" onClick = {tNav}><div>Home</div></a>
                    <a href="#projects" onClick = {tNav}><div>Projects</div></a>
                    <a href="#blog" onClick = {tNav}><div>Blog</div></a>
                    <a href="#footer" onClick = {tNav}><div>Footer</div></a>
                </div>
            </div>
        </div>
        
    </div>
    ) 
}
;

export default ToggleNav;