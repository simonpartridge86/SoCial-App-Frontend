import "./App.css";
import React from "react";
import { useState, useEffect } from "react";

///////////////////////////////////

import Header from "../Header";
import EventForm from "../EventForm";
import EventList from "../EventList";
import Button from "../Button";

//////////////////////////////////

function App() {
  const URL = "https://social-app-backend-production.up.railway.app";

  const [events, setEvents] = useState([]);
  const [formVisibility, setFormVisibility] = useState(false);

  ///////////////////////////////////////

  async function getEvents() {
    const response = await fetch(`${URL}/events`);
    const data = await response.json();
    //console.log(data.payload);
    setEvents(data.payload);
  }

  async function postEvent(eventObject) {
    const response = await fetch(`${URL}/events`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventObject),
    });
    const data = await response.json();
    //console.log(data.payload);
    setEvents(data.payload);
    setFormVisibility(false);
  }

  //useEffect is used to fetch current events data from back-end after initial page load
  useEffect(() => {
    getEvents();
  }, []);

  ////////////////////////////////////////

  return (
    <div className="app">
      <Header className="app-header" />
      {formVisibility === false ? (
        <Button
          className="form-vis"
          onClick={() => {
            setFormVisibility(true);
          }}
          text="Create Event"
        />
      ) : (
        <EventForm className="event-form" postEvent={postEvent} />
      )}
      <EventList className="event-list" data={events} setEvents={setEvents} />
      <h1 className="team-name"> &copy; team mishMash</h1>
    </div>
  );
}

export default App;
