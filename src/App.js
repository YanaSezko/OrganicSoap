import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
     return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path='/main' render={() => <Main store={props.store}/>}/>
                <Route path='/dialogs' render={() => <DialogsContainer store={props.store} />}/>
            </div>
        </div>
    );
}

export default App;
