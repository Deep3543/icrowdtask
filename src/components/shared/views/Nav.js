import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default class Nav extends Component{
    render(){
        return(
            <div>{
                <Menu className='header-menu' style={{borderRadius: "0", background: "#6040bf", border: "none"}}>
                    <Menu.Item>
                        {/* For logo */}
                    </Menu.Item>
                    <Menu.Item>
                        {/* For navigation list */}
                    </Menu.Item>
                    <Menu.Item>
                        {/* For Sign In button */}
                    </Menu.Item>
                </Menu>
            }</div>
        )
    }
}