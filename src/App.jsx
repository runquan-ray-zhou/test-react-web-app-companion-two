import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Onboarding from "./Pages/Onboarding/Onboarding";
import Landing from "./Pages/Landing/Landing";
import Map from "./Pages/Map/Map";
import Error from "./Pages/Error/Error";

function App() {

  return (
    <div className="App">
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<Onboarding />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/landing" element={<Landing />} />
            {/* <Route path="/route" element={<Index />} />
            <Route path="/speakers" element={<Index />} />
            <Route path="/speakers/:id" element={<Show />} />
            <Route path="/exhibits" element={<Index />} /> */}
            <Route path="/map" element={<Map />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
