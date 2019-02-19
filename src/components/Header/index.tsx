import * as React from 'react';
import './Header.css';


export interface IDuration {
  from: string;
  to: string;
}

export interface IHeader {
  company: string;
  city: string;
  role: string;
}

export const Header = (props: IHeader) => (
  <div>
    <div className="Subheader">{props.company}</div>
    <div className="Subheader">{props.city}</div>
    <div className="Role">{props.role}</div>
  </div>
);

export const Duration = (props: IDuration) => (
  <div className="Subheader">{props.from} - {props.to}</div>
);

