import React from 'react';
import styles from "./users.module.css"

let Users = (props) => {
    return <>
        {
            props.users.map(u => <div key={u.id}>
                <div>
                    <div><img className={styles.photo} src={u.photoUrl} alt="avatar"/></div>
                    <div>
                        {u.followed
                            ? <button onClick={()=>{props.unfollow(u.id)}}>UnFollow</button>
                            :<button onClick={()=>{props.follow(u.id)}}>Follow</button>
                        }
                    </div>
                </div>
                <div>
                    <div>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </div>
                    <div>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </div>

                </div>

            </div>)
        }

    </>
}

export default Users;