import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";


function App() {
  
  return (
    <div className="app">
    <BrowserRouter>
      <Routes>
        <Route path="/user/:userId" element={<Dashboard />} />
        <Route path="/profil" element={<Error />} />
        <Route path="/règlage" element={<Error />} />
        <Route path="/communauté" element={<Error />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
