import React from 'react';
import s from './ProfileInfo.module.css';
import banner from './../../../images/banner.jpg';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from './ProfileStatusWithHooks';



const ProfileInfo = ({profile, status, updateStatus}) => {
    if(!profile){
        return <Preloader/>
    }
    return (
    <div>
       {/*  <div className={s.banner}>
            <img width='100%' src={banner} alt={"banner"}/>
        </div>
        <h1>100% Natural Soap</h1> */}
        
        <div>
            <img src={profile.photos.small}/>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>

    </div>
    )

}


export default ProfileInfo;