import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/main-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const  mapStateToProps = (state) => {
    return {
        posts: state.mainPage.posts,
        newPostText:state.mainPage.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;