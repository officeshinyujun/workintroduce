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
                <p><Link to={"/workintroduce/syj_lego"} style={{textDecoration:"none", color:"white"}}>syj_lego's work</Link></p>
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
                            <p>
                                NASA Opportunity Rover 활동 연표<br/>
                                <br/>
                                2004<br/>
                                <br/>
                                1월 25일: Opportunity, 메리디아니 플라눔에 착륙.<br/>
                                2월: 골드니 크레이터 탐사 시작.<br/>
                                3월: 물이 존재했을 가능성을 시사하는 황산염 광물 발견.<br/>
                                5월: 엔데버 크레이터로 이동 시작.<br/>
                                <br/>
                                2005<br/>
                                <br/>
                                4월: 엔데버 크레이터 탐사 완료.<br/>
                                10월: 빅토리아 크레이터 도달 및 탐사 시작.<br/>
                                <br/>
                                2006<br/>
                                <br/>
                                12월: 빅토리아 크레이터 주변에서 파노라마 이미지 촬영.<br/>
                                <br/>
                                2008<br/>
                                <br/>
                                8월: 인류 역사상 화성 표면에서 가장 많은 거리 주행 기록 경신.<br/>
                                <br/>
                                2011<br/>
                                <br/>
                                8월: 엔데버 크레이터 도달.<br/>
                                <br/>
                                2013<br/>
                                <br/>
                                5월: 새로운 장비로 화성 표면 분석 시작.<br/>
                                <br/>
                                2015<br/>
                                <br/>
                                3월: 기계적 문제로 인한 일시적인 통신 두절 발생.<br/>
                                <br/>
                                2018<br/>
                                <br/>
                                6월: 대규모 모래 폭풍 발생으로 통신 두절.<br/>
                                <br/>
                                2019<br/>
                                <br/>
                                2월 13일: NASA, Opportunity 임무 공식 종료 선언.<br/>
                            </p>
                            <p style={{color: "gray"}}>
                                NASA Opportunity Rover Activity Timeline<br/>
                                <br/>
                                <strong>2004</strong><br/>
                                - <strong>Jan 25</strong>: Opportunity lands in Meridiani Planum.<br/>
                                - <strong>Feb</strong>: Begins exploration of Eagle Crater.<br/>
                                - <strong>Mar</strong>: Discovers sulfate minerals indicating past water presence.<br/>
                                - <strong>May</strong>: Starts journey to Endurance Crater.<br/>
                                <br/>
                                <strong>2005</strong><br/>
                                - <strong>Apr</strong>: Completes exploration of Endurance Crater.<br/>
                                - <strong>Oct</strong>: Reaches Victoria Crater and begins exploration.<br/>
                                <br/>
                                <strong>2006</strong><br/>
                                - <strong>Dec</strong>: Captures panoramic images around Victoria Crater.<br/>
                                <br/>
                                <strong>2008</strong><br/>
                                - <strong>Aug</strong>: Breaks the record for the longest distance driven on Mars.<br/>
                                <br/>
                                <strong>2011</strong><br/>
                                - <strong>Aug</strong>: Reaches Endeavour Crater.<br/>
                                <br/>
                                <strong>2013</strong><br/>
                                - <strong>May</strong>: Begins surface analysis with new instruments.<br/>
                                <br/>
                                <strong>2015</strong><br/>
                                - <strong>Mar</strong>: Experiences temporary communication loss due to mechanical
                                issues.<br/>
                                <br/>
                                <strong>2018</strong><br/>
                                - <strong>Jun</strong>: Loses communication due to a massive dust storm.<br/>
                                <br/>
                                <strong>2019</strong><br/>
                                - <strong>Feb 13</strong>: NASA officially declares the end of Opportunity's
                                mission.<br/>
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
                            <div style={{width: '100%', display: "flex", flexDirection: "row", alignItems: "center"}}>
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
