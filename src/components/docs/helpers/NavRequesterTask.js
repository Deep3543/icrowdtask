import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default class NavRequesterTask extends Component{
    render(){
        return(
            <div>{
                <Menu className='header-menu' style={{borderRadius: "0", background: "#6040bf", border: "none"}}>
                    <Menu.Item position="left">
                        {/* For Task Choice */}
                        <div class="nav-menu">
                            <ul className="nav-list">
                                <li><Link className="selected">New Requester Task</Link></li>
                                <li><Link>Worker Task</Link></li>
                            </ul>
                        </div>
                    </Menu.Item>
                </Menu>
            }</div>
        )
    }
}