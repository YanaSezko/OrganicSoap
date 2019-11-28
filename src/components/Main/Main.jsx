import React from 'react';
import banner from '../../images/banner.jpg';
import s from './Main.module.css';
import MyPosts from './MyPosts/MyPosts';
import MainInfo from "./MainInfo/MainInfo";

const Main = () => {
    return <main>
        <MainInfo/>
        <MyPosts/>
    </main>
}


export default Main;