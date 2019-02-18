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
          <a href='/app/messages'><li>Messages</li></a>
          <a href='/app/notifications'><li>Notifications</li></a>
        </ul>
        <ul>
          <a href='/app/settings'><li>Settings</li></a>
          <a href='/app/support'><li>Contact Support</li></a>
        </ul>
      </div>
    );
  }
}

export default Toolbar;
