import React from 'react';
import './toggle-nav.css';

const ToggleNav = ({ tNav }) => {
  return(  
    <div className = 'toggle-nav' >
        <div className = 'toggle-nav-center'>       
            <div className = 'exit-button' onClick = {tNav}>
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