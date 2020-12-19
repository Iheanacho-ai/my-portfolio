import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



import myImage from '../../assets/my-image.jpg';
import './about.styles.css';

const About = () => (
    <div className = 'about' >
        <div className = 'about-header'>
            <h2>Amarachi Sharon Iheanacho</h2>
            <div className = 'about-icons' >
                <a href="https://github.com/Iheanacho-ai">
                <FontAwesomeIcon icon={['fab', 'github']} />
                </a>
                <a href="https://twitter.com/amaraIheanach0">
                <FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                <a href="">
                <FontAwesomeIcon icon="envelope-open-text" />
                </a>
                <a href="https://amara.hashnode.dev/">
                <FontAwesomeIcon icon={['fab', 'blogger']} /></a>
                <a href="https://www.linkedin.com/in/amarachi-iheanacho-0126861a6/">
                <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                </a>
            </div>
       </div>
       <div className = 'about-paragrah'>
           <p>
               I am frontend developer, with an eye for design. I build really responsive and performative websites for you and your brand. I write blog posts to explain things I have learnt or currently working on in my journey with tech.
               I am proficient in HTML, CSS, JavaScript, React and React related libraries. I am currently studying Electrical and Electronics Engineering. 
           </p>
       </div>
       <div className = 'my-image' style={{backgroundImage:`url(${myImage})`}}/>
    </div>
)

export default About;