import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Image } from 'semantic-ui-react';
import load from '../../../assets/img1.jpg';
import Nav from '../../shared/views/Nav';
import Foot from '../../shared/views/Foot';


export default class Home extends Component{
    render(){
        const requesters = [
            {
                logo: "https://picsum.photos/300/200",
                name: "Deep Patel",
                desc: "Explained things weddings wife child. Weather spirit alteration opinion arose country smallest terms sex west recurred highest taken collecting."
            },
            {
                logo: "https://picsum.photos/300/200",
                name: "Shrutika Rahatekar",
                desc: "Graceful marianne given. Taken or in months plan meet basket steepest increasing are full still. Fond this explain rapturous early expenses attended ourselves after hand snug parish sitting."
            },
            {
                logo: "https://picsum.photos/300/200",
                name: "Devika Bhadja",
                desc: "Object acuteness spot produced besides justice to kept contrasted. Steepest side dried party removed margaret hung strangers concluded open often."
            },
            {
                logo: "https://picsum.photos/300/200",
                name: "Riddhi Rathod",
                desc: "Sang dwelling account sportsman chiefly feebly went possible. Service raising viewing detract screened has around regret along agreement body anxious society either delighted temper between."
            },
            {
                logo: "https://picsum.photos/300/200",
                name: "Jack Paul",
                desc: "Friends sincerity incommode servants fond expense pleasant wish into cousins out rapid perceive. Cannot tried kept other friendly unlocked trees woman chamber projecting fifteen to before. "
            },
            {
                logo: "https://picsum.photos/300/200",
                name: "Sam Smith",
                desc: " Barton therefore early ashamed. Supported sister oppose of prevailed quitting rapturous. Eagerness rapturous seemed or abroad allow state screened five bachelor existence more moonlight."
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
                    <div className="req-list"   >
                        {displayRequesters}
                    </div>
                </Container>
                {/* Using Footer */}
                <Foot />
            </div>
        )
    }
}