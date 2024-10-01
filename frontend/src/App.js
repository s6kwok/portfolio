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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

