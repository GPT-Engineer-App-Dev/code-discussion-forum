import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Forum from "./pages/Forum.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/forum" element={<Forum />} />
      </Routes>
    </Router>
  );
}

export default App;