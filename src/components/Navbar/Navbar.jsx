import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.nav_list}>
                <li className={s.item}><NavLink to="/main" activeClassName={s.active}>Главная</NavLink></li>
                <li className={s.item}><NavLink to="/about" activeClassName={s.active}>О Нас</NavLink></li>
                <li className={s.item}><NavLink to="/contacts" activeClassName={s.active}>Контакты</NavLink></li>
                <li className={s.item}><NavLink to="/dialogs" activeClassName={s.active}>Чат</NavLink></li>
                <li className={s.item}><NavLink to="/users" activeClassName={s.active}>Пользователи</NavLink></li>
            </ul>
        </nav>)
}

export default Navbar;