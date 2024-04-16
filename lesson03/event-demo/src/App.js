import React, { Component } from 'react'
import VAD_EventForm1 from './components/VAD_EventForm1';
import VAD_EventForm2 from './components/VAD_EventForm2';
import VAD_EventForm3 from './components/VAD_EventForm3';
import VAD_EventForm4 from './components/VAD_EventForm4';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Event Form Demo</h1>
        <VAD_EventForm1/>
        <VAD_EventForm2/>
        <VAD_EventForm3/>
        <VAD_EventForm4 name=" Vũ Anh Dương "/>
      </div>
    );
  }
}
