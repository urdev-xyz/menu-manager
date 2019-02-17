import React, { Component } from 'react';
import './Toolbar.css';

class Toolbar extends Component {
  render() {
    return (
      <div className="Toolbar">
        <ul>
          <a href='/app/dashboard'><li>Dashboard</li></a>
          <a href='/app/analytics'><li>Analytics</li></a>
          <a href='/app/menueditor'><li>Menu Editor</li></a>
        </ul>
        <ul>
          <a href='/app/menueditor'><li>Messages</li></a>
          <a href='/app/menueditor'><li>Notifications</li></a>
        </ul>
        <ul>
          <a href='/app/dashboard'><li>Settings</li></a>
          <a href='/app/analytics'><li>Contact Support</li></a>
        </ul>
      </div>
    );
  }
}

export default Toolbar;
