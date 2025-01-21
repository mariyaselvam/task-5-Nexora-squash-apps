import "./styles/bootstrap/bootstrap.css"
import "./styles/global/style.css"
import "./styles/global/responsive-tab-view.css"
import { HomeOne } from "./pages/HomeOne";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pages from "./pages/Pages";
import AboutPage from "./pages/AboutPage";
import ContactUsPage from "./pages/ContactUsPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
         <Routes>
          <Route path="/" element={<HomeOne />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/blog-listing" element={<BlogPage />} />
          <Route path="/blog-detail" element={<BlogDetailPage />} />
         </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
