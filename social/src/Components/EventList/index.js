import ListItem from "../ListItem";

function EventList({className, data}) {
  console.log(data)
    return (
      <ul className={className}>
        <ListItem text="Testing" />
        <ListItem text="Testing" />
        <ListItem text="Testing" />
        <ListItem text="Testing" />
      </ul>
    );
  }
  
  export default EventList;