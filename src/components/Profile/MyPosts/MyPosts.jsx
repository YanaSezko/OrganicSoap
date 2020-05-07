import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { reduxForm, Field } from 'redux-form';


const MyPosts = (props) => {
    let postsElement = props.posts.map(p => <Post message={p.message} id={p.id} likesCount={p.likesCount}/>);

    let newPostEl = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }
   

    return <section className={s.postBlock}>
        <div>Добавить новый пост</div>
        <AddNewPostFormRedux onSubmit={onAddPost}/>

        <ul className={s.posts}>
            {postsElement}
        </ul>
    </section>
}

const AddNewPostForm=(props)=>{
    return(
        <form onSubmit={props.handleSubmit} className={s.addPost}>
            <Field component="textarea" name="newPostText"></Field>
            <button>Add new post</button>
        </form>
    )
}

let AddNewPostFormRedux=reduxForm({
    form:"ProfileAddNewPostForm"
})(AddNewPostForm)

export default MyPosts;