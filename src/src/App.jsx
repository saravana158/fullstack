
import ClippedDrawer from "./components/homepage";
import FlipCard from "./components/card";
import { BrowserRouter as  Router,  Routes, Route } from 'react-router-dom';
import Profile from "./components/profile";
import { lazy,Suspense } from "react";
const Jct = lazy(() =>import('./components/Boathouses/jct'))
const App = () => {
  

  return (
    <div>
    <Router>
    <Routes>
    <Route path="/"  element={<FlipCard/>} />    
    <Route path="/homepage" element={<ClippedDrawer/>} />    
    <Route path="/profile"  element={<Profile/>} />    
    <Route path="/homepage/jct" element={ <Suspense fallback={<p>Loading.........</p>}><Jct/></Suspense>} />    
  

    </Routes>
    </Router>
    </div>
  );
};

export default App;