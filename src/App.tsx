import React from 'react';
import { ExperienceBlock } from './components/ExperienceBlock';
import { Entry } from './components/Entries';
import './App.css'

const App = (props: any) => (
  <div className="Container">
    <ExperienceBlock company="IPSoft" city="New York, NY" role="UI/UX Technical Lead" from="August 2011" to="September 2020">
      <Entry>Engineer a chat application for customer service via AI, in React/Redux</Entry>
      <Entry>Manage projects and priorities using SCRUM for a team of 5 front-end developers</Entry>
      <Entry>Reduced build time from 7 minutes to 12 seconds by rebuilding build process with Webpack and Babel</Entry>
      <Entry>Create new user interface components like pie charts, data masking, and action buttons</Entry>
      <Entry>Rebuilt Bamboo CI/CD pipeline, streamlined merge -> build -> release -> deployment process</Entry>
      <Entry>Created reproducible builds with Yarn and a new set of team version management rules</Entry>
      <Entry>Work with clients and internal stakeholders to create roadmaps, groom feature set, and change our development cycles to better meet their needs</Entry>
      <Entry>Made user interface client-customizable, eliminating the need for separate per-client builds and allowing developers to do development instead of operations</Entry>
    </ExperienceBlock>
  </div>
);

export default App;
