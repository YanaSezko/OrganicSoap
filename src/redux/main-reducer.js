const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'это мой первый пост', likesCount: 20},
        {id: 2, message: 'это мой второй пост', likesCount: 33}
    ],
    newPostText: 'natural-soap'
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case 'UPDATE-NEW-POST-TEXT': {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default mainReducer;