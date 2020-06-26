import React from 'react';
import s from './ProfileInfo.module.css';
import banner from './../../../images/banner.jpg';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from "./../../../images/panda1.png";


const ProfileInfo = ({profile, status, updateStatus,isOwner,savePhoto}) => {
    if(!profile){
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) =>{
    if (e.target.files.length){
        savePhoto(e.target.files[0]);
      }
    } 

    return (
    <div>
       {/*  <div className={s.banner}>
            <img width='100%' src={banner} alt={"banner"}/>
        </div>
        <h1>100% Natural Soap</h1> */}
        
        <div>
            <img className={s.mainPhoto} src={profile.photos.large || userPhoto}/>
            {isOwner && <input type= {"file"} onChange={onMainPhotoSelected}/>}
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>

    </div>
    )

}


export default ProfileInfo;