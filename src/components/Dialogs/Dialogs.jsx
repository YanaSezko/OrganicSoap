import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {

    let dialogsElement = props.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElement = props.messages
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