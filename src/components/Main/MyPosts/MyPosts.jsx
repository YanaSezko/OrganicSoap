import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElement = props.posts.map(p=><Post message={p.message} id={p.id} likesCount={p.likesCount}/>)

    return <section className={s.postBlock}>
        <div>Добавить новый пост</div>
        <div className={s.addPost}>
            <textarea></textarea>
            <button>Add new post</button>
        </div>

        <ul className={s.posts}>
            {postsElement}
        </ul>
    </section>
}


export default MyPosts;