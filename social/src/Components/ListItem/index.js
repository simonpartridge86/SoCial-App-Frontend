import Button from "../Button";
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
        <h1 className='event-type'>{data.type}</h1>
        <p className='event-description'>{data.description}</p>
        <p className='event-author'>{data.author}</p>
        <p className='date'>{formattedDate}</p>
        <p className='time-start'>{data.start_time}</p>
        <p className='time-end'>{data.end_time}</p>
        <div className="attendance-counter">
          <p>{`${data.attendance} bootcampers attending`}</p>
          <label htmlFor="check-box">Attending?</label>
          <input type="checkbox" id="check-box" onChange={(e)=>{handleCheck(e, data.events_id)}}></input>
        </div>
        
        <Button className="launch-button" onClick={()=>{window.open(data.social_link, '_blank').focus()}} text="Launch" />
      </div>
    );
}
  
export default ListItem;