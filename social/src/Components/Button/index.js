import './index.css';

function Button({className, onClick, text}) {
    return (
      <button onClick={onClick} className={className}>{text}</button>
    );
  }
  
  export default Button;