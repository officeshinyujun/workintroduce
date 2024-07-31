import {React} from 'react'
import "../design/header.css"
function Header() {
    let url = window.location.pathname;
    let what = ' ';
    if (url === '/workintroduce'){
        what = 'syj_lego'
    }
    else if (url === '/workintroduce/'){
        what = 'syj_lego'
    }
    else if (url === '/workintroduce/wxvin'){
        what = 'wxvin'
    }
    else if (url === '/workintroduce/mangoo'){
        what = 'mangoo'
    }
    else if (url === '/workintroduce/haedam'){
        what = 'haedam'
    }
    else{
        what ='error'
    }
    return(
        <>
            <div className="header-container">
                <div style={{fontWeight:"bold", fontSize:"30px"}}>{what}'s work</div>
            </div>
        </>
    )
}
export default Header;