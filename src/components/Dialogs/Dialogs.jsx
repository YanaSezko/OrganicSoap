import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";



const Dialogs = (props) => {

    let state= props.dialogsPage;

    let dialogsElement = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);

    let messagesElement = state.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>);

    let newMessageBody = state.newMessageBody;


    let onSendMessageClick=()=>{
        props.sendMessage();
    }
    let onNewMessageChange=(event)=>{
        let body = event.target.value;
        props.updateNewMessageBody(body);
    }

if(props.isAuth==false) return <Redirect to={"/login"}/>;

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