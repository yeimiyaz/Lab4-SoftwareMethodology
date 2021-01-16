import React from 'react';
import {render, screen} from '@testing-library/react'
import Student from './Student';
import mockData from './mockData'

describe ('Student test', () =>{
 it('should show name of students', ()=>{
     render(<Student students={mockData}/>);
     mockData.forEach((d)=>expect(screen.getByText(d.name)).toBeInTheDocument());         
     });
 });