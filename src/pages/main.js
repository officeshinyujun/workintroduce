import React from "react"
import {useState} from "react";
import FsLightbox from 'fslightbox-react'
import sideView from "../image/sideView.jpg"
import Header from "../component/header"
import "../design/main.css"
function MainPage() {
    const [modalopen, setModalopen] = useState(false);
    const [modalopen2, setModalopen2] = useState(true);

    const [firstlightboxController, firstsetLightboxController] = useState({
        toggler: false,
        slide: 1
    });

    const openfirstLightboxOnSlide = (slide) => {
        firstsetLightboxController({
            toggler: !firstlightboxController.toggler,
            slide: slide
        });
    };

    const [secondlightboxController, secondsetLightboxController] = useState({
        toggler: false,
        slide: 1
    });

    // Lightbox를 여는 함수입니다.
    const openLightboxOnSlide = (slide) => {
        secondsetLightboxController({
            toggler: !secondlightboxController.toggler,
            slide: slide
        });
    };

    const modalOpen1 =() =>{
        setModalopen(true);
    }

    const modalOpen2 =() =>{
        setModalopen2(true);
    }

    return (
        <>
            <Header/>
            <div className="main-container">
                <div className="main-work-box" onClick={modalOpen1}>
                    <ul>
                        <li style={{marginRight:"0px"}}>
                            <img src={sideView} style={{width: "150px", height: "150px"}}/>
                        </li>
                        <li>
                            <img src={sideView} style={{width: "150px", height: "150px"}}/>
                        </li>
                        <li>
                            <img src={sideView} style={{width: "150px", height: "150px"}}/>
                        </li>
                    </ul>
                    <h1 style={{color: "white"}}>Benz actrocs</h1>
                </div>

                <div className="main-work-box">
                    <ul>
                        <li>
                            <img src={sideView} style={{width: "150px", height: "150px"}}
                                 onClick={() => openLightboxOnSlide(1)}/>
                        </li>
                        <li>
                            <img src={sideView} style={{width: "150px", height: "150px"}}
                                 onClick={() => openLightboxOnSlide(2)}/>
                        </li>
                        <li>
                            <img src={sideView} style={{width: "150px", height: "150px"}}
                                 onClick={() => openLightboxOnSlide(3)}/>
                        </li>
                    </ul>
                    <h1 style={{color: "white"}}>JEEP Wrangler</h1>
                </div>

                <FsLightbox
                    toggler={firstlightboxController.toggler}
                    sources={[
                        sideView,
                        'https://i.imgur.com/3egL60k.jpg',
                        'https://i.imgur.com/RpzrMR2.jpg'
                    ]}
                    slide={firstlightboxController.slide}
                />
            </div>
            {modalopen &&(
                <div className="modal-container">
                    <div className="modal-content">
                        asdf
                        <p onClick={() => {
                            setModalopen(false)
                        }} style={{color: "white"}}>X</p>
                    </div>

                </div>
            )}
        </>
    );
}

export default MainPage;