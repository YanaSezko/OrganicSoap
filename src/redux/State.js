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
        ]
    }
}

export default state;