import React, { useState } from "react";
import FsLightbox from 'fslightbox-react';
import sideView from "../image/sideView.jpg";
import Header from "../component/header";
import "../design/main.css";
import {Link} from "react-router-dom";
import haedam11 from "../image/haedam/KakaoTalk_Photo_2024-07-31-22-47-31 001.jpeg"
import haedam12 from "../image/haedam/KakaoTalk_Photo_2024-07-31-22-47-32 002.jpeg"
import haedam13 from "../image/haedam/KakaoTalk_Photo_2024-07-31-22-47-32 003.jpeg";
import haedam14 from "../image/haedam/KakaoTalk_Photo_2024-07-31-22-47-32 004.jpeg"
import haedam21 from "../image/haedam/KakaoTalk_Photo_2024-07-31-22-47-48 001.jpeg"
import haedam22 from "../image/haedam/KakaoTalk_Photo_2024-07-31-22-47-48 002.jpeg";
import haedam23 from "../image/haedam/KakaoTalk_Photo_2024-07-31-22-47-48 003.jpeg"
import haedam24 from "../image/haedam/KakaoTalk_Photo_2024-07-31-22-47-48 004.jpeg";
import haedam25 from "../image/haedam/KakaoTalk_Photo_2024-07-31-22-47-48 005.jpeg"

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
                <div className="main-work-box-haedam1"  onClick={openModal}>
                    <h1 style={{ color: "white" }}>Clone Trooper</h1>
                </div>

                <div className="main-work-box-haedam2" onClick={openModal2}>
                    <h1 style={{ color: "white" }}>C-3PO & R2-D2</h1>
                </div>

                <FsLightbox
                    toggler={firstLightboxController.toggler}
                    sources={[
                        haedam13,
                        haedam12,
                        haedam13,
                        haedam11
                    ]}
                    slide={firstLightboxController.slide}
                />

                <FsLightbox
                    toggler={secondLightboxController.toggler}
                    sources={[
                        haedam21,
                        haedam22,
                        haedam23,
                        haedam24,
                        haedam25
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
                <p><Link to={"/workintroduce/"} style={{textDecoration:"none", color:"white"}}>syj_lego's work</Link></p>
            </div>


            {modalOpen && (
                <div className="modal-container">
                    <div className="modal-content">
                        <img src={haedam11} alt="Side view" style={{width: "100%"}}/>
                        <h1>Clone Trooper</h1>
                        <div style={{
                            margin: "20px",
                            justifyContent: "center",
                            display: "flex",
                            alignItems: 'center',
                            flexDirection: "column",
                        }}>
                            <img src={haedam14} alt="Side view" style={{width: "150px", maxHeight: "150px",}}
                                 onClick={() => openFirstLightboxOnSlide(1)}/>
                            <p>이 작품은 [스타워즈]라는 거대 프랜차이즈에 등장하는 '클론트루퍼'를 모티브로 한 것입니다. 클론트루퍼는 페이즈 1 버전과 페이즈 2 버전으로 나뉘는데, 제가 만든 작품은 페이즈 1 버전의 클론트루퍼 헬멧입니다.</p>
                            <p style={{color: "gray"}}>This piece is inspired by the "Clone Trooper" from the massive "Star Wars" franchise. Clone Troopers are divided into Phase 1 and Phase 2 versions, and the work I've created is of a Phase 1 Clone Trooper helmet.
                            </p>
                            <div style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "row",
                                gap: "10px"
                            }}>
                                <img src={haedam12} alt="Side view" style={{width: "100px", maxHeight: "100px"}}
                                     onClick={() => openFirstLightboxOnSlide(2)}/>
                                <img src={haedam13} alt="Side view" style={{width: "100px", height: "100px"}}
                                     onClick={() => openFirstLightboxOnSlide(3)}/>
                            </div>
                            <p>작중에서 클론트루퍼는 주인공인 제다이들을 보호하고 함께 전투에 참가하는 군인들로 등장합니다. 그들은 전장에서 엄청난 병사들로서 한꺼번에 나타나는 장면들이 인상적입니다.</p>
                            <p style={{color: "gray"}}>In the series, Clone Troopers protect the protagonists, the Jedi, and participate in battles alongside them. They are depicted as formidable soldiers who appear en masse in impressive battle scenes.</p>
                            <img src={haedam11} alt="Side view" style={{width: "150px", height: "150px"}}
                                 onClick={() => openFirstLightboxOnSlide(3)}/>
                            <p>이번 작품에서는 클론트루퍼의 전신이 아닌 헬멧만 표현했습니다. 시간적인 제약이 있었기에 급하게 전체를 만들기보다는, 나중에 더 많은 시간을 투자하여 더욱 멋진 작품을 만드는 것이 좋겠다고 판단했습니다. 특히, 이 작품은 stud.io 2.0을 사용해 처음으로 제작한 후 실물로 복원한 것이라 더욱 의미가 있습니다.</p>
                            <p style={{color: "gray"}}>For this project, I chose to represent only the helmet of the Clone Trooper rather than the entire body. Given time constraints, I decided it was better to invest more time later to create a more impressive piece rather than rushing to complete the whole figure. This work is particularly meaningful to me as it is the first one I created using stud.io 2.0 and then recreated in physical form.
                            </p>
                            <p>작품은 비록 작지만, 재미있게 감상해주셨으면 좋겠습니다. 감사합니다.</p>
                            <p style={{color: "gray"}}>Though it is a small piece, I hope you enjoy it. Thank you.</p>

                            <p onClick={() => setModalOpen(false)}>X</p>
                        </div>
                    </div>
                </div>
            )}

            {modalOpen2 && (
                <div className="modal-container">
                <div className="modal-content">
                        <img src={haedam21} alt="Side view" style={{width: "100%"}} onClick={() => openSecondLightboxOnSlide(1)}/>
                        <div
                            style={{
                                margin: "20px",
                                justifyContent: "center",
                                display: "flex",
                                alignItems: 'center',
                                flexDirection: "column",

                            }}>
                            <h1>C-3PO & R2-D2</h1>
                            <p> 이 작품은 [스타워즈] 시리즈의 마스코트 캐릭터인 'C-3PO'와 'R2-D2'를 표현한 레고 창작품입니다. 레고에서 신제품으로 이 두 캐릭터를 출시했지만,
                                가격이 비싸 직접 제작하게 되었습니다. 작은 사이즈의 작품을 좋아해 크기도 작게 만들었습니다.</p>

                            <p style={{color: "gray"}}>This work is a LEGO creation expressing the mascot characters
                                'C-3PO' and 'R2-D2' from the [Star Wars] series. LEGO released these two characters as
                                new products, but since they were expensive, I decided to make them myself. I like
                                small-sized creations, so I made them small as well.</p>

                            <img src={haedam22} alt="Side view" style={{width: "150px", height: "150px"}}
                                 onClick={() => openSecondLightboxOnSlide(2)}/>
                            <p>C-3PO와 R2-D2는 스타워즈 시리즈에서 항상 등장하며 큰 인기를 끌고 있습니다. 두 캐릭터는 유머를 통해 영화에 재미를 더해주고, 시리즈의 마스코트로 자리
                                잡았습니다.
                            </p>
                            <p style={{color: "gray"}}> C-3PO and R2-D2 always appear in the Star Wars series and are
                                very popular. These two characters add humor to the movies and have become mascots of
                                the series.
                            </p>
                            <img src={haedam23} alt="Side view" style={{width: "150px", height: "150px"}}
                                 onClick={() => openSecondLightboxOnSlide(3)}/>
                            <p> C-3PO의 머리 부분 제작이 가장 어려웠습니다. 작은 크기에도 불구하고 디테일을 표현하려다 보니 시행착오가 있었지만, 귀엽게 완성되었습니다.
                            </p>
                            <p style={{color: "gray"}}> The most challenging part was creating C-3PO's head. Despite the
                                small size, I had to include all the details, which involved some trial and error, but
                                I'm glad it turned out cute.
                            </p>
                            <img src={haedam24} alt="Side view" style={{width: "150px", height: "150px"}}
                                 onClick={() => openSecondLightboxOnSlide(4)}/>
                            <p> R2-D2의 둥근 머리 표현도 고민이 많았지만, 해외 창작품들을 참고하여 저만의 스타일로 만들었습니다. 원하는 크기에 맞춰 귀엽게 완성된 것에 매우 만족합니다.</p>
                            <p style={{color: "gray"}}> There was also a lot of consideration for representing R2-D2's rounded head. I referred to many overseas creations and made it in my own style. I'm very satisfied that it turned out cute and to the size I wanted.</p>
                            <img src={haedam25} alt="Side view" style={{width: "150px", height: "150px"}}
                                 onClick={() => openSecondLightboxOnSlide(5)}/>
                            <p> 지금까지 C-3PO와 R2-D2 작품 소개였습니다. 제 작품을 감상하시며 즐거운 시간을 보내시길 바랍니다. 감사합니다.</p>
                            <p style={{color: "gray"}}> This was the introduction to my C-3PO and R2-D2 creations. I hope you enjoy viewing my works and have a pleasant time. Thank you.</p>

                            <p onClick={() => setModalOpen2(false)}>X</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default MainPage;
