import React from 'react';
import "bootstrap/scss/bootstrap.scss";
import './App.css';
import _ from 'lodash';
import scrollToComponent from 'react-scroll-to-component';
import 'react-bootstrap';

import Navigation from './components/navigation/navigation.component';
import HomePage from './pages/homepage/homepage.component';
import ProfessionalPage from './pages/professional/professional.component';
import SkillsPage from './pages/skills/skills.component';
import WorkPage from './pages/work/work.component';
import ContactPage from './pages/contact/contact.component';
import Footer from './components/footer/footer.component';





class App extends React.Component {
  constructor() {
    super();
    this._homePage = React.createRef();
    this._professionalPage = React.createRef();
    this._skillsPage = React.createRef();
    this._workPage = React.createRef();
    this._contactPage = React.createRef();
    
    this.mainNavLinks = null;

    this.handleContactMeClick = this.handleContactMeClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.doThatThang = this.doThatThang.bind(this);

  }

  handleScroll(e) {
      _.throttle(this.doThatThang, 100);
    
  }

  doThatThang() {
    let fromTop = window.scrollY;

    this.mainNavLinks.forEach(link => {
      let section = document.querySelector(link.hash);

      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  componentDidMount() {
    this.mainNavLinks = document.querySelectorAll(".navbar .navbar-nav a");
    window.addEventListener('scroll', this.handleScroll);
  }

  handleContactMeClick() {
    scrollToComponent(this._contactPage.current);
  }

  render() {

    return (
      <>
        <Navigation />

          <div ref={this._homePage} className="home-container">
            <HomePage _handleContactClick={this.handleContactMeClick} />
          </div>

          <div ref={this._professionalPage} className="professional-container">
            <ProfessionalPage />
          </div>

          <div ref={this._skillsPage} className="skills-container">
            <SkillsPage />
          </div>

          <div ref={this._workPage} className="work-container">
            <WorkPage />
          </div>

          <div ref={this._contactPage} className="about-container">
            <ContactPage />
          </div>

          <Footer />
        
        </>
    );
  }
}


export default App;
