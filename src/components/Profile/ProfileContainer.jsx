import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {setMainProfile} from "../../redux/profile-reducer";
import connect from "react-redux/lib/connect/connect";

class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get('https://cors-anywhere.herokuapp.com/' + `https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setMainProfile(response.data);
        });
    }

    render() {
        return (
            < Profile {...this.props} profile={this.props.profile} />
        )

    }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

export default connect(mapStateToProps, {setMainProfile})(ProfileContainer)

