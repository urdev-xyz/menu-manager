import React, { Component } from 'react';
import './MenuItem.css';

class MenuItem extends Component {
    constructor(props)  {
        super(props);

        this.state = {
            displayImg: '',
            ProductName: '',

        }


    }

    render() {
        return (
            <div className={'MenuItem'}>
            
            </div>
        )
    }
}

export default MenuItem;