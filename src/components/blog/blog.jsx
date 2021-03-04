import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import reactHooks from '../../assets/react-hooks.png';
import regex from '../../assets/regex.png';
import flexbox from '../../assets/flexbox.png'
import './blog.styles.css';

const Blog = () => {

    const revealBlogRefs = useRef([])
    revealBlogRefs.current= []


    useEffect(() => {
        revealBlogRefs.current.forEach((el, index) => {
            gsap.fromTo(el, {
                autoAlpha: 0
            }, {
                duration: 1, 
                autoAlpha: 1, 
                ease: 'none',
                delay: 0.3,
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
        if(el && !revealBlogRefs.current.includes(el)){
            revealBlogRefs.current.push(el)
        }
    }

    return(
        <div className = 'blog' id = 'blog'>
            <h2>BLOG</h2>
            <p className ='blog-link'>Here is a preview of some of my works, to read more, check me out at <a href="www.amara.hashnode.dev">amara's blog</a> </p>
            
            <div className = 'blog-container' >
                <div ref= {addToRefs}>
                    <div className ='blog-image'  style={{backgroundImage:`url(${reactHooks})`}} ></div>
                    <div className = 'blog-preview'>
                        <h5>REACT HOOKS</h5>
                        <p className="blog-preview-p">React hooks is a relatively new phenomenon that has braced the react community.</p>
                        <a href="https://amara.hashnode.dev/react-hooks">READ MORE</a>
                    </div>
                </div>
                <div ref= {addToRefs}>
                    <div className ='blog-image' style={{backgroundImage:`url(${regex})`}}></div>
                    <div className = 'blog-preview'>
                        <h5>REGULAR EXPRESSIONS</h5>
                        <p className="blog-preview-p">Regular Expressions, popularly known as Regex, I think gets a bad rep for being tricky to understand or apply.</p>
                        <a href="https://amara.hashnode.dev/regular-expressions-in-javascript">READ MORE</a>                    
                    </div>
                </div>
                <div ref= {addToRefs}>
                    <div className ='blog-image' style={{backgroundImage:`url(${flexbox})`}} ></div>
                    <div className = 'blog-preview'>
                        <h5>FLEX BOX</h5>
                        <p className="blog-preview-p">Flexbox is a one-dimensional layout method for laying out items in rows or columns.</p>
                        <a href="https://amara.hashnode.dev/a-guide-to-css-flexbox">READ MORE</a>                    
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Blog;