import { Home } from "./pages/home"
import { Record } from "./pages/record";
import {BrowserRouter,Routes, Route, Link} from "react-router-dom"
import { StatesProvider } from "./hooks/states"

function App() {
  return(<StatesProvider>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/record" element={<Record/>}/>
  </Routes>
  </BrowserRouter>
  </StatesProvider>
  );
}
export default App
