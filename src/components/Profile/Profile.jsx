import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";

const Profile = (props) => {
    return (
    <div>
        <iframe  className={s.vid} width="727" height="409" src="https://www.youtube.com/embed/HJeJ_1ASQYI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <ProfileInfo  profile={props.profile}  status={props.status} updateStatus={props.updateStatus}/>
        <MyPostsContainer/>
    </div>
    )
}


export default Profile;