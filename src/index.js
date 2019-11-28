import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogs = [
    {id: 1, name: 'Yana'},
    {id: 2, name: 'Olya'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Vasya'},
    {id: 5, name: 'Sasha'},

]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Yo'},
]

let posts = [
    {id: 1, message: 'это мой первый пост', likesCount: 20},
    {id: 2, message: 'это мой второй пост', likesCount: 33}
]
ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
