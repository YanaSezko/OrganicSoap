import React from 'react';
import profileReducer, { addPostActionCreator } from './profile-reducer';
 
let state = {
    posts: [
        {id: 1, message: 'это мой первый пост', likesCount: 20},
        {id: 2, message: 'это мой второй пост', likesCount: 33}
    ]
  };

it('lenght of posts should be incremented', () => {
    //1.входные данные
 let action=addPostActionCreator("New Post");
   //2.действие (action)
 let newState=profileReducer(state,action);
  //3. ожидание (expectation) 
  expect (newState.posts.length).toBe(3);
});

it('message of newpost should be correct', () => {
    //1.входные данные
 let action=addPostActionCreator("New Post");
   //2.действие (action)
 let newState=profileReducer(state,action);
  //3. ожидание (expectation) 
  expect (newState.posts[2].message).toBe("New Post");
});
