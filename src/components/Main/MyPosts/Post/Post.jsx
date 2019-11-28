import React from 'react';
import s from './Post.module.css';

const Post =(props)=>{

    return <li className={s.item}><a>{props.message}</a></li>
 }


export default Post;