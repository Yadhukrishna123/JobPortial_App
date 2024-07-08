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
import CreateJob from "./Components/CreateJob";
import EditUser from "./Components/EditUser";
import EditJob from "./Components/EditJob";
import JobDetails from "./Components/JobDetails";
import JobdeTaiLs from "./Components/JobdeTaiLs.";
import ContactDetails from "./Components/ContactDetails";
import  Details  from "./Components/Details";









function App() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated)
  
  
  return (
   
    <Router>
      <Header />
      <Routes>

        <Route path="/home" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/signin" element={<Signin />}/>
        <Route path="/addJob" element={<CreateJob />}/>
        <Route path="/search" element={<JobDetails />}/>
        {/* <Route path="/details/:id" element={<JobDetails />}/> */}
        <Route path="/jobdetails/:id" element={<JobdeTaiLs />}/>
        <Route path="/contactDetails/:id" element={<ContactDetails />}/>

        
        <Route path="/users" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Users/></ProtectedRoute>}/>
        <Route path="/user/:id" element={<ProtectedRoute isAuthenticated={isAuthenticated}><EditUser/></ProtectedRoute>}/>
        <Route path="/sidebar" element={<ProtectedRoute isAuthenticated={isAuthenticated}><SideBar /></ProtectedRoute>}/>
        <Route path="/jobs" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Jobs /></ProtectedRoute>}/>
        <Route path="/job/:id" element={<ProtectedRoute isAuthenticated={isAuthenticated}><EditJob /></ProtectedRoute>}/>
        <Route path="/details" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Details /></ProtectedRoute>}/>
       
       
        

      </Routes>
      <Footer/>
    </Router>
   
    
  );
}

export default App;
