import React from 'react';
import './homepage.styles.scss';

import MetaTags from  'react-meta-tags';

import { HOMEPAGE_TEXT } from './homepage.data';

import { Card } from 'react-bootstrap';
import { LightSpeed, Zoom } from 'react-reveal';

import CustomButton from '../../components/custom-button/custom-button.component';


class HomePage extends React.Component  {

    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return (
            <div id="home" className="homepage page">
                <MetaTags>
                    <title>Homepage - Sagar Bhat</title>
                    <meta name="description" content="Homepage - This is a portfolio site developed by and for Sagar Bhat." />
                    <meta property="og:title" content="Homepage" />
                </MetaTags>
                <Card className="bg-custom text-black p-4">
                    <div className="card-text">
                        <LightSpeed left cascade duration={2000}>
                            <div>
                                <div>{HOMEPAGE_TEXT.line1}<span className="name">{HOMEPAGE_TEXT.name}</span></div>
                                <div>{HOMEPAGE_TEXT.line2}</div>
                                <div>{HOMEPAGE_TEXT.line3}</div>
                            </div>
                        </LightSpeed>
                    </div>
                    <Zoom delay={2000} duration={1000}>
                        <CustomButton onClick={() => this.props.history.push({pathname: "/about"})}>Contact Me</CustomButton>
                    </Zoom>
                </Card>
            </div>
        )
    }
    
}


export default HomePage;