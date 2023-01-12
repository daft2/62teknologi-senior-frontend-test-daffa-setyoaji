import { BrowserRouter, Route, Routes } from "react-router-dom";
import Business from "./domains/business/Business";
import Homepage from "./domains/homepage/Homepage";

function App() {
  return (
    <BrowserRouter>
      {/* Layout */}
      <div className="overflow-x-hidden h-screen bg-neutral-50 font-robotoMono font-bold tracking-tight">
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/:businessId" element={<Business />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
