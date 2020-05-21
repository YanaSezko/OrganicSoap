import React from 'react';
import styles from "./users.module.css";
import userPhoto from "../../images/panda1.png";
import {NavLink} from "react-router-dom";
import Paginator from '../common/Paginator/Paginator';



let User = ({user,followingInProgress,unfollow,follow}) => {
  
return (
      <div>
            <div>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img className={styles.photo} src={user.photos.small != null ? user.photos.small : userPhoto}
                             alt="avatar"/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)}  
                            onClick={() => {unfollow(user.id)}}>UnFollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => {follow(user.id)}}>Follow</button>
                    }
                    
                </div>
            </div>
            <div>
                <div>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </div>
                <div>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </div>
            </div>
        </div>)    
 }

export default User;