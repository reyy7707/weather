import { useState } from 'react'
import background from '../../assets/background.svg'
import bycicle from '../../assets/bycicle.svg'
import hitori from '../../assets/maxresdefault-5.jpg'
import hitori2 from '../../assets/wp11814642.jpg'
import sakura from '../../assets/1639712055_328-catherineasquithgallery-com-p-fon-anime-dlya-intro-rozovii-448.jpg'

const Modal = () => {

  const [showActiveBackgrounds, setShowActiveBackgrounds] = useState(false)
  const [backgroundChange, setBackgroundChange] = useState(background)

  const showActive = () => {
    setShowActiveBackgrounds(true)
  }
  const showHidden = () => {
    setShowActiveBackgrounds(false)
  }
  const HandleChangeBackgorund = () => {
    setBackgroundChange(background)
  }
  const HandleChangeHitori = () => {
    setBackgroundChange(hitori)
  }
  const HandleChangeHitori2 = () => {
    setBackgroundChange(hitori2)
  }
  const HandleChangeSakura = () => {
    setBackgroundChange(sakura)
  }

  window.oncontextmenu = (function (e) {
    return setShowActiveBackgrounds(true)
  });

  return (
    <div className='cursor-cell'>
      <div className='flex absolute top-44 left-44'>
        <div className='flex flex-col'>
          <h1 className='text-black text-4xl font-semibold'>Thematic</h1>
          <h2 className='text-black text-4xl font-semibold'>Backgrounds</h2>
          <h2 className='text-gray-500 text-xl pt-4'>Whimsical handcrafted</h2>
          <h2 className='text-gray-500 text-xl'>backdrops in</h2>
          <h2 className='text-gray-500 text-xl'>different styles</h2>
        </div>
      </div>
      <div className='flex w-full h-full justify-center items-center'>
        <img
          src={backgroundChange}
          alt='background'
          className='w-full h-full' />
      </div>
      <div className='flex absolute top-72 w-full justify-center h-auto'>
        <img
          src={bycicle}
          alt='bycicle'
          className='w-4/12 h-auto z-50' />
      </div>

      <div className='flex absolute right-96 top-56'>
        {/* <button onClick={showActive} className={` ${showActiveBackgrounds ? "hidden" : "px-3 py-2 bg-black text-white"} `}>Edit background</button> */}
      </div>

      {showActiveBackgrounds === true &&
        <div className='flex flex-col absolute right-96 top-72 w-2/12 h-auto border-[#e6e6e6] bg-white rounded-xl transition:duration-500'>
          <div className='flex justify-end w-full'>
            <p onClick={showHidden} className='p-2'>Back</p>
          </div>
          <div className='flex justify-center items-center w-full h-auto'>
            <img
              src={background}
              alt=''
              className='ml-4'
              onClick={HandleChangeBackgorund} />
          </div>
          <div className='flex justify-center items-center w-full h-auto'>
            <img
              src={sakura                                                                                                                                                                                                                                   }
              alt=''
              className='ml-4'
              onClick={HandleChangeSakura} />
          </div>
          <div className='flex justify-center items-center w-full h-auto'>
            <img
              src={hitori}
              alt=''
              className='ml-4'
              onClick={HandleChangeHitori} />
          </div>
          <div className='flex justify-center items-center w-full h-auto'>
            <img
              src={hitori2}
              alt=''
              className='ml-4'
              onClick={HandleChangeHitori2} />
          </div>
        </div>
      }
      {showActiveBackgrounds === false &&
        <div className='hidden'></div>
      }
    </div>
  )
}

export default Modal