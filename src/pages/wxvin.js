import React, { useState } from "react";
import FsLightbox from 'fslightbox-react';
import sideView from "../image/sideView.jpg";
import Header from "../component/header";
import "../design/main.css";
import {Link} from "react-router-dom";
import wxvin11 from "../image/wxvin/KakaoTalk_Photo_2024-08-01-00-22-06 001.png"
import wxvin12 from "../image/wxvin/KakaoTalk_Photo_2024-08-01-00-22-06 002.png"
import wxvin13 from "../image/wxvin/KakaoTalk_Photo_2024-08-01-00-22-06 003.png"
import wxvin21 from "../image/wxvin/KakaoTalk_Photo_2024-08-01-00-22-24 001.png"
import wxvin22 from "../image/wxvin/KakaoTalk_Photo_2024-08-01-00-22-25 002.png"
import wxvin23 from "../image/wxvin/KakaoTalk_Photo_2024-08-01-00-22-25 003.png"
import wxvin24 from "../image/wxvin/KakaoTalk_Photo_2024-08-01-00-22-38.png"
import logo from "../image/Instagram-Logo.wine.svg";

function MainPage() {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalOpen2, setModalOpen2] = useState(false);

    const [firstLightboxController, setFirstLightboxController] = useState({
        toggler: false,
        slide: 1
    });

    console.log(window.location.pathname)

    const openFirstLightboxOnSlide = (slide) => {
        setFirstLightboxController({
            toggler: !firstLightboxController.toggler,
            slide: slide
        });
    };

    const [secondLightboxController, setSecondLightboxController] = useState({
        toggler: false,
        slide: 1
    });

    const openSecondLightboxOnSlide = (slide) => {
        setSecondLightboxController({
            toggler: !secondLightboxController.toggler,
            slide: slide
        });
    };

    const openModal = () => {
        setModalOpen(true);
    };

    const openModal2 = () =>{
        setModalOpen2(true)
    }

    return (
        <>
            <Header />
            <div className="main-container">
                <div className="main-work-box-wxvin1" onClick={openModal}>
                    <h1 style={{ color: "white" }}>Clash Royal - Spaky</h1>
                </div>

                <div className="main-work-box-wxvin2" onClick={openModal2}>
                    <h1 style={{color: "white", textAlign:"center"}}>Optimus Frime & Megatron</h1>
                </div>

                <FsLightbox
                    toggler={firstLightboxController.toggler}
                    sources={[
                        wxvin11,
                        wxvin12,
                        wxvin13
                    ]}
                    slide={firstLightboxController.slide}
                />

                <FsLightbox
                    toggler={secondLightboxController.toggler}
                    sources={[
                        wxvin21,
                        wxvin22,
                        wxvin23,
                        wxvin24
                    ]}
                    slide={secondLightboxController.slide}
                />
            </div>
            <div style={{width:'100%',justifyContent:"center", alignItems:'center', display:"flex"}} >
                <button className="button"><Link to={"/workintroduce/comment"} style={{textDecoration:"none", color:"white"}}>comment</Link></button>
            </div>
            <div className="footer">
                <h3>other creaters</h3>
                <p><Link to={"/workintroduce/"} style={{textDecoration:"none", color:"white"}}>syj_lego's work</Link></p>
                <p><Link to={"/workintroduce/mangoo"} style={{textDecoration:"none", color:"white"}}>mangoo's work</Link></p>
                <p><Link to={"/workintroduce/haedam"} style={{textDecoration:"none", color:"white"}}>headam's work</Link></p>
            </div>


            {modalOpen && (
                <div className="modal-container">
                    <div className="modal-content">
                        <img src={wxvin11} alt="Side view" style={{width: "100%"}}/>
                        <h1>Clash Royal - Spaky</h1>
                        <div style={{
                            margin: "20px",
                            justifyContent: "center",
                            display: "flex",
                            alignItems: 'center',
                            flexDirection: "column",
                        }}>
                            <p>클래시 로얄의 스파키를 모티브로 만들었습니다. </p>
                            <img src={wxvin11} alt="Side view"
                                 style={{width: "150px", maxHeight: "150px", marginBottom: "20px"}}
                                 onClick={() => openFirstLightboxOnSlide(1)}/>
                            <img src={wxvin12} alt="Side view"
                                 style={{width: "150px", height: "150px", marginBottom: "20px"}}
                                 onClick={() => openFirstLightboxOnSlide(2)}/>
                            <img src={wxvin13} alt="Side view" style={{width: "150px", height: "150px"}}
                                 onClick={() => openFirstLightboxOnSlide(3)}/>
                            <div style={{width: '100%', display: "flex", flexDirection: "row", alignItems: "center"}}>
                                <a href={"https://www.instagram.com/vinjas.kr/"}
                                   style={{textDecoration: "none", color: "black"}}>
                                    <img src={logo} style={{width: '50px', height: '50px'}}/>
                                </a>
                                <div> - creater's instargram</div>
                            </div>
                            <p onClick={() => setModalOpen(false)}>X</p>
                        </div>
                    </div>
                </div>
            )}

            {modalOpen2 && (
                <div className="modal-container">
                    <div className="modal-content">
                        <img src={wxvin21} alt="Side view" style={{width: "100%"}}/>
                        <div
                            style={{
                                margin: "20px",
                                justifyContent: "center",
                                display: "flex",
                                alignItems: 'center',
                                flexDirection: "column",

                            }}>
                            <h1 style={{textAlign: "center"}}>Optimus Frime & Megatron</h1>
                            <p>트랜스포머 5 최후의 기사에 나온 옵티머스와 메가트론 입니다</p>
                            <p style={{color: "gray"}}>These are Optimus and Megatron from Transformers 5 The Last
                                Knight.</p>
                            <img src={wxvin21} alt="Side view" style={{width: "200px", height: "150px"}}
                                 onClick={() => openSecondLightboxOnSlide(1)}/>
                            <img src={wxvin22} alt="Side view" style={{width: "200px", height: "150px"}}
                                 onClick={() => openSecondLightboxOnSlide(2)}/>
                            <img src={wxvin23} alt="Side view" style={{width: "200px", height: "150px"}}
                                 onClick={() => openSecondLightboxOnSlide(3)}/>
                            <img src={wxvin24} alt="Side view" style={{width: "200px", height: "150px"}}
                                 onClick={() => openSecondLightboxOnSlide(4)}/>
                            <div style={{width: '100%', display: "flex", flexDirection: "row", alignItems: "center"}}>
                                <a href={"https://www.instagram.com/vinjas.kr"}
                                   style={{textDecoration: "none", color: "black"}}>
                                    <img src={logo} style={{width: '50px', height: '50px'}}/>
                                </a>
                                <div> - creater's instargram</div>
                            </div>
                            <p onClick={() => setModalOpen2(false)}>X</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default MainPage;
