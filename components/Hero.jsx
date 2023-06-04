/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import { AiOutlineTwitter,AiOutlineGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Hero = () => {
  return (
    <div  className='max-w-7xl  flex flex-col p-5 pb-0 mx-auto justify-center items-center  text-gray-300 font-globalFont'>
        <div className='relative mb-10 pt-10'>
          <img src="https://cdn.create.vista.com/api/media/small/460532624/stock-photo-young-african-american-girl-smiling" alt="profile" className='w-60 h-34 border-2 border-pink-500 rounded-lg '/>
          <div className='flex items-center justify-center'>
            <Link href="/">
              <FaLinkedinIn className='text-white bg-pink-600 text-5xl p-1 rounded-full absolute -bottom-5  border-pink-500 z-1 cursor-pointer'/>
            </Link>
            <Link href="/">
              <AiOutlineGithub className='text-white bg-pink-600 text-5xl p-1 rounded-full absolute  -bottom-5  right-6 border-pink-500 cursor-pointer'/>
            </Link>
            <Link href="/">
              <AiOutlineTwitter className='text-white bg-pink-600 text-5xl p-1 rounded-full absolute -bottom-5  left-6 border-pink-500 cursor-pointer'/>
            </Link>
          </div>
        </div>
        <div className='text-gray-300 flex flex-col justify-center items-center'>
            <span>Bienvenidos a nuestro proyecto de portafolio!</span>
            <h1 className='text-2xl font-bold pt-2'> Kelly Arango Klusmann</h1>
            <h1 className='text-xl text-gray-300'>Desarrolladora Web</h1>
        </div>
        <div className='flex mt-6'>
          <a href="./assets/H.V kelly.pdf" className='p-2 mx-2 border-2 border-gray-200 rounded  bg-gray-200 text-gray-900 hover:text-blue-200 hover:bg-blue-900  font-semibold'>Descarga mi H.V</a>
          <a href="#about" className='p-2 mx-2 border-2 border-gray-200 rounded  bg-gray-200 text-gray-900 hover:text-blue-200 hover:bg-blue-900  font-semibold'>A cerca de mi</a>
        </div>

    </div>
  )
}

export default Hero