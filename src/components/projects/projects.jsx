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
          imageUrl: Crwn,
          name: 'Crwn-app',
          preview: 'An E-commerce app',
          stack: 'React, Redux-Saga, Styled-Components, Stripe, Firebase'
  
        },
        {
          imageUrl: Tunes,
          name: 'tunes',
          preview: 'A Music Streaming Platform',
          stack: 'React, Redux-Saga, Styled-Components, Stripe, Firebase'
  
        },
        {
          imageUrl: Crwn,
          name: 'writer',
          preview: 'A simple blog',
          stack: 'GatsbyJs, Styled-Components'
  
        },
        {
          imageUrl: PortfolioPic,
          name: "Amarachi's portfolio",
          preview: 'My portfolio website',
          stack: 'CSS, React Hooks'
  
        },
        {
          imageUrl: Crwn,
          name: 'Git Finder',
          preview: 'A website used for finding git users by their usernames',
          stack: 'HTML, CSS, JavaScript, Api'
  
        },
        {
          imageUrl: ColorGame,
          name: 'Color Game',
          preview: 'A game for picking correctly color combinations ',
          stack: 'HTML, CSS, JavaScript'
        }
  
      ]
    }
  }
  render(){
    return (
  
      <div className='projects' >

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
              // screens greater than >= 775px
              breakpoint:1030,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2.5,
                slidesToScroll: 2.5,
              }
            },{
              // screens greater than >= 1024px
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
            this.state.sections.map(({imageUrl, name, preview, stack}) => (
              <div className = 'glider-div' style= {{ backgroundImage: `url(${imageUrl})`}}> 
                <div className= 'projects-description'>
                  <div className = 'icons-glider-div'>
                    <a href="https://github.com/Iheanacho-ai">
                      <FontAwesomeIcon icon={['fab', 'github']} />
                    </a>

                    <a href="https://github.com/Iheanacho-ai">
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





