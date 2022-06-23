import Logo from './social-logo.png';
import './index.css';

function Header({className}) {
  // Logo for the app
    return (
      <div className={className}>
        <h1>{"{SoC}ial"}</h1>
      </div>
    );
  }
  
  export default Header;