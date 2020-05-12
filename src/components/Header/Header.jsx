import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header =(props)=>{
    return <header className={s.header}>
        <h2>Organic Soap by YS</h2>
        <div className={s.loginBlock}>
            {props.isAuth ? <div>{props.login} -<button onClick={props.logout}>Log out</button></div>: <NavLink to={'/login'}>login</NavLink> }
        </div>
  </header>
}

export default Header;