import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
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
            ],
            newMessageBody:""
        },
        profilePage: {
            posts: [
                {id: 1, message: 'это мой первый пост', likesCount: 20},
                {id: 2, message: 'это мой второй пост', likesCount: 33}
            ],
            newPostText: 'natural-soap'
        }
    },
    _callSubscriber() {
        console.log('State chenged');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage= profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;