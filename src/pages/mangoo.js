import React, { useState } from "react";
import FsLightbox from 'fslightbox-react';
import sideView from "../image/sideView.jpg";
import Header from "../component/header";
import "../design/main.css";
import {Link} from "react-router-dom";
import mangoo11 from "../image/mangoo/KakaoTalk_Photo_2024-08-02-01-08-33 001.jpeg"
import mangoo12 from "../image/mangoo/KakaoTalk_Photo_2024-08-02-01-08-34 002.jpeg"
import mangoo13 from "../image/mangoo/KakaoTalk_Photo_2024-08-02-01-08-34 003.jpeg"
import mangoo14 from "../image/mangoo/KakaoTalk_Photo_2024-08-02-01-08-34 004.jpeg"
import mangoo21 from "../image/mangoo/KakaoTalk_Photo_2024-08-02-01-09-24 001.jpeg"
import mangoo22 from "../image/mangoo/KakaoTalk_Photo_2024-08-02-01-09-24 002.jpeg"
import mangoo23 from "../image/mangoo/KakaoTalk_Photo_2024-08-02-01-09-24 003.jpeg"
import logo from "../image/Instagram-Logo.wine.svg"

function MainPage() {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalOpen2, setModalOpen2] = useState(false);

    const [firstLightboxController, setFirstLightboxController] = useState({
        toggler: false,
        slide: 1
    });

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
                <div className="main-work-box-mangoo1" onClick={openModal}>
                    <h1 style={{ color: "white" }}>Mars rover Opportunity</h1>
                </div>

                <div className="main-work-box-mangoo2" onClick={openModal2}>
                    <h1 style={{ color: "white" }}>Barad-dûr</h1>
                </div>

                <FsLightbox
                    toggler={firstLightboxController.toggler}
                    sources={[
                        mangoo11,
                        mangoo12,
                        mangoo13,
                        mangoo14
                    ]}
                    slide={firstLightboxController.slide}
                />

                <FsLightbox
                    toggler={secondLightboxController.toggler}
                    sources={[
                        mangoo21,
                        mangoo22,
                        mangoo23
                    ]}
                    slide={secondLightboxController.slide}
                />
            </div>
            <div style={{width:'100%',justifyContent:"center", alignItems:'center', display:"flex"}} >
                <button className="button"><Link to={"/workintroduce/comment"} style={{textDecoration:"none", color:"white"}}>comment</Link></button>
            </div>
            <div className="footer">
                <h3>other creaters</h3>
                <p><Link to={"/workintroduce/wxvin"} style={{textDecoration:"none", color:"white"}}>wxvin's work</Link></p>
                <p><Link to={"/workintroduce/"} style={{textDecoration:"none", color:"white"}}>syj_lego's work</Link></p>
                <p><Link to={"/workintroduce/haedam"} style={{textDecoration:"none", color:"white"}}>headam's work</Link></p>
            </div>


            {modalOpen && (
                <div className="modal-container">
                    <div className="modal-content">
                        <img src={mangoo11} alt="Side view" style={{width: "100%"}}/>
                        <h1>Mars rover Opportunity</h1>
                        <div style={{
                            margin: "20px",
                            justifyContent: "center",
                            display: "flex",
                            alignItems: 'center',
                            flexDirection: "column",
                        }}>
                            <img src={mangoo11} alt="Side view" style={{width: "150px", maxHeight: "150px"}}
                                 onClick={() => openFirstLightboxOnSlide(1)}/>
                            <img src={mangoo12} alt="Side view" style={{width: "150px", height: "150px"}}
                                 onClick={() => openFirstLightboxOnSlide(2)}/>
                            <p>NASA의 화성 탐사 로버 Opportunity는 2004년 1월 착륙해 15년 동안 활동했습니다. 45.16km를 주행하며, 물이 존재했을 가능성을 시사하는
                                증거를 발견하고, 화성의 지질과 기후를 연구했습니다. 2018년 모래 폭풍으로 통신이 두절되어 2019년 임무가 종료되었습니다.</p>
                            <p style={{color: "gray"}}>NASA's Mars rover Opportunity landed in January 2004 and operated
                                for 15 years. It traveled 45.16 km, discovering evidence suggesting the presence of
                                water and studying Mars' geology and climate. Communication was lost in a 2018 dust
                                storm, leading to the mission's end in 2019.
                            </p>
                            <img src={mangoo13} alt="Side view" style={{width: "150px", height: "150px"}}
                                 onClick={() => openFirstLightboxOnSlide(3)}/>
                            <img src={mangoo14} alt="Side view" style={{width: "150px", height: "150px"}}
                                 onClick={() => openFirstLightboxOnSlide(4)}/>
                            <p>NASA Opportunity Rover 활동 연표
                                2004

                                1월 25일: Opportunity, 메리디아니 플라눔에 착륙.
                                2월: 골드니 크레이터 탐사 시작.
                                3월: 물이 존재했을 가능성을 시사하는 황산염 광물 발견.
                                5월: 엔데버 크레이터로 이동 시작.
                                2005

                                4월: 엔데버 크레이터 탐사 완료.
                                10월: 빅토리아 크레이터 도달 및 탐사 시작.
                                2006

                                12월: 빅토리아 크레이터 주변에서 파노라마 이미지 촬영.
                                2008

                                8월: 인류 역사상 화성 표면에서 가장 많은 거리 주행 기록 경신.
                                2011

                                8월: 엔데버 크레이터 도달.
                                2013

                                5월: 새로운 장비로 화성 표면 분석 시작.
                                2015

                                3월: 기계적 문제로 인한 일시적인 통신 두절 발생.
                                2018

                                6월: 대규모 모래 폭풍 발생으로 통신 두절.
                                2019
                                2월 13일: NASA, Opportunity 임무 공식 종료 선언.
                            </p>
                            <p style={{color: "gray"}}>
                                NASA Opportunity Rover Activity Timeline

                                **2004**
                                - **Jan 25**: Opportunity lands in Meridiani Planum.
                                - **Feb**: Begins exploration of Eagle Crater.
                                - **Mar**: Discovers sulfate minerals indicating past water presence.
                                - **May**: Starts journey to Endurance Crater.

                                **2005**
                                - **Apr**: Completes exploration of Endurance Crater.
                                - **Oct**: Reaches Victoria Crater and begins exploration.

                                **2006**
                                - **Dec**: Captures panoramic images around Victoria Crater.

                                **2008**
                                - **Aug**: Breaks the record for the longest distance driven on Mars.

                                **2011**
                                - **Aug**: Reaches Endeavour Crater.

                                **2013**
                                - **May**: Begins surface analysis with new instruments.

                                **2015**
                                - **Mar**: Experiences temporary communication loss due to mechanical issues.

                                **2018**
                                - **Jun**: Loses communication due to a massive dust storm.

                                **2019**
                                - **Feb 13**: NASA officially declares the end of Opportunity's mission.


                            </p>
                            <div style={{width: '100%', display: "flex", flexDirection: "row", alignItems: "center"}}>
                                <a href={"https://www.instagram.com/min_bricks"}
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
                        <img src={mangoo21} alt="Side view" style={{width: "100%"}}/>
                        <div
                            style={{
                                margin: "20px",
                                justifyContent: "center",
                                display: "flex",
                            alignItems: 'center',
                            flexDirection: "column",

                        }}>
                        <h1>Barad-dûr</h1>
                        <img src={mangoo21} alt="Side view" style={{width: "150px", height: "150px"}}
                             onClick={() => openSecondLightboxOnSlide(1)}/>
                        <img src={mangoo22} alt="Side view" style={{width: "150px", height: "150px"}}
                             onClick={() => openSecondLightboxOnSlide(2)}/>
                        <img src={mangoo23} alt="Side view" style={{width: "150px", height: "150px"}}
                             onClick={() => openSecondLightboxOnSlide(3)}/>
                        <p>반지의 제왕: 바랏두르 성의 미니어처입니다</p>
                        <p style={{color: "gray"}}>The miniature version of the Lord of the Rings Barad-dûr. </p>
                        <div style={{width:'100%', display:"flex", flexDirection:"row", alignItems:"center"}}>
                            <a href={"https://www.instagram.com/min_bricks"}
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
