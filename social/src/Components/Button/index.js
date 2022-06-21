function Button({className, onClick}) {
    return (
      <button onClick={onClick} className={className}>{className}</button>
    );
  }
  
  export default Button;