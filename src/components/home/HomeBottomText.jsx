import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-4'>
      <div className="border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] h-30 flex items-center px-10 border-white rounded-full uppercase leading-4 mb-4">
        <Link to="/projects" className='text-[6vw] mt-1 pt-5'>Projects</Link>
      </div>
      <div className="border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] h-30 flex items-center px-10 border-white rounded-full uppercase leading-4 mb-4">
        <Link to="/agence" className='text-[6vw] mt-1 pt-5'>Agence</Link>
      </div>
    </div>
  )
}

export default HomeBottomText