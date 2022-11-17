import { BrowserRouter, Routes, Route } from "react-router-dom";
import Capture from "./Pages/Capture/Capture";
import HomePage from "./Pages/HomePage/HomePage";
import Layout from "./Pages/Layout";
import Result from "./Pages/Result/Result";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/" element={<Layout />}>
          <Route path="capture" element={<Capture />} />
          <Route path="result" element={<Result />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
