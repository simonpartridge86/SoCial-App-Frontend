import './index.css';
import Button from "../Button";
import { useState } from 'react';

function EventForm({postEvent}) {

  // this is the starting state of the form inputs
  const initialEventState = {
    type: "Social",
    description: "",
    author: "",
    social_link: "",
    attendance: 0,
    date: "",
    start_time: "",
    end_time: "",
  };

  const [eventObject, setEventObject] = useState(initialEventState);

  //////////////////////////////////////////////
  // Below functions store the relevant values from the text inputs in EventForm. They update the setEventObject immutably.

  function handleType(e){
    setEventObject({...eventObject, type: e.target.value})
    //console.log(e.target.value)
  }

  function handleDescription(e){
    setEventObject({...eventObject, description: e.target.value})
    //console.log(e.target.value)
  }

  function handleAuthor(e){
    setEventObject({...eventObject, author: e.target.value})
    //console.log(e.target.value)
  }

  //////////////////////////////////////////////
  // Below function stores the date from date input in EventForm. It updates the setEventObject immutably.

  function handleDate(e){
    setEventObject({...eventObject, date: e.target.value})
    //console.log(e.target.value)
  }

  ////////////////////////////////////////////////
  // Below functions store the values from time and URL inputs of EventForm. They update the setEventObject immutably.

  function handleTimeStart(e){
    setEventObject({...eventObject, start_time: e.target.value})
    //console.log(e.target.value)
  }

  function handleTimeEnd(e){
    setEventObject({...eventObject, end_time: e.target.value})
    //console.log(e.target.value)
  }

  function handleLink(e){
    setEventObject({...eventObject, social_link: e.target.value})
    //console.log(e.target.value)
  }

  ////////////////////////////////////////////////
  // onSubmit validates the form inputs, checks that all fields have been completed, and then submits the eventObject to back-end through POST request.

  function onSubmit(e){
    e.preventDefault();

    //code below compares input date with today's date, and rejects form submission if date is in the past
    //and compares start_time and end_time inputs, and rejects submission if start_time is after end_time
    const now = new Date();
    const nowFormatted = new Date(now.toDateString());
    const selectedDate = new Date(eventObject.date);
    const selectedDateFormatted = new Date(selectedDate.toDateString());
    if(selectedDateFormatted < nowFormatted){
      alert("Selected date is in the past")
      setEventObject({...eventObject, date: ""})
    } else if (eventObject.start_time > eventObject.end_time){
      alert("Meeting time invalid - start time is after end time");
      setEventObject({...eventObject, start_time: "", end_time: ""})
    } else {
    // postEvent function runs a POST request using our eventObject (postEvent passed from app.js through props)
    postEvent(eventObject);
    setEventObject(initialEventState);
    }
  }

  ////////////////////////////////////////////////

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <label htmlFor="event-type">Event type:</label>
      <select className="event-selector" id="event-type" onChange={(e)=>{handleType(e)}} value={eventObject.type} required>
        <option value="Social">Social</option>
        <option value="Coding Help">Group Coding</option>
        <option value="Games Session">Games Session</option>
      </select>
      <label htmlFor="event-description">Description:</label>
      <input type="text" className="event-description-input" id="event-description" placeholder="Add event description here" onChange={(e)=>{handleDescription(e)}} value={eventObject.description} required></input>
      <label htmlFor="event-author">Host:</label>
      <input type="text" className="event-author-input" id="event-author" placeholder="Add your name here" onChange={(e)=>{handleAuthor(e)}} value={eventObject.author} required></input>
      <div className='date-section'>
      <label htmlFor="date-selector">Select date:</label>
      <input type="date" className="date-selector" id="date-selector" onChange={(e)=>{handleDate(e)}} value={eventObject.date} required></input>
      <label htmlFor="time-start">Start time:</label>
      <input type="time" className="time-start" id="time-start" onChange={(e)=>{handleTimeStart(e)}} value={eventObject.start_time} required></input>
      <label htmlFor="time-end">End time:</label>
      <input type="time" className="time-end"  id="time-end" onChange={(e)=>{handleTimeEnd(e)}} value={eventObject.end_time} required></input>
      </div>
      <label htmlFor="social-link">Meeting link:</label>
      <input type="url" className="social-link" id="social-link" onChange={(e)=>{handleLink(e)}} placeholder="Paste your meeting link (Zoom/Google/etc) here" value={eventObject.social_link} required></input>
      <span><Button className="form-button" text="Submit"/></span>
    </form>
  );
}
  
export default EventForm;