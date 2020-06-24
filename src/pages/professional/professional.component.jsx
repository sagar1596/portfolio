import React from 'react';
import './professional.styles.scss';
// import { Chart } from "react-google-charts"; // To remove
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import { Fade } from 'react-reveal';


const ProfessionalPage = () => (
            <div id="exp" className="professional page">
                <Fade bottom> 
                    <h2>Professional Summary</h2>
                </Fade>
                
                <Timeline lineColor={'#ddd'}>
  <TimelineItem
    key="001"
    dateText="11/2010 – Present"
    style={{ color: '#76bb7f' }}
    dateInnerStyle={{ background: '#76bb7f' }}
  >
    <h3>Technical Lead, TEKsystems Global Services Pvt. Ltd.</h3>
    <p>
      Working with a client who provides a multi-vendor, multi-domain network automation and
      orchestration solution.
      This solution is based on Venilla Javascript by using ES6 as the base framework and working around it. It
      used ES6 in the front end and NodeJS in the backend with a MongoDB to hold the data.
    </p>
    <ul>
      <li>Responsible and actively involved in the complete technical delivery of the project.</li>
      <li>Requirement gathering with client and taking active part in architectural discussions and playing
    the role of a technical architect.</li>
      <li>Picking up user stories and playing the role of a senior developer and reviewing all code that
    goes through the pipeline to play the role of a lead.</li>
      <li>All development work on this project is done on VanillaJS and nodeJS.</li>
      <li>Mentoring and training the team with the architecture of the application.</li>
    </ul>
  </TimelineItem>
  <TimelineItem
    key="002"
    dateText="06/2014 – 09/2018"
  >
    <h3>Senior Associate Interactive Development L2, Publicis.Sapient</h3>
    <p>
    Worked with multiple clients including Goldman Sachs, LCBO, Michelin, Barnes and Noble, etc.
    </p>
    <ul>
      <li>Providing UI Architecture/Design Solution in AEM 6.3 and IBM WCS</li>
      <li>Participated in requirement grooming and estimations.</li>
      <li>Developed components for the AEM site using slightly templating and ReactJS.</li>
      <li>Working with Dev and Infra team for environment related issues.</li>
      <li>Designing, POC(s) and prototyping.</li>
    </ul>
  </TimelineItem>
  <TimelineItem
    key="003"
    dateText="08/2012 – 05/2014"
  >
    <h3>Senior Technical Associate, Sears Holding India Pvt. Ltd.</h3>
    <ul>
      <li>Interacting with Project Managers and Business Analysts and Business themselves
    and various development teams to create/modify prototypes as per the business
    requirement.</li>
      <li>Worked extensively on the Retail domain to understand and increase sales and user
    experience.</li>
      <li>Designed user interface for web based products as part of the product development
    team.</li>
      <li>Creating and maintaining UI prototypes and specifications</li>
      <li>Designed the front end applications, user interactive (UI) web pages in a professional
    manner with using web technologies like HTML, CSS, Javascript and Jquery 1.9.</li>
      <li>Worked on Web Analytics framework by Site Catalyst namely Omniture to help
    generate Analytics reports for the retail website.</li>
      <li>Worked on HTML5 and CSS3 to develop and assure a good experience to the end
    user.</li>
      <li>Creating cross-browser compatible and standards-compliant CSS-based page
    layouts.</li>
    </ul>
  </TimelineItem>
  <TimelineItem
    key="004"
    dateText="07/2010 – 08/2012"
  >
    <h3>Software Engineer, Cybage Software Pvt. Ltd.</h3>
    <ul>
      <li>Interacting with Project Managers and Business Analysts and Business themselves
    and various development teams to create/modify prototypes as per the business
    requirement.</li>
      <li>Worked extensively on the Retail domain to understand and increase sales and user
    experience.</li>
      <li>Designed the front end applications, user interactive (UI) web pages in a professional
manner with using web technologies like HTML, CSS, Javascript and JQuery.</li>
      <li>Creating and maintaining UI prototypes and specifications</li>
      <li>Fixing Browser compatibility Issues on IE6, 7, 8, FF, Chrome and Safari.</li>
      <li>Worked on ASP.NET MVC to implement Views using dynamic HTML and JQuery.</li>
      <li>Worked with WPF Technology for Windows based applications.</li>
      <li>Implemented image galleries using Javascript Libraries such as Lightbox.</li>
    </ul>
  </TimelineItem>
  <TimelineItem
    key="005"
    dateText="09/2009 – 06/2010"
  >
    <h3>Software Developer, Open Destination Pvt. Ltd</h3>
    <ul>
      <li>Worked extensively on the Travel domain to understand and increase sales and user
    experience.</li>
      <li>Designed the front end applications, user interactive (UI) web pages in a professional
manner with using web technologies like HTML, CSS, Javascript and JQuery.</li>
      <li>Creating and maintaining UI prototypes and specifications</li>
      <li>Fixing Browser compatibility Issues on IE6, 7, 8, FF, Chrome and Safari.</li>
    </ul>
  </TimelineItem>
  <TimelineItem
    key="006"
    dateText="01/2009 – 08/2009"
  >
    <h3>Solutions Developer, Online Productivity Solutions Pvt. Ltd</h3>
    <ul>
      <li>Interacting with Project Managers and Business Analysts and Business themselves
    and various development teams to create/modify prototypes as per the business
    requirement.</li>
      <li>Worked extensively on the Entertainment domain projects.</li>
      <li>Creating and maintaining UI prototypes and specifications</li>
      <li>Fixing Browser compatibility Issues on IE6, 7, 8, FF, Chrome and Safari.</li>
    </ul>
  </TimelineItem>
</Timeline>
            </div>
        )

export default ProfessionalPage;