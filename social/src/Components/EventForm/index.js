
import './index.css';
import Button from "../Button";
import {useState} from 'react';

function EventForm({addEvent}) {

  // starting state of the form 
  const [eventObject, setEventObject] = useState({
    type: "Social",
    description: "",
    author: "",
    social_link: "",
    date: "",
    start_time: "",
    end_time: "",
  })

  //////////////////////////////////////////////
  // Below functions store the relevant values from the input boxes of form. They update a new immutable object ready for submission.

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
  // Below function stores the relevant date from the input box of form. They update a new immutable object ready for submission.
  // Dates are being reformatted so they are comparable. If statement stops user entering a date in the past.


  function handleDate(e){
    //ΩateFormatted < nowFormatted){
    //   alert("Selected date is in the past")
    //   setEventObject({...eventObject, date: ""})
    // } else {
    //   const eventDate = selectedDate.toDateString();
      setEventObject({...eventObject, date: e.target.value})

  }

   ////////////////////////////////////////////////
    // Below functions store the relevant values from the input boxes of form. They update a new immutable object ready for submission.


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
  // Default reset once form has been submitted

  function onSubmit(e){
    e.preventDefault();
    const selectedDate = new Date(eventObject.date);
    const now = new Date();
    const nowFormatted = new Date(now.toDateString());
    const selectedDateFormatted = new Date(selectedDate.toDateString());
    if(selectedDateFormatted < nowFormatted){
      alert("Selected date is in the past")
      setEventObject({...eventObject, date: ""})
    } else if (eventObject.start_time > eventObject.end_time){
      alert("Meeting time invalid - start time is after end time");
      setEventObject({...eventObject, start_time: "", end_time: ""})
    } else {
    // addEvent is a function from the app.js which has been passed down through a prop.
    // We give this function the eventObject - this is a piece of state created by the multiple handle functions above.
    addEvent(eventObject);
    setEventObject({
      type: "Social",
      description: "",
      author: "",
      social_link: "",
      date: "",
      start_time: "",
      end_time: "",
    });
    }
  }

  ////////////////////////////////////////////////

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <label htmlFor="event-type">Event type:</label>
      <select className="event-type" id="event-type" onChange={(e)=>{handleType(e)}} value={eventObject.type} required>
        <option value="Social">Social</option>
        <option value="Coding Help">Coding Help</option>
        <option value="Course Chat">Course Chat</option>
        <option value="Games Session">Games Session</option>
      </select>
      <input type="text" className="event-description" id="event-description" placeholder="Add event description" onChange={(e)=>{handleDescription(e)}} value={eventObject.description} required></input>
      <input type="text" className="event-author" id="event-author" placeholder="Event host name" onChange={(e)=>{handleAuthor(e)}} value={eventObject.author} required></input>
      <div className='date-section'>
      <label htmlFor="date-selector">Select date:</label>

  
      <input type="date" className="date-selector" id="date-selector" onChange={(e)=>{handleDate(e)}} value={eventObject.date} required></input>

      <label htmlFor="time-start">Start:</label>
      <input type="time" className="time-start" id="time-start" onChange={(e)=>{handleTimeStart(e)}} value={eventObject.start_time} required></input>
      <label htmlFor="time-start">End:</label>
      <input type="time" className="time-end" id="time-end" onChange={(e)=>{handleTimeEnd(e)}} value={eventObject.end_time} required></input>
      </div>
      
      <input type="url" className="social-link" id="social-link" onChange={(e)=>{handleLink(e)}} placeholder="Paste meeting link/URL here" value={eventObject.social_link} required></input>
      <Button className="form-button" text="Submit"/>
    </form>
  );
}
  
export default EventForm;