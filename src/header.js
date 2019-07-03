import React,{fragment} from 'react';
import './header.css';
import Reyhoon from './picture/1.png';
import ReyhoonIcon from './picture/icon.png';

function Header() {
    return (
        <fragment>
            <ul>
                <li><a href="login.html"> ورود</a></li>
                <li>|</li>
                <li><a href="register.html"> عضویت</a></li>
                <li></li>
                <li> راهنما </li>
            </ul>
            <img id="reyhoon" src={Reyhoon} />
        <img id="icon_rey" src={ReyhoonIcon} />
            <div id="grad1"></div>
        </fragment>
    );
}
export default Header;