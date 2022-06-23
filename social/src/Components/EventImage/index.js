import socialImage from './social.jpg';
import helpImage from "./codingHelp.jpg";
import chatImage from "./courseChat.jpg";
import gamesImage from "./game.jpg";

function Image({type}) {
  
    var src =socialImage;

    if(type==="Coding Help"){
        src = helpImage;
    }

    if(type==="Course Chat"){
        src = chatImage;
    }

    if(type==="Games Session"){
        src = gamesImage;
    }


    return (
      
        <img className="image" src={src} alt="neon hello sign" />
      
    );
  }
  
  export default Image;