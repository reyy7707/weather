import WeatherPage from './components/main/weather_page'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<WeatherPage/>}/>
      {/* <Route path='/cities' element/>
      <Route path='/settings' element/> */}
    </Routes>
    </>
  )
}

export default App