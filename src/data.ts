import { IExperienceBlock } from "./components/ExperienceBlock";

const data: IExperienceBlock[] = [{
  company: "IPSoft",
  city: "New York, NY",
  role: "UI/UX Technical Lead",
  from: "August 2011",
  to: "September 2020",
  children: [
    "Engineer a chat application for customer service via AI, in React/Redux",
    "Manage projects and priorities using SCRUM for a team of 5 front-end developers",
    "Reduced build time from 7 minutes to 12 seconds by rebuilding build process with Webpack and Babel",
    "Create new user interface components like pie charts, data masking, and action buttons",
    "Rebuilt Bamboo CI/CD pipeline, streamlined merge -> build -> release -> deployment process",
    "Created reproducible builds with Yarn and a new set of team version management rules",
    "Work with clients and internal stakeholders to create roadmaps, groom feature set, and change our development cycles to better meet their needs",
    "Made user interface client-customizable, eliminating the need for separate per-client builds and allowing developers to do development instead of operations",
  ]
}];

export default data;