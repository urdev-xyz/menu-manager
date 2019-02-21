import React, { Component } from 'react';
import MenuItem from '../../MenuItem/MenuItem';
import './Dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <section>
          <h2>Top Preformers</h2>
          <div className='horizontal-row'>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
          </div>
        </section>
      </div>
    );
  }
}

export default Dashboard;
