import React from 'react';
import banner from '../../../images/banner.jpg';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return <>
        <div className={s.banner}>
            <img src={banner} alt={"banner"}/>
        </div>
        <h1>100% Natural Soap</h1>
    </>
}


export default ProfileInfo;