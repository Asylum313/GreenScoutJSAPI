import "./App.css";
import Login from "./components/loginpage/Login";
import Home from "./components/homepage/Home";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import { nanoid } from "nanoid";

function App () {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Login/>}/>
                <Route path="/home" element={<Home/>}/>
            </Routes>
        </Router>
    )
}

export default App;