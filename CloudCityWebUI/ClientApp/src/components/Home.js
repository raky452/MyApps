import React, { Component } from 'react';

export class Home extends Component {
    displayName = Home.name

    render() {
        return (
            <div>
                <h1>Hello User!</h1>
                <p>In Clagrad, we focus on AI&VR research field</p>
                <p>Our goal is to reinvent the AI wheel with ML & VR :</p>
                <ul>
                    <li><strong>Local Positioning System</strong>. In LPS, We would like to solve the issue with GPS for accuracy based systems.</li>
                    <li><strong>VR Gamerz Studio</strong>. Real world gamerz studio setup by using Clagrad's LPS and advance VR systems.</li>
                    <li><strong>Agriculature Automation</strong>. Increasing agricultural productivity by using Clagrad's AI&LPS systems for automation.</li>
                </ul>
                <p>For updates, please follow us on <strong><a href="https://twitter.com/clagrad" target="_blank">Twitter</a></strong> or <strong><a href="https://www.facebook.com/cla.grad.9" target="_blank">Facebook</a></strong>...</p>
            </div>
        );
    }
}
