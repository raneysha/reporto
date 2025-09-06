function card({children, name}) {
  return (
    <button className='border-slate-500 hover:bg-linear-to-br from-gray-900 to-slate-700 gap-1.5 h-24 text-slate-300 border rounded-lg p-3 flex flex-col items-center justify-center hover:text-white transition-all ease-in-out group'>
    {children}
    <p className='font-semibold'>{name}</p>
  </button>
  )
}
export default card;