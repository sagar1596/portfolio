import React from 'react';
import './homepage.styles.scss';
import { HOMEPAGE_TEXT } from './homepage.data';

import { Card } from 'react-bootstrap';
import { LightSpeed, Zoom } from 'react-reveal';

import CustomButton from '../../components/custom-button/custom-button.component';


const HomePage = (props) => (
            <div id="home" className="homepage page">
                <Card className="bg-custom text-white p-4">
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
                        <CustomButton onClick={props._handleContactClick}>Contact Me</CustomButton>
                    </Zoom>
                </Card>
            </div>
        )


export default HomePage;