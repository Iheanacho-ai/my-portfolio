import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ToggleNav from '../toggle-nav/toggle-nav';
import AI from '../../assets/AI.png'
import './header.styles.css';


const Header = () => {
    const [hidden, setHidden ] = useState(true) 
    
    const toggleMenuNav = () => setHidden(!hidden );
    
    
    return(
        <div className='header' >
            <div className = 'header-container'>
                <div className = 'header-icon'><h2>AI.</h2> </div>
                <div className = 'header-links'>
                   <p><a href="#">Home</a></p>
                   <p><a href="#small-print">AboutMe</a></p>
                   <p><a href="#services">Services</a></p>
                   <p><a href="#projects">Projects</a></p>
                   <p><a href="#blog">Blog</a></p>
                   <p><a href="#contact">ContactUs</a></p>
                </div>
                <div className= 'header-icons'>
                    <a href="https://github.com/Iheanacho-ai">
                        <FontAwesomeIcon icon={['fab', 'github']} />
                    </a>
                    <a href="https://twitter.com/amaraIheanach0">
                        <FontAwesomeIcon icon={['fab', 'twitter']} />
                    </a>
                    <a href="https://amara.hashnode.dev/">
                        <FontAwesomeIcon icon={['fab', 'blogger']} />
                    </a>
                    <a href="https://www.linkedin.com/in/amarachi-iheanacho-0126861a6/">
                        <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                    </a>
                </div>

                {/* <div className ='header-mobile-container' >
                    <div className = 'header-icon'><h2>AI.</h2> </div>
                    <div>
                        <div class="toggle-nav-left">
                            <div class="nav-toggle-bar" onclick="toggleNav()">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div> */}



            </div>
        </div>
     )
    
};

export default Header;