import React from 'react';
import s from './ProfileInfo.module.css';
import banner from './../../../images/banner.jpg';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';


const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
    <div>
        {/* <div className={s.banner}>
            <img width='100%' src={banner} alt={"banner"}/>
        </div>
        <h1>100% Natural Soap</h1> */}
        <div>
            <img src={props.profile.photos.small}/>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        </div>

    </div>
    )

}


export default ProfileInfo;