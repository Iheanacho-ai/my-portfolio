import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ToolTip from '../tooltip/tooltip';

import './footer.styles.css';

const Footer = () => (
    <div className = 'footer' id = 'contact'>
        <div className = 'icon-footer'>
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
                <ToolTip name = {'Twitter'}/>
            </a>
            <a href="https://amara.hashnode.dev/">
                <FontAwesomeIcon icon={['fab', 'blogger']} />
                <ToolTip name = {'Blog'}/>
            </a>
            <a href="https://www.linkedin.com/in/amarachi-iheanacho-0126861a6/">
                <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                <ToolTip name = {'Linked-in'}/>
            
            </a>
        </div>
        <p>Amarachi Sharon Iheanacho</p>
    </div>
);


export default Footer;