import Logo from './social-logo.png'

function Header({className}) {
    return (
      <div className={className}>
        <img src={Logo} alt="app-logo" />
        <h2>Where the cool dudes hang out</h2>
      </div>
    );
  }
  
  export default Header;