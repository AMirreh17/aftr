import '../App.css';
//import logo from '../logo.svg';
import Navbar from '../Navbar';
import { motion } from "motion/react"


function Home(){
    return(
         <div className="App">
          <Navbar />
         <header className="App-header">
           
           {
            /*
            <img src={logo} className="App-logo" alt="logo" />

             <p>
             Edit <code>src/App.js</code> and save to reload.
           </p>
           
           
           <div class="textColor">
          <h1 className='font-bold text-5xl'>After Motion Media Agency</h1>
          </div>
           
           */
           }
        <motion.div animate={{ y: -30,opacity: 1}} initial={{ opacity:0}} transition={{duration: 1, ease: "easeOut"}}>
        <div class="mt-[-50px] flex h-screen items-center justify-center">
        <div class="max-w-full flex-shrink-0 px-4 text-center lg:mx-0 lg:max-w-3xl lg:pt-8">
          <h1 class="mt-10 text-5xl font-bold tracking-tight text-white sm:text-6xl">
            Simplifying
            Concepts Through
            Visuals
          </h1>
          <p class="mt-6 text-lg leading-8 text-gray-300">Our media company provides a range of post production and design services such as Video Editing, Motion Graphics, Graphic Design, Web Design and more.
            </p>
            <p class="mt-4 text-lg leading-8 text-gray-300">Coming soon in 2025.
            </p>
            {
              /*
              <div class="mt-5 flex items-center justify-center gap-x-6">
              <a href="/register"
                class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                rel="noreferrer">Learn More →</a>
        </div>*/
            }
            
    </div>
  </div>
   </motion.div>       
         </header>
       </div>
    )
}
export default Home;