import logo from './nav.png';
import './style.css';
import { ArrowRightOutlined} from '@ant-design/icons';


function App() {
  return (

    <nav class="bg-slate-800 py-2.5 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 " >
      <div class="max-w-screen-xl flex flex-direction items-center justify-between mx-auto p-4">
        <div class="flex md:order-2">
          <button type="button" class="text-black bg-white-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-slate-300 rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0">Sign in</button>
          <button type="button" class="text-black bg-white-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-slate-300 rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0">Request Demo</button>
          <ArrowRightOutlined className='text-slate-300 text-sm py-2'/>
        </div>
        <div class="hidden w-full md:flex md:w-auto md:order-1"  id="nav">
          <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <a href="https://flowbite.com/" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500">
                <img src={logo} class="h-8 mr-3" alt="Flowbite Logo"></img>
              </a>
            </li>
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent focus:ring-4 focus:outline-none focus:ring-blue-300 focus:bg-blue-900" aria-current="page">Pricing</a>
            </li>
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent focus:ring-4 focus:outline-none focus:ring-blue-300 focus:bg-blue-900">About</a>
            </li>
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent focus:ring-4 focus:outline-none focus:ring-blue-300 focus:bg-blue-900">Blog</a>
            </li>
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent focus:ring-4 focus:outline-none focus:ring-blue-300 focus:bg-blue-900">Wall of Love</a>
            </li>
            <li>
              <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center text-white block py-2 pl-3 pr-4">
                Resources<svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              <div id="dropdownNavbar" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                  </li>
                </ul>
                <div class="py-1">
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Sign out</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>


  );
}

export default App;
