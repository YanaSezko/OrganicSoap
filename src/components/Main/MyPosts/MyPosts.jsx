import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/main-reducer";

const MyPosts = (props) => {
    let postsElement = props.posts.map(p => <Post message={p.message} id={p.id} likesCount={p.likesCount}/>);

    let newPostEl = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostEl.current.value;
        props.updateNewPostText(text);
    }


    return <section className={s.postBlock}>
        <div>Добавить новый пост</div>
        <div className={s.addPost}>
            <textarea onChange={onPostChange} ref={newPostEl} value={props.newPostText}/>
            <button onClick={onAddPost}>Add new post</button>
        </div>

        <ul className={s.posts}>
            {postsElement}
        </ul>
    </section>
}


export default MyPosts;