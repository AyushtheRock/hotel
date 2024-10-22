// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Properties from './pages/Properties';
import Users from './pages/Users';
import Settings from './pages/Settings';
import DashboardStats from './pages/DashboardStats.jsx';
import PropertyDashboard from './pages/PropertyDashboard.jsx';
import BookingsDashboard from './pages/BookingsDashboard.jsx';

import Login from './pages/Login'; // Import the Login page
import 'font-awesome/css/font-awesome.min.css';
import 'font-awesome/css/font-awesome.min.css';
import RoomsListing from './pages/RoomListing.jsx';
import PropertiesForm from './pages/PropertiesForm.jsx';
import BookingInterface from './pages/Inventory.jsx';
import { ThemeProvider } from './context/theme.js';
import BookingPage from './components/BookingSection/BookingPage.jsx';
import Inventory from './pages/Inventory.jsx';

const App = () => {
 

  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
    <Router>
      <div className='dark:bg-gray-900 dark:text-white bg-white text-black  flex'>
        
          {/* <div className=''> */}
          <div className='hidden md:block md:w-[180px] lg:w-[230px]'>
            <Sidebar  /> {/* Pass isDarkMode to Sidebar */}
          </div>

          <div className=' w-full '>

            <Header  />
            <Routes>
              <Route path="/" element={<DashboardStats />} /> {/* Ensure darkMode is passed here */}
              <Route path='/bookings' element={<BookingsDashboard />}  />
              <Route path='/bookings/add-booking' element={<BookingPage />}  />
              <Route path="/properties" element={<Properties />} />
              <Route path='/roomtype' element={<RoomsListing />}  />
              <Route path='/propertiesForm' element={<PropertiesForm  />}  />
              <Route path="/users" element={<Users />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/property/:id" element={<PropertyDashboard />} />
              <Route path="/inventory" element={<Inventory />} />

              <Route path="/login" element={<Login />} /> {/* Add the Login route */}
            </Routes>
          </div>
        </div>
      {/* </div> */}
    </Router>
    </ThemeProvider>
  );
};

export default App;