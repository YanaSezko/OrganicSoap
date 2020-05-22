import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {initializeApp} from "./redux/app-reducer";
import {Route, withRouter} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { compose } from 'redux';
import { connect } from 'react-redux';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/redux-store'; 
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

render() {
    if (!this.props.initialized){
    return <Preloader/>  
    }

    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/login' render={() => <Login/>}/>    
            </div>
        </div>
    );
}
}

const mapStateToProps = (state) => ({
    initialized:state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const  SoapJSApp = (props) => {
    return <BrowserRouter>
    <Provider store={store}>
        <AppContainer/>
    </Provider>
</BrowserRouter>
}

export default SoapJSApp;