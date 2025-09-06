import './App.css'
import Navbar from './layouts/navbar.jsx'
import Jumbotron from './layouts/Jumbotron.jsx'
import Skills from './layouts/Skills.jsx'
import Timeline from './layouts/Timeline.jsx'
import image1 from './assets/project_1_rubri.png'
import { Link } from "react-router";
function App() {
  return (
    <div className='h-full w-full mx-auto max-w-[47.5rem] p-6'>
      <Navbar />
      <div className='h-full w-full mx-auto'>
        <Jumbotron />
        <Skills />
        <Timeline />
        <div className='flex flex-col w-full mt-24'>
          <h2 id='projects' className='text-white tracking-widest font-bold text-xl mb-7'>Projects</h2>
          <div className="flex mt-4 justify-center">
            <div class="max-w-full p-4 border rounded-lg shadow-sm bg-gray-800 border-gray-700">
              <Link to="/projects/rubri">
                <img class="rounded-t-lg" src={image1} alt="" />
              </Link>
              <div class="">
                <Link to="/projects/rubri" className=''>
                  <h5 class="mb-4 mt-6 text-2xl font-bold tracking-tight text-white">Rubri Logo and Typography</h5>
                </Link>
                <p class="mb-3 font-normal text-gray-400">Rubri’s portfolio is a professional showcase of specialized logo and typography services, supported by a small network of illustrators and animators. The website communicates availability for commissions, strong branding identity, and a clear artistic focus.</p>
                <span class="text-xs font-medium me-2 px-2.5 py-0.5 rounded-full bg-blue-900 text-blue-300">
                  Tailwind CSS</span>
                <span class="text-xs font-medium me-2 px-2.5 py-0.5 rounded-full bg-[#8b7c03] text-[#fdf9d5]">
                  Javascript</span>
                <span class="text-xs font-medium me-2 px-2.5 py-0.5 rounded-full bg-yellow-900 text-yellow-300">
                  HTML</span>
                <span class="text-xs font-medium me-2 px-2.5 py-0.5 rounded-full bg-purple-900 text-purple-300">
                  CSS</span>
                <div className='flex justify-between mt-4'>
                  <div class="inline-flex rounded-md shadow-xs" role="group">
                    <a href='https://raneysha.github.io/rubri-logos/' type="button" class="inline-flex items-center px-4 py-2 text-sm font-medium  border rounded-s-lg  focus:z-10 focus:ring-2 bg-gray-800 border-gray-700 text-white hover:text-white hover:bg-gray-700 focus:ring-blue-500 focus:text-white">
                      <svg class="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                      </svg>
                      Live Demo
                    </a>
                    <a href='https://github.com/raneysha/rubri-logos' type="button" class="inline-flex items-center px-4 py-2 text-sm font-medium border rounded-e-lg focus:z-10 focus:ring-2 bg-gray-800 border-gray-700 text-white hover:text-white hover:bg-gray-700 focus:ring-blue-500 focus:text-white">
                      <svg class="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                        <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                      </svg>
                      Repository
                    </a>
                  </div>
                  <Link to="/projects/rubri" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg  focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
                    Read more
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App
