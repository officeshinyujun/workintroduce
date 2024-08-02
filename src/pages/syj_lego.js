import React, { useState } from "react";
import FsLightbox from 'fslightbox-react';
import sideView from "../image/sideView.jpg";
import Header from "../component/header";
import "../design/main.css";
import {Link} from "react-router-dom";
import logo from "../image/Instagram-Logo.wine.svg";

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
                        sideView,
                        'https://i.imgur.com/3egL60k.jpg',
                        'https://i.imgur.com/RpzrMR2.jpg'
                    ]}
                    slide={firstLightboxController.slide}
                />

                <FsLightbox
                    toggler={secondLightboxController.toggler}
                    sources={[
                        'https://i.imgur.com/3egL60k.jpg',
                        'https://i.imgur.com/RpzrMR2.jpg',
                        sideView
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
                        <img src={sideView} alt="Side view" style={{width: "100%"}}/>
                        <h1>Benz actrocs</h1>
                        <div style={{
                            margin: "20px",
                            justifyContent: "center",
                            display: "flex",
                            alignItems: 'center',
                            flexDirection: "column",
                        }}>
                            <p>글글글그르그그를르르르르르르그를르그ㅏ르가르가르가륵르</p>
                            <img src={sideView} alt="Side view" style={{width: "150px", maxHeight: "150px"}}
                                 onClick={() => openFirstLightboxOnSlide(1)}/>
                            <p>글글글그르그그를르르르르르르그를르그ㅏ르가르가르가륵르</p>
                            <img src={sideView} alt="Side view" style={{width: "150px", height: "150px"}}
                                 onClick={() => openFirstLightboxOnSlide(2)}/>
                            <p>글글글그르그그를르르르르르르그를르그ㅏ르가르가르가륵르</p>
                            <img src={sideView} alt="Side view" style={{width: "150px", height: "150px"}}
                                 onClick={() => openFirstLightboxOnSlide(3)}/>
                            <img src={sideView} alt="Side view" style={{width: "150px", height: "150px"}}
                                 onClick={() => openFirstLightboxOnSlide(3)}/>
                            <img src={sideView} alt="Side view" style={{width: "150px", height: "150px"}}
                                 onClick={() => openFirstLightboxOnSlide(3)}/>
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
                        <img src={sideView} alt="Side view" style={{width: "100%"}}/>
                        <div
                            style={{
                                margin: "20px",
                                justifyContent: "center",
                                display: "flex",
                                alignItems: 'center',
                                flexDirection: "column",

                            }}>
                            <h1>JEEP Wrangler</h1>
                            <p>글글글그르그그를르르르르르르그를르그ㅏ르가르가르가륵르</p>
                            <img src={sideView} alt="Side view" style={{width: "150px", height: "150px"}}
                                 onClick={() => openSecondLightboxOnSlide(1)}/>
                            <p>글글글그르그그를르르르르르르그를르그ㅏ르가르가르가륵르</p>
                            <img src={sideView} alt="Side view" style={{width: "150px", height: "150px"}}
                                 onClick={() => openSecondLightboxOnSlide(2)}/>
                            <p>글글글그르그그를르르르르르르그를르그ㅏ르가르가르가륵르</p>
                            <img src={sideView} alt="Side view" style={{width: "150px", height: "150px"}}
                                 onClick={() => openSecondLightboxOnSlide(3)}/>
                            <img src={sideView} alt="Side view" style={{width: "150px", height: "150px"}}
                                 onClick={() => openSecondLightboxOnSlide(3)}/>
                            <img src={sideView} alt="Side view" style={{width: "150px", height: "150px"}}
                                 onClick={() => openSecondLightboxOnSlide(3)}/>
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
