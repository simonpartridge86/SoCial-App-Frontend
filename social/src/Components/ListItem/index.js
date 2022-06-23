import './index.css';
import Button from "../Button";
import Image from "../EventImage";

const localHost = "http://localhost:3001";

function ListItem({data, setEvents}) {
  const eventDate = new Date(data.date);
  const formattedDate = eventDate.toDateString();

  async function handleCheck(e, id){
    console.log(id);
    var object = {};
    if(e.target.checked){
      console.log("checked")
      object = {change: true};
    } else {
      console.log("unchecked")
      object = {change: false}
    }
    const response = await fetch (`${localHost}/events/${id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(object)
    });
    //console.log(object);
    const data = await response.json();
    //console.log(data.payload);
    console.log(data);
    setEvents(data.payload);
  }
  
    return (
      // List Item displaying info for each map iteration
      <div className='event-card'>
        <Image/>
        <div className="event-details">
          <div className='event-type'>{data.type}</div>
          <div className='event-description'>{data.description}</div>
          <div className='event-author'>{`Host: ${data.author}`}</div>
          <div className='date'>{formattedDate}</div>
          <div className='time-start'>{data.start_time}</div>
          <div className='time-end'>{data.end_time}</div>

          <div className="attendance-counter">
            <p>{`${data.attendance} bootcampers attending`}</p>
            <label htmlFor="check-box">Attending?</label>
            <input type="checkbox" id="check-box" onChange={(e)=>{handleCheck(e, data.events_id)}}></input>
          </div>

          <Button className="launch-button" onClick={()=>{window.open(data.social_link, '_blank').focus()}} text="Launch" />
        </div>
        </div>
    );
}
  
export default ListItem;

