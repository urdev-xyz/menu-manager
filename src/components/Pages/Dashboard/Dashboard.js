import React, { Component } from 'react';
import MenuItem from '../../MenuItem/MenuItem';

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <section>
          <h2>Top Preformers</h2>
          <MenuItem/>
        </section>
      </div>
    );
  }
}

export default Dashboard;
