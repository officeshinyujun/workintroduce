import React, { useState } from "react";
import FsLightbox from 'fslightbox-react';
import sideView from "../image/sideView.jpg";
import Header from "../component/header";
import "../design/realmain.css";
import haedamphoto from  "../image/haedam/KakaoTalk_Photo_2024-07-31-22-47-31 001.jpeg"
import mangoophoto from "../image/mangoo/KakaoTalk_Photo_2024-08-02-01-08-33 001.jpeg"
import wxvinphoto from "../image/wxvin/KakaoTalk_Photo_2024-08-01-00-22-06 001.png"
import myphoto from "../image/sideView.jpg"
import Logomain from "../image/GitHub-Icon-White-Logo.wine.svg"
import {calculateNewValue} from "@testing-library/user-event/dist/utils";
import {Link} from "react-router-dom";

function MainPage() {
    return(
        <div className="main-page">
            <div>
                <h1 className="main-page-header">Work introduce</h1>
            </div>
            <div>
                <Link to="/workintroduce/mangoo">
                <div className="thisisimage">
                    <div className="imagebase">
                        <h1 style={{color:"white" ,marginRight:"20px"}}>jaewon's</h1>
                        <h1 style={{color:"white" ,marginRight:"20px"}}>work</h1>
                    </div>
                </div>
                </Link>
            </div>
            <div>
                <Link to="/workintroduce/syj_lego">
                    <div className="thisisimage2">
                        <div className="imagebase2">
                            <h1  style={{color:"white" ,marginLeft:"20px"}}>syj_lego's</h1>
                            <h1 style={{color:"white" ,marginLeft:"20px"}}>work</h1>
                        </div>
                    </div>
                </Link>
            </div>
            <div>
                <Link to="/workintroduce/wxvin">
                    <div className="thisisimage3">
                        <div className="imagebase">
                            <h1  style={{color:"white" ,marginRight:"20px"}}>vinjas's</h1>
                            <h1 style={{color:"white" ,marginRight:"20px"}}>work</h1>
                        </div>
                    </div>
                </Link>
            </div>
            <div>
                <Link to="/workintroduce/haedam">
                    <div className="thisisimage4">
                        <div className="imagebase2">
                            <h1  style={{color:"white" ,marginLeft:"20px"}}>haedam's</h1>
                            <h1 style={{color:"white" ,marginLeft:"20px"}}>work</h1>
                        </div>
                    </div>
                </Link>
            </div>
            <div>
                <div className="mainpage-footer">
                    <a href="https://github.com/officeshinyujun/workintroduce"><img src={Logomain} style={{width:"40px", height:"40px"}}/></a>
                    <h5>source</h5>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
