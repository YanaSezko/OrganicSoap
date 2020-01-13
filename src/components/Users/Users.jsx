import React from 'react';
import styles from "./users.module.css";
import * as axios from 'axios';
import userPhoto from "../../images/panda1.png";

class Users extends React.Component {
    componentDidMount() {

        axios.get('https://cors-anywhere.herokuapp.com/' + 'https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items);
        });

    }

    render() {
        return (
            <>
                <div>
                    <span >1</span>
                    <span className={styles.selectedPage}>2</span>
                    <span >3</span>
                    <span >4</span>
                    <span >5</span>

                </div>
                {
                    this.props.users.map(u => <div key={u.id}>
                        <div>
                            <div><img className={styles.photo} src={u.photos.small != null ? u.photos.small : userPhoto}
                                      alt="avatar"/></div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => {
                                        this.props.unfollow(u.id)
                                    }}>UnFollow</button>
                                    : <button onClick={() => {
                                        this.props.follow(u.id)
                                    }}>Follow</button>
                                }
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </div>
                            <div>
                                <div>{"u.location.country"}</div>
                                <div>{"u.location.city"}</div>
                            </div>

                        </div>

                    </div>)
                }

            </>
        );
    }
}

export default Users;