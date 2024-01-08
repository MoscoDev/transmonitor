import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route
        path="/*"
        element={
          <div className="flex justify-center items-center h-screen flex-col">
            <h1 className="text-9xl text-brand-blue">404</h1>
            <p>Sorry nothing is on this route</p>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
