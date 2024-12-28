import { useLocation, useNavigate } from 'react-router-dom';
import Docimage from '/Eduarchive.webp';
import { FaHamburger } from 'react-icons/fa';
import { useState } from 'react';

export default function Header() {
  const nav = useNavigate();
  const location = useLocation();
  
  console.log(location.pathname);
  const[ham,setHam] = useState(false)
  return (
   

    <div>

<div className="flex items-center justify-between px-10 py-4 shadow-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      {/* Logo Section */}
      <div className="flex items-center gap-4">
        <img src={Docimage} className="w-12 h-12 rounded-md shadow-lg" alt="DocApp Logo" />
        <span className="text-3xl font-extrabold text-white cursor-pointer">
          <span className="text-yellow-300">Edu</span>Archive
        </span>
      </div>
      <FaHamburger onClick={()=>{
        if(ham){
          setHam(false)
        }
        else setHam(true)
      }}  className="sm:hidden text-3xl text-black block"/>
      {/* Navigation Section */}
      <div className="sm:flex hidden   gap-6 items-center">
      
        <span
          onClick={() => {
            if (location.pathname === '/show') {
              localStorage.removeItem('userid');
              localStorage.removeItem('email');
              nav('/');
            } else {
              nav('/login');
            }
          }}
          className="px-5 py-2  text-lg font-semibold bg-white text-purple-700 rounded-full shadow-lg hover:bg-purple-100 transition-all duration-300 cursor-pointer"
        >
          {location.pathname === '/show' ? 'Log Out' : 'Log In'}
        </span>
        <span className="text-lg font-medium text-white hover:text-yellow-300 transition-colors duration-300 cursor-pointer">
          About Us
        </span>
      </div>
      
    </div>

    {/* Appearing section */}
     {ham ? <div className='py-3 transition-all duration-300 flex flex-col'>
      <button 
      onClick={() => {
        if (location.pathname === '/show') {
          localStorage.removeItem('userid');
          localStorage.removeItem('email');
          nav('/');
        } else {
          nav('/login');
        }
      }}
      className="mx-10 py-2  text-lg font-semibold bg-pink-600 text-white rounded-full shadow-lg hover:bg-purple-100 transition-all duration-300 cursor-pointer"
      >{location.pathname === '/show' ? 'Log Out' : 'Log In'}</button>
      <button className="text-lg font-medium  hover:text-yellow-300 transition-colors duration-300 cursor-pointer">About Us</button>

    </div>:''}
    
    </div>
  );
}
