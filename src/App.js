import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Body from "./pages/Body";
import AddUser from "./pages/AddUser";
import LogIn from "./pages/LogIn";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login-in" element={<LogIn/>} />
          <Route path="/body" element={<Body/>} /> 
          <Route path="/add-user" element={<AddUser/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
