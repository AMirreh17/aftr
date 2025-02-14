import '../App.css';
import logo from '../logo.svg';
import Navbar from '../Navbar';

function About(){
    return(
         <div className="App">
          <Navbar />
         <header className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
          <div class="textColor">
        <h1>About Page</h1>
        </div>
         </header>
       </div>
    )
}
export default About;