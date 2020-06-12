import React from 'react';

import './Social_Menu.scss';

const SocialMenu = () => {
    return (
      <div className="header__social">
        <a href="https://pl-pl.facebook.com/nastya.malchikhina" target="_blank" className="header__social--icon header__social--facebook" rel="noopener noreferrer"><i></i></a>
        <a href="https://www.instagram.com/anastasia_malchikhina" target="_blank" className="header__social--icon header__social--instagram" rel="noopener noreferrer"><i></i></a>
        <a href="https://pl.linkedin.com/in/anastasiia-malchikhina" target="_blank" className="header__social--icon header__social--linkedin" rel="noopener noreferrer"><i></i></a>
        <a href="/#" target="_blank" className="header__social--icon header__social--vk" rel="noopener noreferrer"><i></i></a>
      </div>
    );
}

export default SocialMenu;