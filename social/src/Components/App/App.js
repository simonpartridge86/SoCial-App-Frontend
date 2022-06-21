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
    date: new Date("2022-06-22"),
    time_start: new Date("2022-06-22 17:00:00"),
    time_end: new Date("2022-06-22 18:00:00"),
    social_link: "https://meet.google.com/hfu-deqq-sii",
    status: true,
  },
  {
    id: 1,
    event_title: "Simon's Low Key Moan Sess",
    event_description: "Sad faces, sad stories",
    date: new Date("2022-06-23"),
    time_start: new Date("2022-06-23 19:00:00"),
    time_end: new Date("2022-06-23 21:00:00"),
    social_link: "https://us04web.zoom.us/j/8961811674?pwd=OWtYSU5kRDIvS2RHZ0RWanFheFNmUT09",
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
      <Button className="event-submit" onClick={addEventsList} />
      <EventList className="event-list" data={events} />
      <Button className="launch" />
    </div>
  );
}

export default App;
