import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import { Header, Duration } from './components/Header';
import { Entry } from './components/Entries';


configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Individual components', () => {
  it('Renders <Header />', () => {
    const buffer = shallow(<Header company="IPSoft" city="New York, NY" role="UI/UX Technical Lead" from="August 1901" to="July 2090" />);
    console.log(buffer.html());
  });

  it('Renders <Duration />', () => {
    const buffer = shallow(<Duration from="August 1901" to="July 2090" />);
    console.log(buffer.html());
  });

  it('Renders <Entry />', () => {
    const buffer = shallow(<Entry>This is an entry</Entry>);
    console.log(buffer.html());
  });
})

