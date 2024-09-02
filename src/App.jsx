import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Onboarding from "./Pages/Onboarding/Onboarding";
import Map from "./Pages/Map/Map";
import Error from "./Pages/Error/Error";
import Scanner from "./Pages/Scanner/Scanner";
import Home from "./Pages/Home/Home";
import Index from "./Pages/Index/Index";
import Show from "./Pages/Show/Show";

function App() {

  return (
    <div className="App">
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<Onboarding />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/sessions" element={<Index />} />
            <Route path="/sessions/:id" element={<Show />} />
            <Route path="/home" element={<Home />} />
            <Route path="/scanner" element={<Scanner />} />
            <Route path="/map" element={<Map />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
