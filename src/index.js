import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import Navbar from './components/Navbar/Navbar';
import Toolbar from './components/Navbar/Navbar';
import Content from './components/Navbar/Navbar';
import Footer from './components/Navbar/Navbar';
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Navbar/>
            <Toolbar/>
            <Content>
                <Route exact path='/' component={App}/>
                <Route path='/roster' component={App}/>
                <Route path='/schedule' component={App}/>
            </Content>
            <Footer/>
        </Switch>
    </BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
