import "./styles/bootstrap/bootstrap.css"
import "./styles/global/style.css"
import "./styles/global/responsive-tab-view.css"
import { HomeOne } from "./pages/HomeOne";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
         <Routes>
          <Route path="/" element={<HomeOne />} />
         </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
