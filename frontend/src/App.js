import {Route, HashRouter as Router, Routes} from 'react-router-dom';
// import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import "./App.css";
import "./styles/Text.css";

import { routes } from "./routes/Routes";
import Home from './pages/Home'
import About from './pages/About'
import DesignSystem from './pages/DesignSystem'
import NoPage from './pages/NoPage';
import SnapPea from './pages/SnapPea'
import Blank from './pages/Blank'
import JamCity from './pages/JamCity'
import Blueprint from './pages/Blueprint'
import Questrade from './pages/Questrade'

// Helper component to track page views
function PageTracker() {
  const location = useLocation(); // Get current location (route)

  useEffect(() => {
    if (window.gtag) {
      // Send the current path to Google Analytics
      window.gtag('config', 'YOUR_TRACKING_ID', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]); // Run effect every time location (route) changes

  return null; // This component doesn't render anything
}

export default function App() {
  return (
    <div>
      <BrowserRouter>
      {/* <Router baseline='/'> */}
        <PageTracker />
          <Routes>
            {/* Add new pages to routes list to link pages */}
            <Route index element={<Home />} />
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.about} element={<About />} />
            <Route path={routes.designSystem} element={<DesignSystem />} />
            <Route path={routes.noPage} element={<NoPage />} />
            <Route path={routes.snapPea} element={<SnapPea />} />
            <Route path={routes.blank} element={<Blank />} />
            <Route path={routes.jamCity} element={<JamCity />} />
            <Route path={routes.blueprint} element={<Blueprint />} />
            <Route path={routes.questrade} element={<Questrade />} />
          </Routes>
      {/* </ Router> */}
      </BrowserRouter>
    </div>
  );
}

