import React, { useState } from "react";
import FsLightbox from 'fslightbox-react';
import sideView from "../image/sideView.jpg";
import Header from "../component/header";
import "../design/main.css";
import {Link} from "react-router-dom";
import logo from "../image/Instagram-Logo.wine.svg";
import s10 from "../image/syj_lego/KakaoTalk_Photo_2024-08-02-22-05-31 001.jpeg"
import s11 from "../image/syj_lego/KakaoTalk_Photo_2024-08-02-22-05-31 002.jpeg"
import s12 from "../image/syj_lego/KakaoTalk_Photo_2024-08-02-22-05-32 003.jpeg"
import s13 from "../image/syj_lego/KakaoTalk_Photo_2024-08-02-22-05-32 004.jpeg"
import s15 from "../image/syj_lego/KakaoTalk_Photo_2024-08-02-22-05-32 005.jpeg"
import s16 from "../image/syj_lego/KakaoTalk_Photo_2024-08-02-22-05-32 006.jpeg"
import s17 from "../image/syj_lego/KakaoTalk_Photo_2024-08-02-22-05-32 007.jpeg"
import s18 from "../image/syj_lego/KakaoTalk_Photo_2024-08-02-22-05-32 008.jpeg"
import s19 from "../image/syj_lego/KakaoTalk_Photo_2024-08-02-22-05-32 009.jpeg"
import s1a from "../image/syj_lego/KakaoTalk_Photo_2024-08-02-22-05-32 010.jpeg"
import s1b from "../image/syj_lego/KakaoTalk_Photo_2024-08-02-22-05-32 011.jpeg"
import s20 from "../image/syj_lego/KakaoTalk_Photo_2024-08-02-22-04-23 001.jpeg"
import s21 from "../image/syj_lego/KakaoTalk_Photo_2024-08-02-22-04-23 002.jpeg"
import s22 from "../image/syj_lego/KakaoTalk_Photo_2024-08-02-22-04-23 003.jpeg"
import s23 from "../image/syj_lego/KakaoTalk_Photo_2024-08-02-22-04-23 004.jpeg"
import s24 from "../image/syj_lego/KakaoTalk_Photo_2024-08-02-22-04-23 005.jpeg"
import s25 from "../image/syj_lego/KakaoTalk_Photo_2024-08-02-22-04-23 006.jpeg"


