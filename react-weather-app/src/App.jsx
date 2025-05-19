import './App.css';
import CityList from './components/CityList';
import { BrowserRouter, Route, Routes } from 'react-router';
import CityForecast from './components/CityForecast';
import weatherData from './components/WeatherData';

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <>
              <Route 
                path='/forecast/:cityName'
                element={<CityForecast allCities={weatherData} />}
                />

              <Route
                path='/'
                element={<CityList />}
              />
            </>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
