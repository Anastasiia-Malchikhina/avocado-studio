import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.scss';
import SocialMenu from './Social_Menu/Social_Menu';
class Nav extends React.Component {
  state = {
    isBoxVisible: false
  };
  toggleBox = () => {
    this.setState(prevState => ({ isBoxVisible: !prevState.isBoxVisible }));
  };
  render () {
    const { isBoxVisible } = this.state;
    return (

      <header className="header">
        <div className="header__nav">
          <a href="/#" className={`header__hamburger ${isBoxVisible ? "active" : ""}`} onClick={this.toggleBox}><span></span></a>
          <ul className={`header__menu ${isBoxVisible ? "active" : ""}`}>
            <li className="header__menu-item">
              <NavLink exact activeClassName="_active" to="/">
                Home
              </NavLink>
            </li>
            <li className="header__menu-item">
              <NavLink  activeClassName="_active" to="/o-nas">
                O nas
              </NavLink>
            </li>
            <li className="header__menu-item">
              <NavLink activeClassName="_active" to="/portfolio">
                Portfolio
              </NavLink>
            </li>
            <li className="header__menu-item">
              <NavLink  activeClassName="_active" to="/kontakt">
                Kontakt
              </NavLink>
            </li>
            <SocialMenu />
          </ul>
         
        </div>
      </header>
    );
  }

};

export { Nav };
