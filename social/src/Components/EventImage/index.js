import socialImage from './social.jpg';
import codingImage from "./groupcoding.jpg";
import gamesImage from "./games.jpg";

function Image({type}) {
  
    var src =socialImage;

    if(type==="Social"){
        src = socialImage;
    }

    if(type==="Group Coding"){
        src = codingImage;
    }

    if(type==="Games Session"){
        src = gamesImage;
    }

    return (
      
        <img className="image" src={src} alt="neon hello sign" />
      
    );
  }
  
  export default Image;