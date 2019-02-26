import React from "react";
import "./App.css";
import { Education } from "./components/Education";
import { Entry } from "./components/Entries";
import { ExperienceBlock } from "./components/ExperienceBlock";
import { GithubButton } from "./components/GithubButton";
import { Hero } from "./components/Hero";
import data from "./data";

const App = (props: any) => (
  <div className="Container">
    <Hero />
    <br />
    {data.map((job) => (
      <ExperienceBlock {...job}>
        {job.children.map((entry) => <Entry>{entry}</Entry>)}
      </ExperienceBlock>
    ))}
    <br />
    <Education />
    <div className="ForkMe"><GithubButton link="https://github.com/jb-reefer/resume" /> source for this site :)</div>
  </div>
);

export default App;
