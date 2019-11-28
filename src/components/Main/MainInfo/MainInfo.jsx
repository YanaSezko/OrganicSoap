import React from 'react';
import banner from '../../../images/banner.jpg';
import s from './MainInfo.module.css';

const MainInfo = () => {
    return <>
        <div className={s.banner}>
            <img src={banner} alt={"banner"}/></div>
        <h1>100% Natural Soap</h1>
    </>
}


export default MainInfo;