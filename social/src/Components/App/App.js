import './App.css';
import React from 'react';
import {useState} from 'react';
/////////////////////////////////// 

import Header from '../Header';
import EventForm from '../EventForm';
import EventList from '../EventList';
import Button from '../Button';

//////////////////////////////////

function App() {
  return (
    <div className="app">
      <Header className="app-header" />
      <EventForm className="event-form" />
      <Button className="event-submit" />
      <EventList className="event-list" />
      <Button className="launch" />
    </div>
  );
}

export default App;
