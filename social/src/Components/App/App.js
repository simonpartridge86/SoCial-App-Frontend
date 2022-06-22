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
  const [events, setEvents] = useState([
    {
      id: 1,
      event_type: "Social",
      event_description: "Informal debauchery in the back-end",
      event_author: "Matt",
      date: "2022-06-22",
      time_start: "17:00:00",
      time_end: "18:00:00",
      social_link: "https://meet.google.com/hfu-deqq-sii",
      attending_count: 152,
      status: true,
    },
    {
      id: 2,
      event_type: "Course Chat",
      event_description: "Sad faces, sad stories",
      event_author: "Simon",
      date: "2022-06-23",
      time_start: "19:00:00",
      time_end: "21:00:00",
      social_link: "https://us04web.zoom.us/j/8961811674?pwd=OWtYSU5kRDIvS2RHZ0RWanFheFNmUT09",
      attending_count: 280,
      status: true,
    },
  ]);

  function addEvent(object){
    setEvents([...events, object]);
  }

  return (
    <div className="app">
      <Header className="app-header" />
      <EventForm className="event-form" addEvent={addEvent} />
      <EventList className="event-list" data={events} />
    </div>
  );
}

export default App;