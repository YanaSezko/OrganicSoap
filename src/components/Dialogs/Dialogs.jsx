import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {

    let dialogsElement = props.state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElement = props.state.messages
        .map(m => <Message message={m.message} id={m.id}/>);

    let newMess=React.createRef();

    let addMess=()=>{
        let text=newMess.current.value;
        alert(text)
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
                <textarea ref={newMess}></textarea>
                <button onClick={addMess}>Add message</button>
            </div>
        </>
    )
}
export default Dialogs;