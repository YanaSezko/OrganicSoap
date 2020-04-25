import React from 'react';
import banner from './../../../images/banner.jpg';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return <>
        <div className={s.banner}>
            <img src={banner} alt={"banner"}/>
        </div>
        <h1>100% Natural Soap</h1>
        <div>
            <img src={props.profile.photos.small}/>
            <ProfileStatus status={"Hello my friends!"}/>
        </div>

    </>

}


export default ProfileInfo;