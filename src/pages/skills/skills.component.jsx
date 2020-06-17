import React from 'react';
import './skills.styles.scss';
import { SKILL_DATA } from './skills.data';
import { Fade } from 'react-reveal';


const SkillsPage = () => (
    <div id="skills" className="skills page">
        <Fade bottom>
            <h2>Skills</h2>
        </Fade>

        <div className="skill-bar">
        
            {
                SKILL_DATA.map((item) => (
                    <Fade key={item.id} bottom duration={500}>
                        <div className="skill-container" >
                            <p>{item.skill}</p>
                            <Fade left>
                                <div className="skills" style={{width: `${item.per}`}}>{item.per}</div>
                            </Fade>
                        </div>
                    </Fade>
                ))
            }
        </div>
    </div>
);

export default SkillsPage;