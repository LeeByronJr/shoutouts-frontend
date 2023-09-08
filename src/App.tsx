import "./App.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import ShoutoutsByNameRoute from "./components/ShoutoutsByNameRoute";
import HomeRoute from "./components/HomeRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/user/:name" element={<ShoutoutsByNameRoute />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
