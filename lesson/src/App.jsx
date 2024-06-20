// import WeatherPage from './components/main/weather_page'
import { Routes, Route } from 'react-router-dom'
import Modal from './components/main/modal'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Modal/>}/>
      {/* <Route path='/' element={<WeatherPage/>}/> */}
      {/* <Route path='/cities' element/>
      <Route path='/settings' element/> */}
    </Routes>
    </>
  )
}

export default App