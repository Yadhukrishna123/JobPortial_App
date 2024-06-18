import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Register from "./Components/Register";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Signin from "./Components/Signin";
import Users from "./Components/Users";
import ProtectedRoute from "./Components/Utils/ProtectedRoute";
import { useSelector } from "react-redux";
import SideBar from "./Components/SideBar";
import Jobs from "./Components/Jobs";








function App() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated)
  
  
  return (
   
    <Router>
      <Header />
      <Routes>

        <Route path="/home" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/signin" element={<Signin />}/>
        <Route path="/jobs" element={<Jobs />}/>
        
       
        
        <Route path="/users" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Users/></ProtectedRoute>}/>
        <Route path="/sidebar" element={<ProtectedRoute isAuthenticated={isAuthenticated}><SideBar /></ProtectedRoute>}/>
       
        

      </Routes>
      <Footer/>
    </Router>
   
    
  );
}

export default App;
