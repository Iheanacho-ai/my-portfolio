import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Me from '../../assets/me.jpg';
import ToolTip from '../tooltip/tooltip';
import './small-print.styles.css';

const SmallPrint = () => (
    <div className = 'small-print-container' id='small-print'  >
        <h2>ABOUT ME</h2>
        <div className= 'small-print'>
            <div className= 'my-image-socials' >
                <div className= 'small-print-icons'>
                    <a href="mailto:amarachi2812@gmail.com">
                        <FontAwesomeIcon icon="envelope-open-text" />
                        <ToolTip size = {'large'} name = {'Send me an email'}/>
                    </a>
                    <a href="https://github.com/Iheanacho-ai">
                        <FontAwesomeIcon icon={['fab', 'github']} />
                        <ToolTip name = {'Github'}/>
                    </a>
                    <a href="https://twitter.com/amaraIheanach0">
                        <FontAwesomeIcon icon={['fab', 'twitter']} />
                        <ToolTip name = {'Twitter'} />
                    </a>
                    <a href="https://amara.hashnode.dev/">
                        <FontAwesomeIcon icon={['fab', 'blogger']} />
                        <ToolTip name = {'Blog'}/>
                    </a>
                    <a href="https://www.linkedin.com/in/amarachi-iheanacho-0126861a6/">
                        <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                        <ToolTip name = {'Linkedin'}/>
                    </a>
                </div>
                <div style={{backgroundImage:`url(${Me})`}} className = 'amara-image'></div>
            </div>


            <div className= 'my-description'>
            <div> 
                <h5>Iheanacho Amarachi Sharon</h5>
                <p>
                    I am a frontend developer with an eye for design. I build responsive and really performative websites for you and your brand. I achieve this using HTML, CSS, Bootstrap, SASS, JavaScript, React, Redux, GraphQL, Gatsby.js. I also breakdown concepts on my blog, where I write about topics in tech, so anyone can follow up on my journey.
                    I am currently studying Electrical and Electronics Engineering and open to job oppurtunites.          
                </p>
            <button className = 'cv-button'>DOWNLOAD CV</button>
            </div>
            </div>
        </div>
    </div>
);

export default SmallPrint;