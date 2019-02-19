import React from 'react';
import { ExperienceBlock, IExperienceBlock } from './components/ExperienceBlock';
import { Entry } from './components/Entries';
import data from './data';
import './App.css'

const App = (props: any) => (
  <div className="Container">
  {data.map(job => (
    <ExperienceBlock company={job.company} city={job.city} role={job.role} from={job.from} to={job.to}>
      {job.children.map(entry => <Entry>{entry}</Entry>)}
    </ExperienceBlock>
  ))}
  </div>
);

export default App;
