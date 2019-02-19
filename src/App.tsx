import React from 'react';
import { ExperienceBlock, IExperienceBlock } from './components/ExperienceBlock';
import { Entry } from './components/Entries';
import data from './data';
import './App.css'
import { Hero } from './components/Hero';

const App = (props: any) => (
  <div className="Container">
    <Hero />
    {data.map(job => (
      <ExperienceBlock company={job.company} city={job.city} role={job.role} from={job.from} to={job.to}>
        {job.children.map(entry => <Entry>{entry}</Entry>)}
      </ExperienceBlock>
    ))}
  </div>
);

export default App;
