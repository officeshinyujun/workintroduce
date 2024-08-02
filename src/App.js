import './App.css';
import MainPage from "./pages/main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WxvinPage from "./pages/wxvin";
import MangooPage from "./pages/mangoo";
import HaedamPage from "./pages/haedam";
import Comment from "./pages/comment";

function App() {
    return (
        <BrowserRouter basename="/workintroduce">
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/wxvin" element={<WxvinPage />} />
                <Route path="/mangoo" element={<MangooPage />} />
                <Route path="/haedam" element={<HaedamPage />} />
                <Route path="/comment" element={<Comment />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
