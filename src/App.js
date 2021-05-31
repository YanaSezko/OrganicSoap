import React, { Component, Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {initializeApp} from "./redux/app-reducer";
import {BrowserRouter, Route, withRouter, Switch, Redirect} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { compose } from 'redux';
import { connect } from 'react-redux';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/redux-store'; 
import {Provider} from "react-redux";
import { withSuspense } from './hoc/withSuspense';

//import DialogsContainer from "./components/Dialogs/DialogsContainer";
//import ProfileContainer from "./components/Profile/ProfileContainer";
//import UsersContainer from "./components/Users/UsersContainer";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));


class App extends Component {
    catchAllUnhandledErrors = (promiseRejectionEvent) =>{
        alert("Some error occured");
    }
    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }
    componentWillUnmount(){
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
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
                <Switch>
                <Route exact path='/'
                     render = {() => <Redirect to={"/profile"} />} />    
                <Route path='/dialogs'
                    render={withSuspense(DialogsContainer)}/>
                <Route path='/profile/:userId?'
                     render={withSuspense(ProfileContainer)}/>
                <Route path='/users' 
                     render={withSuspense(UsersContainer)}/>
                <Route path='/login' render={() => <Login/>}/>
                <Route path='*' render={() => <div>404 NOT FOUND</div>}/>    
                </Switch>
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
    return <BrowserRouter /* basename = {process.env.PUBLIC_URL} */>
    <Provider store={store}>
        <AppContainer/>
    </Provider>
</BrowserRouter>
}

export default SoapJSApp;