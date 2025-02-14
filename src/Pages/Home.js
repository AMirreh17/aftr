import '../App.css';
import logo from '../logo.svg';
import Navbar from '../Navbar';


function Home(){
    return(
         <div className="App">
          <Navbar />
         <header className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
           {
            /*
             <p>
             Edit <code>src/App.js</code> and save to reload.
           </p>*/
           }
          
          <div class="textColor">
        <h1 className='font-bold text-5xl'>After Motion Media Agency</h1>
        </div>
         </header>
       </div>
    )
}
export default Home;