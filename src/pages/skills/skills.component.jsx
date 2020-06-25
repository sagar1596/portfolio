import React from 'react';
import './skills.styles.scss';
import MetaTags from 'react-meta-tags';
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

class SkillsPage extends React.Component {

    render() {
        return (
            <div id="skills" className="skills page">
                <MetaTags>
                    <title>Skills - Sagar Bhat</title>
                    <meta name="description" content="Skills - This is a Skill listing page for Sagar." />
                    <meta property="og:title" content="Skills" />
                </MetaTags>
                <Fade bottom>
                    <h2>Skills</h2>
                </Fade>
        
                <div className="skill-bar">
                    <SkillBar skills={SKILL_DATA} colors={colors} />
                </div>
            </div>
        )
    }
}

export default SkillsPage;