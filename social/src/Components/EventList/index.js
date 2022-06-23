import './index.css';
import ListItem from "../ListItem";

function EventList({className, data}) {
  // Receives all the data from the App.js. Maps over the data and makes a prop called social which it passes to the list item for every event object
  console.log(data)
    return (
      <div className={className}>
        {data.map (
          social => (
            <ListItem data={social} key={social.event_id}/>
          )
        )}
      </div>
    );
  }
  
  export default EventList;