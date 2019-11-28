import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {
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
    let dialogsElement = dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElement = messages
        .map(m => <Message message={m.message} id={m.id}/>);

    return (
       <div className={s.dialogs}>
            <ul className={s.dialogsItems}>
                {dialogsElement}
            </ul>
            <ul className={s.messages}>
                {messagesElement}
            </ul>
        </div>
    )
}
export default Dialogs;