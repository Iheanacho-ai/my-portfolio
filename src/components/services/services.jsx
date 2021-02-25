import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './services.styles.css';

gsap.registerPlugin(ScrollTrigger)

const Services = () => {

    const servicesRef = useRef(null);

    const revealRefs = useRef([])
    revealRefs.current= []


    useEffect(() => {
      gsap.from(servicesRef.current, {
        duration: 1,
        autoAlpha:0,
        ease: 'none',
        delay: 1
      })   
      
      revealRefs.current.forEach((el, index) => {
        gsap.fromTo(el, {
            autoAlpha: 0
        }, {
            duration: 1, 
            autoAlpha: 1, 
            ease: 'none',
            scrollTrigger: {
                id: `section-${index-1}`,
                trigger: el,
                start: 'top center+=100',
                toggleActions: 'play none none reverse',
                
            }
        })
      })
    }, [])

    const addToRefs = (el) => {
        if(el && !revealRefs.current.includes(el)){
            revealRefs.current.push(el)
        }
    }

    return(
        <div className = 'services'>
            <h2>Services</h2>
            <p className ='services-p'>Here are some of the services I offer </p>
            <div ref = {servicesRef} className = 'services-container' >
                <div  className = 'services-content' ref = { addToRefs }>
                    <div className ='services-image'>
                        <FontAwesomeIcon icon='desktop'  className= 'services-icon' />
                    </div>
                    <div className = 'services-preview'>
                        <h5>Frontend Web Development</h5>
                        <p className="services-preview-p">Let me help your consumers find you and your brand.</p>
                    </div>
                </div>
                <div className = 'services-content' ref = { addToRefs }>
                    <div className ='services-image' >
                        <FontAwesomeIcon icon='edit' className= 'services-icon' />
                    </div>
                    <div className = 'services-preview'>
                        <h5>Technical Writing</h5>
                        <p className="services-preview-p">I write easy to understand blog posts on my journey in tech. </p>
                    </div>
                </div>
                <div className = 'services-content' ref = { addToRefs }>
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
    )
};

export default Services;