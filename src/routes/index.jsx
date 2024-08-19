import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Workouts from '../pages/Workouts';


const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/workouts" element={<Workouts />} />
    </Routes>
  </Router>
);

export default AppRoutes;
