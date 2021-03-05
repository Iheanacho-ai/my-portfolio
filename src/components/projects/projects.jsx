import React from 'react';
import Crwn from '../../assets/crwn.PNG';
import Tunes from '../../assets/tunes.PNG';
import PortfolioPic from '../../assets/amarachi-portfolio.PNG';
import ColorGame from '../../assets/color-game.PNG';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './glider.css';



import './projects.styles.css';


import GliderComponent from 'react-glider-carousel';
 
class SimpleSlider extends React.Component{

  constructor(){
    super()

    this.state = {
      sections: [
        {
          imageUrl: 'https://res.cloudinary.com/amarachi-2812/image/upload/v1614860389/crwn_j70tr9.png',
          name: 'Crwn-app',
          preview: 'An E-commerce app',
          stack: 'React, Redux-Saga, Styled-Components, Stripe, Firebase',
          githubUrl: 'https://github.com/Iheanacho-ai/crwn-clothing',
          linkUrl:'https://crwn-amara.herokuapp.com/'
  
        },
        {
          imageUrl:'https://res.cloudinary.com/amarachi-2812/image/upload/v1614860530/tunes_cc0ajr.png' ,
          name: 'tunes',
          preview: 'A Music Streaming Platform',
          stack: 'React, Redux-Saga, Styled-Components, Stripe, Firebase',
          githubUrl: 'https://github.com/Iheanacho-ai/tunes',
          linkUrl:'https://crwn-amara.herokuapp.com/'
  
        },
        {
          imageUrl: Crwn,
          name: 'writer',
          preview: 'A simple blog',
          stack: 'GatsbyJs, Styled-Components'
  
        },
        {
          imageUrl: 'https://res.cloudinary.com/amarachi-2812/image/upload/v1614860864/amarachi-portfolio_qnx3vt.png',
          name: "Amarachi's portfolio",
          preview: 'My portfolio website',
          stack: 'CSS, React Hooks',
          githubUrl: 'https://github.com/Iheanacho-ai/my-portfolio',
          linkUrl:'https://amaraiheanacho.netlify.app/'
  
        },
        {
          imageUrl: Crwn,
          name: 'Git Finder',
          preview: 'A website used for finding git users by their usernames',
          stack: 'HTML, CSS, JavaScript, Api',  
          githubUrl: 'https://github.com/Iheanacho-ai/GitFinder.github.io',
          linkUrl:'https://git-finder-work.netlify.app/'
  
        },
        {
          imageUrl: 'https://res.cloudinary.com/amarachi-2812/image/upload/v1614860640/color-game_ptwdas.png',
          name: 'Color Game',
          preview: 'A game for picking correctly color combinations ',
          stack: 'HTML, CSS, JavaScript',         
          githubUrl:'https://github.com/Iheanacho-ai/colorGame',
          linkUrl:'https://amara-color-game.netlify.app/'
        }
  
      ]
    }
  }
  render(){
    return (
  
      <div className='projects' id='projects'  >

        <h2 className= 'projects-h2'> PROJECTS </h2>

        <GliderComponent 
        hasDots={ true }
        settings={({
          slidesToShow: 2.5,
          slidesToScroll:2.5,
          draggable: true,
          duration: 1.0,
          responsive: [
            {
            // screens greater than >= 1020px
            breakpoint:1030,
            settings: {
              // Set to `auto` and provide item width to adjust to viewport
              slidesToShow: 2.5,
              slidesToScroll: 2.5,
            }
          },
            {
              // screens greater than >= 1020px
              breakpoint:1020,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },{
              // screens greater than >= 280px
              breakpoint: 280,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]
  
  
  
        })}
        
  
  
  
        >
          {
            this.state.sections.map(({imageUrl, name, preview, stack, githubUrl,linkUrl}) => (
              <div className = 'glider-div' style= {{ backgroundImage: `url(${imageUrl})`}}> 
                <div className= 'projects-description'>
                  <div className = 'icons-glider-div'>
                    <a href={githubUrl}>
                      <FontAwesomeIcon icon={['fab', 'github']} />
                    </a>

                    <a href={linkUrl}>
                      <FontAwesomeIcon icon= 'chevron-circle-right' />
                    </a>
                  </div>

                  <div className= 'about-projects'>
                    <h2>{name}</h2>
                    <p>{preview}</p>
                    <p>{stack}</p>
                  </div>
                </div>
              </div>
  
            ))
          }
        </GliderComponent>
      </div>
    )}
}

export default SimpleSlider;





