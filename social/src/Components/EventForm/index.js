import Button from "../Button";

function EventForm() {
  return (
    <form>
      <input type="text" className="event-title"></input>
      <input type="text" className="event-description"></input>
      {/* date
      start-time
      end-time */}
      <Button className="form-button" text="Submit"/>
    </form>
  );
}
  
export default EventForm;