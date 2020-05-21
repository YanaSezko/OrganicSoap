import React from 'react';
import s from "./FormsControls.module.css";
import { Field } from 'redux-form';

const FormsControl=({input,meta:{touched,error},children})=>{
    const hasError=touched && error;
    return(
        <div className={s.formControl +" "+ (hasError ? s.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>)
}

export const Textarea = (props)=>{
    const {input,meta,child, ...restProps} = props;
    return<FormsControl{...props}><textarea {...input}{...restProps}/></FormsControl>
}
export const Input = (props)=>{
    const {input,meta,child, ...restProps} = props;
    return<FormsControl{...props}><input {...input}{...restProps}/></FormsControl>
}

export const createField=(placeholder,name, validators, component, props={}, text="")=>(
<div>
    <Field placeholder={placeholder} 
        name={name} 
        validate={validators}  
        component={component}
        {...props}/>{text}
</div>
)

/* 
export const Textarea = ({input, meta, ...props})=>{
    const hasError=meta.touched && meta.error;
    return(
        <div className={s.formControl +" "+ (hasError ? s.error : "")}>
            <textarea {...input} {...props}/>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}
export const Input = ({input, meta, ...props})=>{
    const hasError=meta.touched && meta.error;
    return(
        <div className={s.formControl +" "+ (hasError ? s.error : "")}>
            <input {...input} {...props}/>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}  */