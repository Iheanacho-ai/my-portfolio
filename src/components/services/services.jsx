import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './services.styles.css';

const Services = () => (
    <div className = 'services'>
        <h2>Services</h2>
        <p className ='services-p'>Here are some of the services I offer </p>
        <div className = 'services-container' >
            <div  className = 'services-content'>
                <div className ='services-image'>
                    <FontAwesomeIcon icon='desktop'  className= 'services-icon' />
                </div>
                <div className = 'services-preview'>
                    <h5>Frontend Web Development</h5>
                    <p className="services-preview-p">Let me help your consumers find you and your brand.</p>
                </div>
            </div>
            <div className = 'services-content'>
                <div className ='services-image' >
                    <FontAwesomeIcon icon='edit' className= 'services-icon' />
                </div>
                <div className = 'services-preview'>
                    <h5>Technical Writing</h5>
                    <p className="services-preview-p">I write easy to understand blog posts on my journey in tech. </p>
                </div>
            </div>
            <div className = 'services-content'>
                <div className ='services-image' >
                    <FontAwesomeIcon icon='microphone-alt' className= 'services-icon' />
                </div>
                <div className = 'services-preview'>
                    <h5>Public Speaking</h5>
                    <p className="services-preview-p">You need somebody to preach the gospel of tech. I got you!</p>
                </div>
            </div>
        </div>
    </div>
);

export default Services;