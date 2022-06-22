import './App.css';
import React from 'react';
import {useState, useEffect} from 'react';

/////////////////////////////////// 

import Header from '../Header';
import EventForm from '../EventForm';
import EventList from '../EventList';

//////////////////////////////////

function App() {

const localHost = "http://localhost:3001"
// http://localhost:3001/events

const [events, setEvents] = useState([]);

///////////////////////////////////////

async function getEvents() {
  const response = await fetch (`${localHost}/events`);
  const data = await response.json();
  console.log(data.payload);
  setEvents(data.payload);
};


async function postEvent(object){
  const response = await fetch (`${localHost}/events`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(object)
  });
  const data = await response.json();
  console.log(data.payload);
  setEvents(data.payload);
};


// Does use effect need to be async??
useEffect (()=>{
  getEvents();
  console.log("Use Effect Running");
}, []);


////////////////////////////////////////

// add another event from the form submission
  // async function addEvent(object){
  //   setEvents([...events, object]);
  // }


  // // Temporary local data:
  // const [events, setEvents] = useState([
  //   {
  //     id: 1,
  //     event_type: "Social",
  //     event_description: "Informal debauchery in the back-end",
  //     event_author: "Matt",
  //     date: "2022-06-22",
  //     time_start: "17:00:00",
  //     time_end: "18:00:00",
  //     social_link: "https://meet.google.com/hfu-deqq-sii",
  //     attending_count: 152,
  //     status: true,
  //   },
  //   {
  //     id: 2,
  //     event_type: "Course Chat",
  //     event_description: "Sad faces, sad stories",
  //     event_author: "Simon",
  //     date: "2022-06-23",
  //     time_start: "19:00:00",
  //     time_end: "21:00:00",
  //     social_link: "https://us04web.zoom.us/j/8961811674?pwd=OWtYSU5kRDIvS2RHZ0RWanFheFNmUT09",
  //     attending_count: 280,
  //     status: true,
  //   },
  // ]);



  return (
    <div className="app">
      <Header className="app-header" />
      <EventForm className="event-form" addEvent={postEvent} />
      <EventList className="event-list" data={events} />
    </div>
  );
}

export default App;


/////////////////////////////

//PLAN
 // Async Functions needed to put in place for connecting the back end.
  // We need to fetch/GET the database
        // Needs to run when the page loads (useEffect).
        // Use Effect with an empty array to run once at the loading of the app.
        // Needs to run when we post a new event to the form
              // This will need to be linked to the onsubmit action