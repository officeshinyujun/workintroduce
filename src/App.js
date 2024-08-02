import './App.css';
import MainPage from "./pages/main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WxvinPage from "./pages/wxvin";
import MangooPage from "./pages/mangoo";
import HaedamPage from "./pages/haedam";
import Comment from "./pages/comment";
import Syj_legoPage from "./pages/syj_lego";

function App() {
    return (
        <Router >
            <Routes basename ="/workintroduce">
                <Route exact path="/workintroduce/" element={<MainPage />} />
                <Route path="/workintroduce/syj_lego" element={<Syj_legoPage />} />
                <Route path="/workintroduce/wxvin" element={<WxvinPage />} />
                <Route path="/workintroduce/mangoo" element={<MangooPage />} />
                <Route path="/workintroduce/haedam" element={<HaedamPage />} />
                <Route path="/workintroduce/comment" element={<Comment />} />
            </Routes>
        </Router>
    );
}

export default App;
