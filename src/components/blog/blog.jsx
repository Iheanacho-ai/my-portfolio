import React from 'react';
import reactHooks from '../../assets/react-hooks.png';
import regex from '../../assets/regex.png';
import flexbox from '../../assets/flexbox.png'
import './blog.styles.css';

const Blog = () => (
    <div className = 'blog' id = 'blog'>
        <h2>BLOG</h2>
        <p className ='blog-link'>Here is a preview of some of my works, to read more, check me out at <a href="www.amara.hashnode.dev">amara's blog</a> </p>
        
        <div className = 'blog-container' >
            <div>
                <div className ='blog-image'  style={{backgroundImage:`url(${reactHooks})`}} ></div>
                <div className = 'blog-preview'>
                    <h5>REACT HOOKS</h5>
                    <p className="blog-preview-p">React hooks is a relatively new phenomenon that has braced the react community.</p>
                    <a href="https://amara.hashnode.dev/react-hooks">READ MORE</a>
                </div>
            </div>
            <div>
                <div className ='blog-image' style={{backgroundImage:`url(${regex})`}}></div>
                <div className = 'blog-preview'>
                    <h5>REGULAR EXPRESSIONS</h5>
                    <p className="blog-preview-p">Regular Expressions, popularly known as Regex, I think gets a bad rep for being tricky to understand or apply.</p>
                    <a href="https://amara.hashnode.dev/regular-expressions-in-javascript">READ MORE</a>                    
                </div>
            </div>
            <div>
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


export default Blog;