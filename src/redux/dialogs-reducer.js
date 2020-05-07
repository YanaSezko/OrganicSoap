/* const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'; */
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
           return {
                ...state,
                messages: [...state.messages, {id: 4, message: body}]
            };

        default:
            return state;
    }

}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;