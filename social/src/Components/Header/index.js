import Logo from './social-logo.png';
import './index.css';

function Header({className}) {
  // Logo for the app
    return (
      <div className={className}>
        <h2>{"{SoC}ial"}</h2>
      </div>
    );
  }
  
  export default Header;