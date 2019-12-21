import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";



const Dialogs = (props) => {

    let state= props.store.getState().dialogsPage;

    let dialogsElement = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElement = state.messages.map(m => <Message message={m.message} id={m.id}/>);

    let newMessageBody = state.newMessageBody;


    let onSendMessageClick=()=>{
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange=(event)=>{
        let body = event.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (<>
       <div className={s.dialogs}>
            <ul className={s.dialogsItems}>
                {dialogsElement}
            </ul>
            <ul className={s.messages}>
                {messagesElement}
            </ul>
        </div>
            <div>
                <textarea value={newMessageBody} onChange={onNewMessageChange} placeholder='Enter your message'></textarea>
                <button onClick={onSendMessageClick}>Send</button>
            </div>
        </>
    )
}
export default Dialogs;