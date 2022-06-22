import eventImage from './drew-beamer-3SIXZisims4-unsplash.jpg';

function Image({className}) {
    return (
      <div className={className}>
        <img src={eventImage} alt="neon hello sign" />
      </div>
    );
  }
  
  export default Image;