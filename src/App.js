import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home1 from './pages/Home1/Home1';
import Home2 from './pages/Home2/Home2';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Gallery from './pages/Gallery/Gallery';
import Team from './pages/Team/Team';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';

import HeaderHome1 from './components/HeaderHome1/HeaderHome1';
import HeaderHome2 from './components/HeaderHome2/HeaderHome2';
import SharedHeader from './components/SharedHeader/SharedHeader';
import Footer from './components/Footer/Footer';
import './App.scss';

function App() {
  return (
    <Router>
      <Routes>
        {/* Use HeaderHome1 for Home1 */}
        <Route path="/" element={<><HeaderHome1 /><Home1 /></>} />
        
        {/* Use HeaderHome2 for Home2 */}
        <Route path="/home2" element={<><HeaderHome2 /><Home2 /></>} />
        
        {/* Use SharedHeader for all other pages */}
        <Route path="/about" element={<><SharedHeader /><About /></>} />
        <Route path="/services" element={<><SharedHeader /><Services /></>} />
        <Route path="/gallery" element={<><SharedHeader /><Gallery /></>} />
        <Route path="/team" element={<><SharedHeader /><Team /></>} />
        <Route path="/blog" element={<><SharedHeader /><Blog /></>} />
        <Route path="/contact" element={<><SharedHeader /><Contact /></>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
