import '../App.css';
import logo from '../logo.svg';

function Home(){
    return(
         <div className="App">
         <header className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
           {
            /*
             <p>
             Edit <code>src/App.js</code> and save to reload.
           </p>*/
           }
          
          <div class="textColor">
        <h1>After Motion Media Agency</h1>
        </div>
         </header>
       </div>
    )
}
export default Home;