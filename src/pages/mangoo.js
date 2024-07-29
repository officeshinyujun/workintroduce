import React, { useState } from "react";
import FsLightbox from 'fslightbox-react';
import sideView from "../image/sideView.jpg";
import Header from "../component/header";
import "../design/main.css";
import {Link} from "react-router-dom";

function MangooPage() {
    const [modalOpen3, setModalOpen3] = useState(false);
    const [modalOpen4, setModalOpen4] = useState(false);

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
        setModalOpen3(true);
    };

    const openModal2 = () =>{
        setModalOpen4(true);
    }

    return (
        <>
            <Header/>

            <div className="main-container">
                <div className="main-work-box" onClick={openModal}>
                    <ul>
                        <li style={{marginRight: "0px"}}>
                            <img src={sideView} alt="Side view" style={{width: "150px", height: "150px"}}/>
                        </li>
                        <li>
                            <img src={sideView} alt="Side view" style={{width: "150px", height: "150px"}}/>
                        </li>
                        <li>
                            <img src={sideView} alt="Side view" style={{width: "150px", height: "150px"}}/>
                        </li>
                    </ul>
                    <h1 style={{color: "white"}}>Benz actrocs</h1>
                </div>

                <div className="main-work-box" onClick={openModal2}>
                    <ul>
                        <li>
                            <img src={sideView} alt="Side view" style={{width: "150px", height: "150px"}}/>
                        </li>
                        <li>
                            <img src={sideView} alt="Side view" style={{width: "150px", height: "150px"}}/>
                        </li>
                        <li>
                            <img src={sideView} alt="Side view" style={{width: "150px", height: "150px"}}/>
                        </li>
                    </ul>
                    <h1 style={{color: "white"}}>JEEP Wrangler</h1>
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
            <div className="footer">
                <h3>other creaters</h3>
                <p><Link to={"/workintroduce/wxvin"}>wxvin's work</Link></p>
                <p><Link to={"/workintroduce/"}>syj_lego's work</Link></p>
                <p><Link to={"/workintroduce/haedam"}>headam's work</Link></p>
            </div>

            {modalOpen3 && (
                <div className="modal-container">
                    <div className="modal-content">
                        <div style={{
                            margin: "20px",
                            justifyContent: "center",
                            display: "flex",
                            alignItems: 'center',
                            flexDirection: "column",
                            color: "white"
                        }}>
                            <img src={sideView} alt="Side view" style={{width: "150px", height: "150px"}}/>
                            <h1>Benz actrocs</h1>
                            <p>글글글그르그그를르르르르르르그를르그ㅏ르가르가르가륵르</p>
                            <img src={sideView} alt="Side view" style={{width: "150px", height: "150px"}}
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
                            <p onClick={() => setModalOpen3(false)} style={{color: "white"}}>X</p>
                        </div>
                    </div>
                </div>
            )}

            {modalOpen4 && (
                <div className="modal-container">
                    <div className="modal-content">
                        <div style={{
                            margin: "20px",
                            justifyContent: "center",
                            display: "flex",
                            alignItems: 'center',
                            flexDirection: "column",
                            color: "white"
                        }}>
                            <img src={sideView} alt="Side view" style={{width: "150px", height: "150px"}}/>
                            <h1>Benz actrocs</h1>
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
                            <p onClick={() => setModalOpen4(false)} style={{color: "white"}}>X</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default MangooPage;
