import socialImage from './social.jpg';
import codingImage from "./groupcoding.jpg";
import gamesImage from "./games.jpg";

function EventImage({type}) {
    let src = socialImage;
    let alt = "Social neon sign image";
    if(type==="Social"){
        src = socialImage;
        alt = "Social neon sign image";
    }
    if(type==="Group Coding"){
        src = codingImage;
        alt = "Group coding neon sign image";
    }
    if(type==="Games Session"){
        src = gamesImage;
        alt = "Games session neon sign image";
    }

    return (
        <img className="event-image" src={src} alt={alt} />
    );
}

export default EventImage;