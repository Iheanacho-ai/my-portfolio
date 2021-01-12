import React, {useState} from 'react';
import ToggleNav from '../toggle-nav/toggle-nav';
import './header.styles.css';


const Header = () => {
    const [hidden, setHidden ] = useState(true) 
    
    const toggleMenuNav = () => setHidden(!hidden );
    
    
    return(
        <div className='header' >
            <div className = 'header-container'>
                <div className = 'header-icon'>AI</div>
                <div className="toggle-nav-left">
                    <div className="nav-toggle-bar" onClick = {toggleMenuNav}>
                        <span></span>
                        <span className = 'span-left'></span>
                        <span></span>
                    </div>
                </div> 
                    { hidden ? null : <ToggleNav tNav = {toggleMenuNav} /> }
            </div>
        </div>
     )
    
};

export default Header;