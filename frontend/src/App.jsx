import { Home } from "./pages/home"
import { Record } from "./pages/record";
import {BrowserRouter,Routes, Route, Link} from "react-router-dom"
import { StatesProvider } from "./hooks/states"
import {Test} from './pages/test'

function App() {
  return(<StatesProvider>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/record" element={<Record/>}/>
    <Route path='/test' element={<Test/>} />
  </Routes>
  </BrowserRouter>
  </StatesProvider>
  );
}
export default App
