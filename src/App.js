import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
//import banner from 'banner.jpg';


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/main' render={()=><Main posts={props.posts}/>}/>
                    <Route path='/dialogs' render={()=><Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
