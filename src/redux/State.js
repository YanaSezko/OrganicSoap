let store={
    _state:{
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
    },
    getState(){
        return this._state;
    },
    _callSubscriber() {
        console.log('State chenged');
    },
    addPost(){
          let newPost = {
            id:3,
            message:this._state.mainPage.newPostText,
            likesCount:0
        };
        this._state.mainPage.posts.push(newPost);
        this._callSubscriber(this._state);

    },
    updateNewPostText(newText) {
        this._state.mainPage.newPostText=newText;
        this._callSubscriber(this._state);

    },
    subscribe(observer){
        this._callSubscriber=observer;
    }

}

export default store;
window.store=store;