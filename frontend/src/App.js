import {BrowserRouter, Routes, Route} from 'react-router-dom';

import "./App.css";
// import "./styles/buttons.css";
// import "./styles/pages.css";
import "./styles/text.css";

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

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
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
      </BrowserRouter>
    </div>
  );
}

