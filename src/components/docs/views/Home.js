import React, { Component } from 'react';
import { Container, Image } from 'semantic-ui-react';
import faker from 'faker';
import load from '../../../assets/img1.jpg';
import Nav from '../../shared/views/Nav';
import Foot from '../../shared/views/Foot';


export default class Home extends Component{
    render(){
        const requesters = [
            {
                logo: faker.image.avatar(),
                name: faker.name.findName(),
                desc: faker.lorem.lines(3)
            },
            {
                logo: faker.image.avatar(),
                name: faker.name.findName(),
                desc: faker.lorem.lines(3)
            },
            {
                logo: faker.image.avatar(),
                name: faker.name.findName(),
                desc: faker.lorem.lines(3)
            },
            {
                logo: faker.image.avatar(),
                name: faker.name.findName(),
                desc: faker.lorem.lines(3)
            },
            {
                logo: faker.image.avatar(),
                name: faker.name.findName(),
                desc: faker.lorem.lines(3)
            },
            {
                logo: faker.image.avatar(),
                name: faker.name.findName(),
                desc: faker.lorem.lines(3)
            },
        ]

        const displayRequesters = requesters.map((requester, index) =>
        <div key={requester.name + index} className="req">
            <img src={requester.logo} alt={`${requester.name}`} className="req-img" />
            <h3 className="req-name">{requester.name}</h3>
            <p className="req-desc">{requester.desc}</p>
        </div> 
        )
        return(
            <div>
                {/* Using Navigation Menu */}
                <Nav />
                <Container className="margin-top-42">
                    <div className="load-img">
                        {/* Loading Image */}
                        <Image src={load} />
                    </div>
                </Container>
                <Container>
                    {/* Featured Requesters */}
                    <div style={{width: '100%'}}>
                        <h1 className="req-title" style={{marginTop: '20px'}}>Featured Requesters</h1>
                    </div>
                    <div className="req-list">
                        {displayRequesters}
                    </div>
                </Container>
                {/* Using Footer */}
                <Foot />
            </div>
        )
    }
}