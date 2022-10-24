import "./index.css";
import Button from "../Button";
import EventImage from "../EventImage";

const URL = "https://social-app-backend-production.up.railway.app";

function EventListItem({ data, setEvents }) {
  const eventDate = new Date(data.date);
  const formattedDate = eventDate.toDateString();

  //handleCheck updates the event attendance through a PATCH request to back-end in response to checkbox click
  //then returns all events to update events state
  async function handleCheck(e, id) {
    console.log(id);
    let attendanceUpdate = {};
    if (e.target.checked) {
      console.log("checked");
      attendanceUpdate = { change: true };
    } else {
      console.log("unchecked");
      attendanceUpdate = { change: false };
    }

    const response = await fetch(`${URL}/events/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(attendanceUpdate),
    });
    const data = await response.json();
    //console.log(data.payload);
    setEvents(data.payload);
  }

  // returns an EventListItem displaying event info (for each time array.map method runs in EventList component)
  return (
    <div className="event-card">
      <EventImage type={data.type} />
      <div className="event-details">
        <div className="event-type">{data.type}</div>
        <div className="event-description">{`"${data.description}"`}</div>
        <div className="event-author">{`Host: ${data.author}`}</div>
        <div className="date">{`Date: ${formattedDate}`}</div>
        <div className="time-start">{`Time: ${data.start_time} - ${data.end_time}`}</div>
        <div className="attendance-counter">
          <p>{`${data.attendance} bootcampers attending`}</p>
          <label htmlFor="check-box">Attending?</label>
          <input
            type="checkbox"
            id="check-box"
            onChange={(e) => {
              handleCheck(e, data.events_id);
            }}
          ></input>
        </div>
        <Button
          className="launch-button"
          onClick={() => {
            window.open(data.social_link, "_blank").focus();
          }}
          text="Launch Meeting"
        />
      </div>
    </div>
  );
}

export default EventListItem;
