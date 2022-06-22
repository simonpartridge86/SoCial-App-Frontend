import Button from "../Button";
import {useState} from 'react';


function EventForm({addEvent}) {
  const [eventObject, setEventObject] = useState({
    event_type: "Social",
    event_description: "",
    event_author: "",
    social_link: "",
    date: "",
    time_start: "",
    time_end: "",
  })

  function handleType(e){
    setEventObject({...eventObject, event_type: e.target.value})
    //console.log(e.target.value)
  }

  function handleDescription(e){
    setEventObject({...eventObject, event_description: e.target.value})
    //console.log(e.target.value)
  }

  function handleAuthor(e){
    setEventObject({...eventObject, event_author: e.target.value})
    //console.log(e.target.value)
  }

  function handleDate(e){
    const selectedDate = new Date(e.target.value);
    const now = new Date();
    const nowFormatted = new Date(now.toDateString())
    const selectedDateFormatted = new Date(selectedDate.toDateString())
    // console.log(selectedDate)
    // console.log(now)
    // console.log(selectedDateFormatted)
    // console.log(nowFormatted)
    if(selectedDateFormatted < nowFormatted){
      alert("Selected date is in the past")
      setEventObject({...eventObject, date: ""})
    } else {
      const eventDate = selectedDate.toDateString();
      setEventObject({...eventObject, date: eventDate})
    }
  }

  function handleTimeStart(e){
    setEventObject({...eventObject, time_start: e.target.value})
    //console.log(e.target.value)
  }

  function handleTimeEnd(e){
    setEventObject({...eventObject, time_end: e.target.value})
    //console.log(e.target.value)
  }

  function handleLink(e){
    setEventObject({...eventObject, social_link: e.target.value})
    //console.log(e.target.value)
  }

  function onSubmit(e){
    e.preventDefault();
    console.log(eventObject);
    addEvent(eventObject);
    setEventObject({
      event_type: "Social",
      event_description: "",
      event_author: "",
      social_link: "",
      date: "",
      time_start: "",
      time_end: "",
    });
  }

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <label htmlFor="event-type">Event type:</label>
      <select className="event-type" id="event-type" onChange={(e)=>{handleType(e)}} value={eventObject.event_type} required>
        <option value="Social">Social</option>
        <option value="Coding Help">Coding Help</option>
        <option value="Course Chat">Course Chat</option>
        <option value="Games Session">Games Session</option>
      </select>
      <input type="text" className="event-description" id="event-description" placeholder="Add event description" onChange={(e)=>{handleDescription(e)}} value={eventObject.event_description} required></input>
      <input type="text" className="event-author" id="event-author" placeholder="Event host name" onChange={(e)=>{handleAuthor(e)}} value={eventObject.event_author} required></input>
      <label htmlFor="date-selector">Select date:</label>
      <input type="date" className="date-selector" id="date-selector" onChange={(e)=>{handleDate(e)}} required></input>
      <label htmlFor="time-start">Start:</label>
      <input type="time" className="time-start" id="time-start" onChange={(e)=>{handleTimeStart(e)}} value={eventObject.time_start} required></input>
      <label htmlFor="time-start">End:</label>
      <input type="time" className="time-end" id="time-end" onChange={(e)=>{handleTimeEnd(e)}} value={eventObject.time_end} required></input>
      <input type="url" className="social-link" id="social-link" onChange={(e)=>{handleLink(e)}} placeholder="Paste meeting link/URL here" value={eventObject.social_link} required></input>
      <Button className="form-button" text="Submit"/>
    </form>
  );
}
  
export default EventForm;