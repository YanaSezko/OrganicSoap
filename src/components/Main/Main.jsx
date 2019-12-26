import React from 'react';

import MainInfo from "./MainInfo/MainInfo";

import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Main = (props) => {

    return <main>
        <MainInfo/>
        <MyPostsContainer store={props.store} />
    </main>
}


export default Main;