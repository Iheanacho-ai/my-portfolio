import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footer.styles.css';

const Footer = () => (
    <div className = 'footer'>
        <div className = 'icon-footer'>
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
        <p>Amarachi Sharon Iheanacho</p>
    </div>
);


export default Footer;