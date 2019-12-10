import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import MainInfo from "./MainInfo/MainInfo";
import mainPage from "../../redux/State";

const Main = (props) => {

    return <main>
        <MainInfo/>
        <MyPosts posts={props.mainPage.posts}
                 newPostText={props.mainPage.newPostText}
                 dispatch={props.dispatch}
        />
    </main>
}


export default Main;