import React from 'react';
import './professional.styles.scss';
import { Chart } from "react-google-charts";
import { CAREER_TIMELINE } from './professional.data';
import { Fade } from 'react-reveal';


const ProfessionalPage = () => (
            <div id="exp" className="professional page">
                <Fade bottom> 
                    <h2>Professional Summary</h2>
                </Fade>
                
                <Fade bottom>
                    <div className="exp-chart">
                            <Chart
                            width={'100%'}
                            height={'300px'}
                            chartType="Timeline"
                            loader={<div>Loading Chart</div>}
                            data={CAREER_TIMELINE}
                            options={{
                                timeline: {
                                groupByRowLabel: false,
                                },
                            }}
                            rootProps={{ 'data-testid': '4' }}
                            />
                        </div>
                        </Fade>
            </div>
        )

export default ProfessionalPage;