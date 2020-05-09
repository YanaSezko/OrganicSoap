import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormControls/FormsControls';
import { required, maxLengthCreator } from '../../utils/validators/validators';




const Dialogs = (props) => {

    let state= props.dialogsPage;

    let dialogsElement = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);

    let messagesElement = state.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>);

    let newMessageBody = state.newMessageBody;

    let addNewMessage=(values)=>{
        props.sendMessage(values.newMessageBody);
        
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
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </>
    )
}

const maxLength50=maxLengthCreator(50)

const AddMessageForm=(props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} 
            validate={[required,maxLength50]}
            name="newMessageBody" placeholder="Enter your message"/>
            <button>Send</button>
            </form>
    )
}

const AddMessageFormRedux = reduxForm({
    form: "dialogAddMessageForm"
})(AddMessageForm)

export default Dialogs;