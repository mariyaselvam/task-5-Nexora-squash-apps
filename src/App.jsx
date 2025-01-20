import "./styles/bootstrap/bootstrap.css"
import "./styles/global/style.css"
import "./styles/global/responsive-tab-view.css"
import { HomeOne } from "./pages/HomeOne";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pages from "./pages/Pages";
import AboutPage from "./pages/AboutPage";
import ContactUsPage from "./pages/ContactUsPage";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
         <Routes>
          <Route path="/" element={<HomeOne />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
         </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
