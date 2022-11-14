import { BrowserRouter, Routes, Route } from "react-router-dom";
import Capture from "./Pages/Capture";
import HomePage from "./Pages/HomePage";
import Layout from "./Pages/Layout";
import Result from "./Pages/Result";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="capture" element={<Capture />} />
          <Route path="result" element={<Result />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
