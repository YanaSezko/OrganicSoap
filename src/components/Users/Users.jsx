import React from 'react';
import styles from "./users.module.css"

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdYN-orY9gPbnHdgReKvhS5kiG8_dF76IOGfmN0czJ56zUAVCrow&spnj',
                    followed: false,
                    fullName: 'Yana',
                    status: 'life is good',
                    location: {city: 'kiev', country: 'Ukraine'}
                },
                {
                    id: 2,
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdYN-orY9gPbnHdgReKvhS5kiG8_dF76IOGfmN0czJ56zUAVCrow&spnj',
                    followed: true,
                    fullName: 'Vasya',
                    status: 'hello',
                    location: {city: 'moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdYN-orY9gPbnHdgReKvhS5kiG8_dF76IOGfmN0czJ56zUAVCrow&spnj',
                    followed: false,
                    fullName: 'Vova',
                    status: 'hi',
                    location: {city: 'minsk', country: 'Belarus'}
                }
            ]
        )
    }
    return <>
        {
            props.users.map(u => <div key={u.id}>
                <div>
                    <div><img className={styles.photo} src={u.photoUrl} alt="avatar"/></div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>UnFollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>
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