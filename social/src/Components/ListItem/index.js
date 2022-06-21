import Button from "../Button";

function ListItem({data}) {
  //console.log(data);
  
  // function increaseCount(id, count){
  //   const newCount = count++;
  //   setEvents([...events.slice(0,id-1)])
  // }

    return (
      <div className='event-card'>
        <h1 className='event-title'>{data.event_title}</h1>
        <p className='event-description'>{data.event_description}</p>
        <p className='date'>{data.date}</p>
        <p className='time-start'>{data.time_start}</p>
        <p className='time-end'>{data.time_end}</p>
        <Button className="launch-button" onClick={()=>{window.open(data.social_link, '_blank').focus()}} text="Launch" />
        {/* <Button className="attendance-count" onClick={()=>{increaseCount(data.id, data.attending_count)}} text="+1" /> */}
        {/* <h5>{data.attending_count}</h5> */}
      </div>
    );
  }
  
  export default ListItem;