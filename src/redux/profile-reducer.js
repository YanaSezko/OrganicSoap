const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_MAIN_PROFILE = 'SET_MAIN_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'это мой первый пост', likesCount: 20},
        {id: 2, message: 'это мой второй пост', likesCount: 33}
    ],
    newPostText: 'natural-soap',
    profile:null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText : ''
            };
        }
        case 'UPDATE-NEW-POST-TEXT': {
           return  {
               ...state,
               newPostText: action.newText
           };
        }
        case 'SET_MAIN_PROFILE': {
           return  {
               ...state,
               profile: action.profile
           };
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const setMainProfile = (profile) => ({type: SET_MAIN_PROFILE, profile })
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;