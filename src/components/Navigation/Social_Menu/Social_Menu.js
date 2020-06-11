import React from 'react';

import './Social_Menu.scss';

const SocialMenu = () => {
    return (
      <div className="header__social">
        <a href="#" className="header__social--icon header__social--facebook"></a>
        <a href="#" className="header__social--icon header__social--instagram"></a>
        <a href="#" className="header__social--icon header__social--linkedin"></a>
        <a href="#" className="header__social--icon header__social--vk"></a>
      </div>
    );
}

export default SocialMenu;