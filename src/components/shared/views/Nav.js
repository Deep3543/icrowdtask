import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Menu } from 'semantic-ui-react';

export default class Nav extends Component{
    render(){
        return(
            <div>{
                <Menu className='header-menu' style={{borderRadius: "0", background: "#6040bf", border: "none"}}>
                    <Menu.Item position="left">
                        {/* For logo */}
                        <Link to={'/'}><strong style={{fontSize: '26px', color: 'white'}}>iCrowdTask</strong></Link>
                    </Menu.Item>
                        {/* For navigation list */}
                        <div class="nav-menu">
                            <ul className="nav-list">
                                <li><a>How it Works</a></li>
                                <li className="selected"><a>Requesters</a></li>
                                <li><a>Workers</a></li>
                                <li><a>Pricing</a></li>
                                <li><a>About</a></li>
                            </ul>
                        </div>
                    <Menu.Item position="right">
                            {/* For Sign In button */}
                            <a className="ui button">Sign In</a>
                    </Menu.Item>
                </Menu>
            }</div>
        )
    }
}