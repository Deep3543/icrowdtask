import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Menu } from 'semantic-ui-react';

export default class Nav extends Component{
    render(){
        return(
            <div>{
                <Menu className='header-menu' style={{borderRadius: "0", background: "#6040bf", border: "none"}}>
                    <Menu.Item>
                        {/* For logo */}
                        <Link to={'/'}>iCrowdTask</Link>
                    </Menu.Item>
                    <Menu.Item>
                        {/* For navigation list */}
                        <div class="ui link list">
                            <a className="item">How it Works</a>
                            <div className="active item">Requesters</div>
                            <a className="item">Workers</a>
                            <a className="item">Pricing</a>
                            <a className="item">About</a>
                        </div>
                    </Menu.Item>
                    <Menu.Item>
                        {/* For Sign In button */}
                        <a className="ui button">Sign In</a>
                    </Menu.Item>
                </Menu>
            }</div>
        )
    }
}