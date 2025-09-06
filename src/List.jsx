import './App.css'
import Navbar from './layouts/navbar.jsx'
import Card from './components/Card.jsx'
import Carousel from './components/Carousel.jsx'
import Footer from './components/Footer.jsx'
function List() {
  return (
    <div className='h-full w-full mx-auto max-w-[47.5rem] p-6'>
      <Navbar />
      <div className='h-full w-full mx-auto'>
        <div className='mb-5 pt-12 md:pt-16 flex justify-between items-center  gap-10 max-md:flex-col max-md:text-center'>
          <h5 class="md:mb-4 md:mt-6 text-xl font-semibold tracking-tight text-white">Rubri Logo and Typography <br />
            <span className='font-light text-lg tracking-wider'>Portfolio Website</span>
          </h5>
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
        </div>
        <div className=' w-full'>
          <p class="mb-3 font-normal text-gray-300"><span className='text-white'>Rubri’s portfolio </span>is a professional showcase of specialized logo and typography services, supported by a small network of illustrators and animators. The website communicates availability for commissions, strong branding identity, and a clear artistic focus.</p>
        </div>
        <div className='mt-16  w-full'>
          <h5 className='mb-4 mt-6 text-xl font-semibold tracking-tight text-white'>Tech Used</h5>
          <div className='text-white grid grid-cols-5 gap-5 max-md:grid-cols-4 max-sm:grid-cols-3 max-[500px]:grid-cols-2'>
            <Card name="Tailwind">
              <svg role="img" viewBox="0 0 24 24" className='fill-[#06B6D4] w-8 transition-transform duration-300 group-hover:-translate-y-1' xmlns="http://www.w3.org/2000/svg"><title>Tailwind CSS</title><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" /></svg>
            </Card>
            <Card name="JavaScript">
              <svg role="img" viewBox="0 0 24 24" className='fill-[#F7DF1E] w-8 transition-transform duration-300 group-hover:-translate-y-1' xmlns="http://www.w3.org/2000/svg"><title>JavaScript</title><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" /></svg>
            </Card>
            <Card name="HTML">
              <svg role="img" viewBox="0 0 24 24" className='fill-[#E34F26] w-8 transition-transform duration-300 group-hover:-translate-y-1' xmlns="http://www.w3.org/2000/svg"><title>HTML5</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" /></svg>
            </Card>
            <Card name="CSS">
              <svg role="img" viewBox="0 0 24 24" className='fill-[#663399] w-8 transition-transform duration-300 group-hover:-translate-y-1' xmlns="http://www.w3.org/2000/svg"><title>CSS</title><path d="M0 0v20.16A3.84 3.84 0 0 0 3.84 24h16.32A3.84 3.84 0 0 0 24 20.16V3.84A3.84 3.84 0 0 0 20.16 0Zm14.256 13.08c1.56 0 2.28 1.08 2.304 2.64h-1.608c.024-.288-.048-.6-.144-.84-.096-.192-.288-.264-.552-.264-.456 0-.696.264-.696.84-.024.576.288.888.768 1.08.72.288 1.608.744 1.92 1.296q.432.648.432 1.656c0 1.608-.912 2.592-2.496 2.592-1.656 0-2.4-1.032-2.424-2.688h1.68c0 .792.264 1.176.792 1.176.264 0 .456-.072.552-.24.192-.312.24-1.176-.048-1.512-.312-.408-.912-.6-1.32-.816q-.828-.396-1.224-.936c-.24-.36-.36-.888-.36-1.536 0-1.44.936-2.472 2.424-2.448m5.4 0c1.584 0 2.304 1.08 2.328 2.64h-1.608c0-.288-.048-.6-.168-.84-.096-.192-.264-.264-.528-.264-.48 0-.72.264-.72.84s.288.888.792 1.08c.696.288 1.608.744 1.92 1.296.264.432.408.984.408 1.656.024 1.608-.888 2.592-2.472 2.592-1.68 0-2.424-1.056-2.448-2.688h1.68c0 .744.264 1.176.792 1.176.264 0 .456-.072.552-.24.216-.312.264-1.176-.048-1.512-.288-.408-.888-.6-1.32-.816-.552-.264-.96-.576-1.2-.936s-.36-.888-.36-1.536c-.024-1.44.912-2.472 2.4-2.448m-11.031.018c.711-.006 1.419.198 1.839.63.432.432.672 1.128.648 1.992H9.336c.024-.456-.096-.792-.432-.96-.312-.144-.768-.048-.888.24-.12.264-.192.576-.168.864v3.504c0 .744.264 1.128.768 1.128a.65.65 0 0 0 .552-.264c.168-.24.192-.552.168-.84h1.776c.096 1.632-.984 2.712-2.568 2.688-1.536 0-2.496-.864-2.472-2.472v-4.032c0-.816.24-1.44.696-1.848.432-.408 1.146-.624 1.857-.63" /></svg>
            </Card>
          </div>
        </div>
        <div className='mt-16  w-full'>
          <h5 className='mb-4 mt-6 text-xl font-semibold tracking-tight text-white'>Key Features</h5>
          <h5 className='my-1 text-lg font-light tracking-wide text-white'><span className='mr-2'>🎨</span>Unique and Personalized Design</h5>
          <h5 className='my-1 text-lg font-light tracking-wide text-white'><span className='mr-2'>⚡</span>Interactive UX with minimal navigation</h5>
          <h5 className='my-1 text-lg font-light tracking-wide text-white'><span className='mr-2'>💻</span>Credits for every works involved</h5>
        </div>
        <div className='mt-10  w-full'>
          <h5 className='mb-4 mt-6 text-xl font-semibold tracking-tight text-white'>Overview</h5>
          <Carousel />
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default List
