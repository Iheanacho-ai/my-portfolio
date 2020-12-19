import React from 'react';
import ToggleNav from '../toggle-nav/toggle-nav';
import './header.styles.css';


class Header extends React.Component{
    constructor(){
        super()

        this.state = {
            hidden : true
        }
    }
    
    toggleNav = () => {
        this.setState({hidden : !this.state.hidden});
    }
    render(){
        const { hidden } = this.state;
        return(
            <div className='header' >
                <div className = 'header-container'>
                    <div className = 'header-icon'>AI</div>
                    <div className="toggle-nav-left">
                            <div className="nav-toggle-bar" onClick = {this.toggleNav}>
                                <span></span>
                                <span className = 'span-left'></span>
                                <span></span>
                            </div>
                        </div> 
                        { hidden ? null : <ToggleNav tNav = {this.toggleNav} /> }
                </div>
            </div>
        )
    }
};

export default Header;