import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./domains/homepage/Homepage";

function App() {
  return (
    <BrowserRouter>
      {/* Layout */}
      <div className="overflow-x-hidden">
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
