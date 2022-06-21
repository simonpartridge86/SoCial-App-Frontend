function ListItem({data}) {
  console.log(data);
    return (
      <div className='event-card'>
        <h1 className='event-title'>{data.event_title}</h1>
        <p className='event-description'>{data.event_description}</p>
        <p className='time-start'>{data.time_start}</p>
        <p className='end-end'>{data.time_end}</p>
      </div>
    );
  }
  
  export default ListItem;