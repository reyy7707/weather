import { useEffect, useState } from 'react'
import { apiURL } from '../api/api'
import { instance } from '../axios/instance';
// import { Link } from 'react-router-dom'

const WeatherPage = () => {

    const [weatherData, setWeatherData] = useState({} || null)

    useEffect(() => {
      const getData = async() => {
        const data = await instance.get(`weather?q=Kara-Balta&units=metric&appid=${apiURL}`)
        setWeatherData(data.data);
        console.log(weatherData);
      }
      getData()
    },[])

    const [currentDateTime, setCurrentDateTime] = useState('');

    useEffect(() => {
      const updateDateTime = () => {
        const now = new Date();
        const optionsDay = { weekday: 'long' };
        const optionsTime = { hour: '2-digit', minute: '2-digit' };
        
        const day = now.toLocaleDateString('en-US', optionsDay);
        const time = now.toLocaleTimeString('en-US', optionsTime);
        
        const formattedDateTime = `${day} | ${time}`;
        setCurrentDateTime(formattedDateTime);
      };
  
      updateDateTime();
      const intervalId = setInterval(updateDateTime, 60000);
  
      return () => clearInterval(intervalId);
    }, []);

  return (
    <div className='p-0 m-0 bg-[#d3a145] w-full h-full'>

      <div className='flex w-full h-auto justify-between items-center'>
        <div className='flex flex-col items-start pl-[97px]'>
          <div className='flex items-center justify-items-center gap-2 pt-[52px]'> 
            <img className='w-[18px] h-[25px]' src='https://www.svgrepo.com/show/127575/location-sign.svg'/> 
            <h1 className='text-xl font-mono'> {weatherData.name} </h1> 
            <img className='w-[19px] h-[9px]' src='https://www.svgrepo.com/show/27797/right-arrow.svg'/>
          </div> 
            {weatherData?.weather?.map((item,index) => (
                  <div className='pt-[20px]' key={index}>
                    <p className='text-5xl font-mono'> {item.main} </p>
                  </div>
          ))}
           <div className='flex pt-[100px]'>
              <p className='text-black font-mono text-5xl'>
                {weatherData.main?.temp}<span>°C</span>
              </p>
            </div>
            <p className='text-xl font-mono pt-[10px]'> {currentDateTime} </p>
            <div>
    </div>
        </div>
        <div className='flex items-center justify-center'>
          <img className='w-[391px] h-[391px] pr-[96px]' src='../../public/reshot-icon-weather-X3N7PHUCLR.svg'/>
        </div>
      </div>
      
      <div className='flex w-full h-auto gap-[30px] items-center'>
        <div className='flex flex-col items-center w-1/12 rounded-[52px] h-[570px] ml-[40px] bg-[#DEAB4D] bg-opacity-100'>
          <img className='w-[70px] h-[70px] mt-5' src='https://cdn.iconscout.com/icon/free/png-512/free-avatar-370-456322.png?f=webp&w=256' alt='profile icon'/>
          <div className='flex flex-col gap-y-[22px] items-center pt-[99px]'>
           <div className='flex flex-col items-center'>
            <img className='w-[60px] h-[60px]' src='https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_39-512.png'/>
            <h1 className='font-mono text-white'> weather </h1>
          </div>
          <div className='flex flex-col items-center'>
            <img className='w-[50px] h-[50px] hover:animate-spin' src='https://cdn-icons-png.flaticon.com/128/9413/9413624.png'/>
            <h1 className='font-mono text-white'> explore </h1>
          </div>
          <div className='flex flex-col items-center'>
            <img className='w-[50px] h-[50px] hover:animate-pulse' src='https://cdn-icons-png.flaticon.com/128/684/684908.png'/>
            <h1 className='font-mono text-white'> cities </h1>
          </div>
          <div className='flex flex-col items-center'>
            <img className='w-[50px] h-[50px] hover:animate-bounce' src='https://cdn-icons-png.flaticon.com/128/3953/3953226.png'/>
            <h1 className='font-mono text-white'> settings </h1>
          </div>
            
          </div>
        </div>
        <div className='flex w-7/12 flex-col gap-y-[31px]'>
          <div className='flex w-full flex-col h-[244px] rounded-[32px] bg-[#DEAB4D] bg-opacity-100'>
              <div className='flex w-full justify-around px-12 pt-4'>
                <img className='w-[60px] h-[60px]' src='https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_2-64.png'/>
                <img className='w-[60px] h-[60px]' src='https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_3-64.png'/>
                <img className='w-[60px] h-[60px]' src='https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_39-64.png'/>
                <img className='w-[60px] h-[60px]' src='https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_44-64.png'/>
                <img className='w-[60px] h-[60px]' src='https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_1-64.png'/>
              </div>
              <div className='flex items-center w-full justify-center pt-12'>
                <h1 className='font-mono text-white text-xl'> Activities in your area </h1>
              </div>
          </div>
          <div className='flex w-full h-[244px] rounded-[32px] bg-[#DEAB4D] bg-opacity-100'>

          </div>
        </div>
        <div className='w-3/12 h-[535px] rounded-[32px] bg-[#DEAB4D] bg-opacity-100'>

        </div>
      </div>

    </div>
  )
}

export default WeatherPage