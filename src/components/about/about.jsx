import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ToolTip from '../tooltip/tooltip';


import myImage from '../../assets/my-image.jpg';
import './about.styles.css';

const About = () => (
    <div className = 'about' >
        <div className = 'aboutme-description'>
            <div className = 'aboutme-description-container'>
                <h3>Welcome !</h3>
                <div className = 'aboutme-text'>
                    <p>
                    Amarachi is a frontend developer who loves Implementing web design and development principles to build stable software. Bringing mock-ups to life using HTML, CSS, JavaScript. Collaborating closely with the team to support projects during all phases of delivery.
                    </p>
                    
                </div>
                <div className = 'button-container'>
                    <button><a href="#small-print">See Portfolio</a> </button>
                    <button><a href="mailto:amarachi2812@gmail.com">Send an Email</a> </button>
                </div>
            </div>
        </div>
        <div className= 'my-preview'>
            <div className= 'my-preview-container'>
                <div className = 'my-preview-image' style={{backgroundImage:`url(${myImage})`}} ></div>
                <h3>AMARACHI IHEANACHO</h3>
                <hr className= 'my-preview-hr'/>
                <p>Frontend Developer | Content Writer</p>
            </div>
            <div className = 'my-preview-icons'>
                <div className = 'my-preview-icons-container'>
                    <a href="https://github.com/Iheanacho-ai">
                        <FontAwesomeIcon icon={['fab', 'github']} />
                    </a>
                    <a href="https://twitter.com/amaraIheanach0">
                        <FontAwesomeIcon icon={['fab', 'twitter']} />
                    </a>
                    <a href="https://amara.hashnode.dev/">
                        <FontAwesomeIcon icon={['fab', 'blogger']} />
                    </a>
                </div>
            </div>
        </div>
    </div>
)

export default About;