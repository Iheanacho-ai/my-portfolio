import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ToolTip from '../tooltip/tooltip';


import myImage from '../../assets/my-image.jpg';
import './about.styles.css';

const About = () => (
    <div className = 'about' >
        <div className = 'about-header'>
            <h2>Amarachi Sharon Iheanacho</h2>
            <div className = 'about-icons' >
                <a href="https://github.com/Iheanacho-ai">
                    <FontAwesomeIcon icon={['fab', 'github']} />
                    <ToolTip name = {'Github'}/>
                </a>
                <a href="https://twitter.com/amaraIheanach0">
                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                    <ToolTip name = {'Twitter'} />
                </a>
                <a href="">
                    <FontAwesomeIcon icon="envelope-open-text" />
                    <ToolTip name = {'Email'}/>
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
       </div>
       <div className = 'about-paragrah'>
           <p>
               Hey besties, I am a frontend developer, proficient in HTML, CSS, Bootstrap, Sass, JavaScript, Gatsbyjs, React(Redux, GraphQL).
           </p>
       </div>
       <div className = 'my-image' style={{backgroundImage:`url(${myImage})`}}/>
    </div>
)

export default About;