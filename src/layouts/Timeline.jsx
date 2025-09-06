function timeline() {
  return (
    <div className='flex flex-col mt-14 w-full'>
      <h2 id="timeline" className='text-white tracking-widest font-bold text-xl mb-7'>Work Experience</h2>
      <ol class="relative border-s border-gray-700">
        <li class="mb-10 ms-4">
          <div class="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-500">2023 - 2024</time>
          <h3 class="text-lg font-semibold text-white">Freelance Front-End Developer</h3>
          <p class="text-base font-normal text-gray-400">As a Front-End Developer i have few responsibilities such as develop and maintain responsive, userfriendly, and visually appealing websites using HTML, CSS and JavaScript. And also translate design mockups into functional web pages. </p>
        </li>
      </ol>
    </div>
  )
}
export default timeline