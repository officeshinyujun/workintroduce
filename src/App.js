import './App.css';
import MainPage from "./pages/main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import WxvinPage from "./pages/wxvin";
import MangooPage from "./pages/mangoo";
import HaedamPage from "./pages/haedam";
import Comment from "./pages/comment";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/workintroduce/" element={<MainPage/>}/>
            <Route path="/workintroduce/wxvin" element={<WxvinPage/>}/>
            <Route path="/workintroduce/mangoo" element={<MangooPage/>}/>
            <Route path="/workintroduce/haedam" element={<HaedamPage/>}/>
            <Route path="/workintroduce/comment" element={<Comment/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
