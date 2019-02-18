import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Toolbar from './components/Toolbar/Toolbar';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

import Dashboard from './components/Pages/Dashboard/Dashboard';
import Analytics from './components/Pages/Analytics/Analytics';
import MenuEditor from './components/Pages/Dashboard/Dashboard';
import Messages from './components/Pages/Analytics/Analytics';
import Notifications from './components/Pages/Dashboard/Dashboard';
import Settings from './components/Pages/Analytics/Analytics';
import Support from './components/Pages/Dashboard/Dashboard';



class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      page: this.props.match.params.page,
    }
  }

  render() {

    let page;

    if (this.state.page === 'dashboard') { page = <Dashboard/> }
    else if (this.state.page === 'analytics') { page = <Analytics/> }
    else if (this.state.page === 'analytics') { page = <MenuEditor/> }
    else if (this.state.page === 'analytics') { page = <Messages/> }
    else if (this.state.page === 'analytics') { page = <Notifications/> }
    else if (this.state.page === 'analytics') { page = <Settings/> }
    else if (this.state.page === 'analytics') { page = <Support/> }

    return (
      <div className="App">
            <Navbar/>
            <Toolbar/>
            <Content>
                {page}
            </Content>
            <Footer/>
      </div>
    );
  }
}

export default App;
