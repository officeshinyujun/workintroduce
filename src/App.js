import './App.css';
import MainPage from "./pages/main";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/workintroduce/" element={<MainPage/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
