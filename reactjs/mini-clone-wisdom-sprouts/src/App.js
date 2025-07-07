import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import FeacheredCourses from './components/FeacheredCourses';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';
import PlacementPage from './components/PlacementPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      {/* <Navbar />
      <Route />
      <FeacheredCourses />
      <PlacementPage />
      <ContactPage />
      <AboutPage />
      <Footer /> */}

        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path='/' element={<><Header></Header><FeacheredCourses></FeacheredCourses></>}></Route>
            <Route path='/placement' element={<PlacementPage />}></Route>
            <Route path='/contact' element={<ContactPage />}></Route>
            <Route path='/about' element={<AboutPage />}></Route>
          </Routes>
        
        <Footer />
        </BrowserRouter>







    </>
  );
}

export default App;
