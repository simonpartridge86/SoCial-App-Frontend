import Button from "../Button";

function ListItem({data}) {
  //console.log(data);
  
    return (
      // List Item displaying info for each map iteration
      <div className='event-card'>
        <h1 className='event-type'>{data.event_type}</h1>
        <p className='event-description'>{data.event_description}</p>
        <p className='event-author'>{data.event_author}</p>
        <p className='date'>{data.date}</p>
        <p className='time-start'>{data.time_start}</p>
        <p className='time-end'>{data.time_end}</p>
        <Button className="launch-button" onClick={()=>{window.open(data.social_link, '_blank').focus()}} text="Launch" />
  
      </div>
    );
  }
  
  export default ListItem;