import ListItem from "../ListItem";

function EventList({className, data}) {
  console.log(data)
    return (
      <ul className={className}>
        {data.map (
          social => (
            <ListItem data = {social} />
          )
        )}
      </ul>
    );
  }
  
  export default EventList;