import './index.css';
import Button from "../Button";
import Image from "../EventImage";

function ListItem({data}) {
  //console.log(data);
    return (
      // List Item displaying info for each map iteration
      <div className='event-card'>
        <Image/>
        <div className="event-details">
          <div className='event-type'>{data.type}</div>
          <div className='event-description'>{data.description}</div>
          <div className='event-author'>{data.author}</div>
          <div className='date'>{data.date}</div>
          <div className='time-start'>{data.start_time}</div>
          <div className='time-end'>{data.end_time}</div>
          <Button className="launch-button" onClick={()=>{window.open(data.social_link, '_blank').focus()}} text="Launch" />
        </div>
      </div>
    );
  }
  export default ListItem;










/*
function ListItem({data}) {
  //console.log(data);
  
    return (
      // List Item displaying info for each map iteration
      
      <div className='event-card'>
        <div>
          <Image/>
        </div>
        <div className="event-details">
          <div><h1 className='event-type'>{data.type}</h1></div>
          <div><p className='event-description'>{data.description}</p></div>
          <div><p className='event-author'>{data.author}</p></div>
          <div><p className='date'>{data.date}</p></div>
          <div><p className='time-start'>{data.start_time}</p></div>
          <div><p className='time-end'>{data.end_time}</p></div>
          <div><Button className="launch-button" onClick={()=>{window.open(data.social_link, '_blank').focus()}} text="Launch" /></div>
        </div>
      </div>
    );
  }

    export default ListItem;
  */
  
  
