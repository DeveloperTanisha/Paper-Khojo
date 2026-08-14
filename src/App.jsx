import HomePage from "./components/HomePage";
import './App.css';
import './components/Category.css';
import "./components/CounterSection.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Routes, Route, Router, BrowserRouter } from 'react-router-dom'
import College from "./components/College";
import Course from "./components/Course";
import PYQ from "./components/PYQ";
import UpdateSection from "./components/UpdateSection";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from "./components/HeroSection";
import CategorySection from "./components/CategorySection"
import CounterSection from "./components/CounterSection";
function App() {
  return  (<>
  <Navbar/>
  
    <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/colleges' element={<College />} />
    <Route path='/courses' element={<Course />} />
    <Route path='/pyq' element={<PYQ />} />
    <Route path='/updates' element={<Updates}
    <Route path='/aboutus' element={<AboutUs />} />
    <Route path='/contactus' element={<ContactUs />} />
    </Routes>
  
  <Footer/>
</>)}

export default App;