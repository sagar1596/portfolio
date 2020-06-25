import React from 'react';
import './skills.styles.scss';
import { SKILL_DATA } from './skills.data';
import SkillBar from 'react-skillbars';
import { Fade } from 'react-reveal';

const colors = {
    bar: '#948a8a',
    title: {
      text: '#fff',
      fontWeight : 300,
      fontSize: '1.3em',
      background: '#000'
    }
  }

const SkillsPage = () => (
    <div id="skills" className="skills page">
        <Fade bottom>
            <h2>Skills</h2>
        </Fade>

        <div className="skill-bar">
            <SkillBar skills={SKILL_DATA} colors={colors} />
        </div>
    </div>
);

export default SkillsPage;