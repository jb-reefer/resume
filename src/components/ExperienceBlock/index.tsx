import * as React from 'react';
import { Entries } from '../Entries';
import { Header, Duration, IHeader, IDuration } from '../Header';

export interface IExperienceBlock extends IHeader, IDuration {
  children: any[];
}

export const ExperienceBlock = (props: IExperienceBlock ) => (
  <>
  <div className="Header">
    <Header company={props.company} city={props.city} role={props.role} />
    <Duration from={props.from} to={props.to} />
  </div>
  <Entries>
    {props.children}
  </Entries>
  </>
)