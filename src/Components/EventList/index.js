import './index.css';
import EventListItem from "../EventListItem";

// Receives all data from App.js - maps over the data and passes down event info (through social prop) to the EventListItem component
function EventList({className, data, setEvents}) {
  //console.log(data)
    return (
      <div className={className}>
        {data.map (
          eachEvent => (
            <EventListItem data={eachEvent} setEvents={setEvents} key={eachEvent.events_id} />
          )
        )}
      </div>
    );
  }
  
  export default EventList;