import { HashLink } from 'react-router-hash-link';
import { initFlowbite } from 'flowbite'
import { useEffect } from 'react';
function Navbar() {
  useEffect(() => { 
    initFlowbite();
  }, [])
  return (
    <nav class="border-gray-200 bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <HashLink to="/#" class="flex items-center space-x-3 rtl:space-x-reverse">
          <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Cahyo Dwi Setiono</span>
        </HashLink>
        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  bg-gray-800 md:bg-gray-900 border-gray-700">
            <li>
              <HashLink to="/#timeline" class="block py-2 px-3 rounded-sm md:border-0 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent font-semibold">Experience</HashLink>
            </li>
            <li>
              <HashLink to="/#projects" class="block py-2 px-3 rounded-sm md:border-0 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent font-semibold">Projects</HashLink>
            </li>
            <li>
              <HashLink to="/#" class="block py-2 px-3 rounded-sm md:border-0 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent font-semibold">Contacts</HashLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar