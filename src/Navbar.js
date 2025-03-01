import logo from '../src/Images/logo.png';

function Navbar(){
    return(
    <nav class="flex items-center justify-between flex-wrap bg-neutral-900 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
        <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54"> <image href={logo}  height="54" width="54" /></svg>
        <span class="font-semibold text-xl tracking-tight">After Motion Media</span>
    </div>
    <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-white border-white hover:text-grey hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm px-5">
        <a href="#/" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-neutral-500 mr-4">
            Home
        </a>
        <a href="#/about" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-neutral-500 mr-4">
            About
        </a>
        <a href="#/contact" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-neutral-500 mr-4">
            Contact
        </a>
        </div>
        
    </div>
    </nav>
    )
}
export default Navbar;