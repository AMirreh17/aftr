import '../App.css';
import logo from '../logo.svg';
import Navbar from '../Navbar';

function Contact(){
    return(
         <div className="App">
           <Navbar />
         <header className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
          <div class="textColor">
        <h1>Contact Page</h1>
        </div>
         </header>
       </div>
    )
}
export default Contact;