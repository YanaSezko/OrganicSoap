import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/State";

const MyPosts = (props) => {
    let postsElement = props.posts.map(p => <Post message={p.message} id={p.id} likesCount={p.likesCount}/>);

    let newPostEl = React.createRef();

    let addPost = () => {
        // let text = newPostEl.current.value;
        // props.addPost(text);
        // props.updateNewPostText('');
        props.dispatch(addPostActionCreator());
    }
    let onPostChange = () => {
        let text = newPostEl.current.value;
        //let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }


    return <section className={s.postBlock}>
        <div>Добавить новый пост</div>
        <div className={s.addPost}>
            <textarea onChange={onPostChange} ref={newPostEl} value={props.newPostText}/>
            <button onClick={addPost}>Add new post</button>
        </div>

        <ul className={s.posts}>
            {postsElement}
        </ul>
    </section>
}


export default MyPosts;