function Syj_legoPage() {
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
                <div className="main-work-box1" onClick={openModal}>
                    <h1 style={{ color: "white" }}>Benz actrocs</h1>
                </div>

                <div className="main-work-box" onClick={openModal2}>
                    <h1 style={{ color: "white" }}>JEEP Wrangler</h1>
                </div>

                <FsLightbox
                    toggler={firstLightboxController.toggler}
                    sources={[
                        s10,
                        s11,
                        s12,
                        s13,
                        s15,
                        s16,
                        s17,
                        s18,
                        s19,
                        s1a,
                        s1b
                    ]}
                    slide={firstLightboxController.slide}
                />

                <FsLightbox
                    toggler={secondLightboxController.toggler}
                    sources={[
                        s20,
                        s21,
                        s22,
                        s23,
                        s24,
                        s25,
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
                <p><Link to={"/workintroduce/mangoo"} style={{textDecoration:"none", color:"white"}}>mangoo's work</Link></p>
                <p><Link to={"/workintroduce/haedam"} style={{textDecoration:"none", color:"white"}}>headam's work</Link></p>
            </div>


            {modalOpen && (
                <div className="modal-container">
                    <div className="modal-content">
                        <img src={s11} alt="Side view" style={{width: "100%"}}/>
                        <h1>Benz actrocs</h1>
                        <div style={{
                            margin: "20px",
                            justifyContent: "center",
                            display: "flex",
                            alignItems: 'center',
                            flexDirection: "column",
                        }}>
                            <p>보여드릴 작품은 벤츠 악트록스 캠핑카 1:10입니다, 8륜의 구동계를 가지고 있고, 그로 인해 험지주행에서도 탁월한 성능을 발휘합니다. 4개의 xl모터와 1개의
                                l모터로 구동계를 구성하며, 2개의 l모터로 어닝과 위의 발코니를 동작시킵니다.</p>
                            <p style={{color: 'gray'}}>The work I'm going to show you is a 1:10 Mercedes-Benz Actrox
                                camping car. It has an 8-wheel drivetrain, and as a result, it demonstrates excellent
                                performance even when driving on rough terrain. The drive system consists of 4 xl motors
                                and 1 l motor, and 2 l motors operate the awning and upper balcony.</p>
                            <img src={s11} alt="Side view" style={{width: "150px", maxHeight: "150px"}}
                                 onClick={() => openFirstLightboxOnSlide(2)}/>
                            <img src={s12} alt="Side view" style={{width: "150px", maxHeight: "150px"}}
                                 onClick={() => openFirstLightboxOnSlide(3)}/>
                            <img src={s13} alt="Side view" style={{width: "150px", maxHeight: "150px"}}
                                 onClick={() => openFirstLightboxOnSlide(4)}/>
                            <p>작은 공간을 만들어서 안에 스노모빌도 탑재 가능합니다.</p>
                            <p style={{color: 'gray'}}>You can create a small space and even mount a snowmobile
                                inside.</p>
                            <img src={s15} alt="Side view" style={{width: "150px", maxHeight: "150px"}}
                                 onClick={() => openFirstLightboxOnSlide(5)}/>
                            <p>모든 어닝과 발코니와 세부 공간들을 펼치면 이런 느낌입니다.</p>
                            <p style={{color: 'gray'}}>This is what it looks like when all the awnings, balconies, and
                                detailed spaces are unfolded.</p>
                            <img src={s16} alt="Side view" style={{width: "150px", maxHeight: "150px"}}
                                 onClick={() => openFirstLightboxOnSlide(6)}/>
                            <img src={s17} alt="Side view" style={{width: "150px", maxHeight: "150px"}}
                                 onClick={() => openFirstLightboxOnSlide(7)}/>
                            <p>내부 공간도 꽤 디테일하게 재현하였습니다.</p>
                            <p style={{color: 'gray'}}>The interior space has also been recreated in considerable
                                detail.</p>
                            <img src={s18} alt="Side view" style={{width: "150px", maxHeight: "150px"}}
                                 onClick={() => openFirstLightboxOnSlide(8)}/>
                            <img src={s19} alt="Side view" style={{width: "150px", maxHeight: "150px"}}
                                 onClick={() => openFirstLightboxOnSlide(9)}/>
                            <img src={s1a} alt="Side view" style={{width: "150px", maxHeight: "150px"}}
                                 onClick={() => openFirstLightboxOnSlide(10)}/>
                            <img src={s1b} alt="Side view" style={{width: "150px", maxHeight: "150px"}}
                                 onClick={() => openFirstLightboxOnSlide(11)}/>
                            <p>감상해주셔서 감사합니다.</p>
                            <p style={{color: 'gray'}}>Thank you for watching.</p>
                            <div style={{width: '100%', display: "flex", flexDirection: "row", alignItems: "center"}}>
                                <a href={"https://www.instagram.com/syj_lego/"}
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
                        <img src={s25} alt="Side view" style={{width: "100%"}}/>
                        <div
                            style={{
                                margin: "20px",
                                justifyContent: "center",
                                display: "flex",
                                alignItems: 'center',
                                flexDirection: "column",

                            }}>
                            <h1>JEEP Wrangler</h1>
                            <p>지프 랭글러 LJ 1:19 모델입니다. 4x4구동계를 가지고 있고, xl모터 두개와 서보모터 한개로 구동부를 구성하였습니다.</p>
                            <img src={s20} alt="Side view" style={{width: "150px", height: "150px"}}
                                 onClick={() => openSecondLightboxOnSlide(1)}/>
                            <img src={s21} alt="Side view" style={{width: "150px", height: "150px"}}
                                 onClick={() => openSecondLightboxOnSlide(2)}/>
                            <img src={s22} alt="Side view" style={{width: "150px", height: "150px"}}
                                 onClick={() => openSecondLightboxOnSlide(3)}/>
                            <img src={s23} alt="Side view" style={{width: "150px", height: "150px"}}
                                 onClick={() => openSecondLightboxOnSlide(4)}/>
                            <img src={s24} alt="Side view" style={{width: "150px", height: "150px"}}
                                 onClick={() => openSecondLightboxOnSlide(5)}/>
                            <img src={s25} alt="Side view" style={{width: "150px", height: "150px"}}
                                 onClick={() => openSecondLightboxOnSlide(6)}/>
                            <div style={{width: '100%', display: "flex", flexDirection: "row", alignItems: "center"}}>
                                <a href={"https://www.instagram.com/syj_lego/"}
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

export default Syj_legoPage;
