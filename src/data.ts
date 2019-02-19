import { IExperienceBlock } from "./components/ExperienceBlock";

const data: IExperienceBlock[] = [
{
  company: "IPSoft",
  city: "New York, NY",
  role: "UI/UX Technical Lead",
  from: "August 2017",
  to: "August 2018",
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
},
{
  company: 'Rethink Autism',
  role: 'Full Stack Engineer',
  city: 'New York, NY',
  from: 'March 2017',
  to: 'June 2017',
  children: [
    "Completely rebuilt the public facing pages to use Angular components, RESTful endpoints to retrieve and update data, and generally move towards a more modern architecture",
    "Guided the existing team through a tooling upgrade: new SCM strategy, new IDE version and tooling, and began process of implementing a CI/CD pipeline",
    "Daily use of WebAPI, MVC.NET, SQL Server, AngularJS, and HighCharts",
    "Implemented full site search with autocomplete, by writing a site crawler and integrating with Algolia",
    "Major UI and readability changes to graphs in dashboards and user facing reporting",
    "Frequently refactored legacy code to follow separation of concerns, remove obsolete libraries, reduce NIH syndrome, etc.",
    "Built first team components with Entity Framework, and began migrating site to dotnet core"
  ]
},
{
  company: "Apprenda LLC",
  from: "September 2015",
  to: "February 2017",
  city: "New York, NY",
  role: "Software Engineer",
  children: [
    "Led a project to perform in-place, zero-downtime upgrades of the Apprenda platform, collaborating with nearly a dozen engineers in addition to dedicated QA, Product, and Documentation personnel",
    "Led a project to create a central hub for logs/environmental instrumentation of test server networks using the ELK stack and Docker/docker-compose",
    "Utilize Vagrant, Packer, and Chef to spin up user-defined multi-node environments for testing our Platform-as-a-Service directly on a developer's machine, shortening a 24 hour build-test cycle to 20 minutes",
    "Wrote MSI installation packages (and a new build process around them) to install critical Apprenda services",
    "Product owner for multiple critical tools, such as a command line client for interacting with and scripting the platform, a tool for bulk loading data (users, subscriptions, applications) into the platform, and our mission-critical, failure-tolerant Installer/Upgrader/Uninstaller desktop application (which has more than 150,000 LOC)",
    "Work in Ruby, Go, Python, C#, Bash, Scala, and Powershell"
  ]
},
{
  company: "QueBIT Consulting LLC",
  from: "March 2013",
  to: "September 2015",
  city: "New York, NY",
  role: "Full Stack Engineer",
  children: [
    "Massively refactored the existing 12,000 line code base by encapsulating common code, removing unused historical functions, and splitting large classes to clarify and simplify program flow",
    "Utilized XML comments to improve error handling, swap out the logger, and enhance productivity when referencing existing functions",
    "Improved data load speed by 250+ times by using batch data pulling to reduce the number of roundtrips over the network/to TM1",
    "Implemented Change-awareness flags across the entire object model to only save deltas which increased data save speed by 100+ times",
    "Improved user experience by using WPF Databinding, gathering customer feedback, and by utilizing better error handling to provide users a clearer and more concise description of steps necessary to remediate problems",
    "Served as primary point of contact for ReportWORQ to provide assistance to customers during outages, gather feedback/implement potential improvements, and manage client expectations",
    "Collaborated with another developer to write a data layer, using the Factory pattern, to read OpenXML (.xlsx) files",
    "Developed a future-proof design to allow for reading from any Workbook source such as Google Docs, Apple Numbers, OpenOffice (Factory took a Provider, Provider implemented Interface of reading methods)",
    "Heavily modified existing Excel Expression evaluator, an Expression-to-C# compiler (rebuilt parsing and AST creation, modified AST evaluation, fixed serious",
    "Reworked Abstract Syntax Tree creation, transversal logic, replaced expression parsing with a third party library to avoid faulty in-house parser efficiently, and removed deprecated logical nodes",
    "Implemented conversion of WebWORQ object model to DotNetHighCharts API object model to allow for real-time charting of customer reporting data",
    "Extended DotNetHighCharts API to produce HighMaps in JavaScript",
    "Configured JMeter to stress test, analyze, and report on web page performance under arbitrary loads to ensure Nielsen Ratings could provide an acceptable user experience with their existing hardware configuration with 2,000+ concurrent TM1 users",
    "Reverse engineered the method flow of TM1Web, to spoof authentication, manipulate data, request specific pages based on user input, and log out, while analyzing performance of each step",
    "Extended the built-in capabilities of JMeter by using batch scripting and TM1 cache invalidation (non-trivial) using TurboIntegrator scripting"
  ]
}];


export default data;