import image1 from '../assets/project_1_rubri.png'
import image2 from '../assets/project_2_rubri.png'
import image3 from '../assets/project_3_rubri.png'
import image4 from '../assets/project_4_rubri.png'
import image5 from '../assets/project_5_rubri.png'
function Carousel() {
  return (
    <div>
      <div id="animation-carousel" class="relative w-full" data-carousel="static">
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div class="hidden duration-200 ease-linear" data-carousel-item>
            <img src={image1} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
          </div>
          <div class="hidden duration-200 ease-linear" data-carousel-item>
            <img src={image2} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
          </div>
          <div class="hidden duration-200 ease-linear" data-carousel-item="active">
            <img src={image3} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
          </div>
          <div class="hidden duration-200 ease-linear" data-carousel-item>
            <img src={image4} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
          </div>
          <div class="hidden duration-200 ease-linear" data-carousel-item>
            <img src={image5} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
          </div>
        </div>
        <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-200/30 group-hover:bg-gray-100/60 group-focus:ring-4 group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-200/30 group-hover:bg-gray-100/60 group-focus:ring-4 group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  )
}
export default Carousel