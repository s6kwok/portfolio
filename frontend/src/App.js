import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Design from './pages/Design'
import About from './pages/About'
import DesignSystem from './pages/DesignSystem'
import NoPage from './pages/NoPage';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Design />} />
          <Route path="/design" element={<Design />} />
          <Route path="/about" element={<About />} />
          <Route path="/design-system" element={<DesignSystem />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

