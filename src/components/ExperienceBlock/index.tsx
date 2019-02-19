import * as React from 'react';
import { Entries } from '../Entries';
import { Header, Duration, IHeader, IDuration } from '../Header';

export interface IExperienceBlock extends IHeader, IDuration {
  children: any[];
}

export const ExperienceBlock = (props: IExperienceBlock ) => (
  <>
  <Header company={props.company} city={props.city} role={props.role} from={props.from} to={props.to} />
  <Entries>
    {props.children}
  </Entries>
  </>
)