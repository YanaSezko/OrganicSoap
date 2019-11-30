let rerenderEntireTree=()=>{
    console.log('State chenged');
}


let state = {
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Yo'},
        ],
        dialogs: [
            {id: 1, name: 'Yana'},
            {id: 2, name: 'Olya'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Vasya'},
            {id: 5, name: 'Sasha'},

        ]
    },
    mainPage:{
        posts: [
            {id: 1, message: 'это мой первый пост', likesCount: 20},
            {id: 2, message: 'это мой второй пост', likesCount: 33}
        ],
        newPostText:'natural-soap'
    }
}

export const addPost = (postMess) => {
       let newPost = {
        id:3,
        message:postMess,
        likesCount:0
    };
    state.mainPage.posts.push(newPost);
    rerenderEntireTree(state);

}

export const updateNewPostText = (newText) => {
    state.mainPage.newPostText=newText;
    rerenderEntireTree(state);

}

export const subscribe=(observer)=>{
rerenderEntireTree=observer;
}

export default state;