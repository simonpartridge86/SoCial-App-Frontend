import './App.css';
import React from 'react';
import {useState} from 'react';
/////////////////////////////////// 

import Header from '../Header';
import EventForm from '../EventForm';
import EventList from '../EventList';
import Button from '../Button';

//////////////////////////////////

const testData = [
  {
    id: 1,
    event_title: "Funtimes with Matt",
    event_description: "Informal debauchery in the back-end",
    date: "2022-06-22",
    time_start: "17:00:00",
    time_end: "18:00:00",
    social_link: "https://meet.google.com/hfu-deqq-sii",
    attending_count: 152,
    status: true,
  },
  {
    id: 2,
    event_title: "Simon's Low Key Moan Sess",
    event_description: "Sad faces, sad stories",
    date: "2022-06-23",
    time_start: "19:00:00",
    time_end: "21:00:00",
    social_link: "https://us04web.zoom.us/j/8961811674?pwd=OWtYSU5kRDIvS2RHZ0RWanFheFNmUT09",
    attending_count: 280,
    status: true,
  },
];

//////////////////////////////////

function App() {
  const [events, setEvents] = useState([]);
  function addEventsList() {
    setEvents([...testData])
  }

  return (
    <div className="app">
      <Header className="app-header" />
      <EventForm className="event-form" />
      <Button className="event-submit" onClick={addEventsList} text="Get Events"/>
      <EventList className="event-list" data={events} />
      <Button className="button" text="Placeholder Text"/>
    </div>
  );
}

export default App;