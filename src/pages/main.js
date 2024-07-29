import React from "react"
import {useState} from "react";
import FsLightbox from 'fslightbox-react'
import sideView from "../image/sideView.jpg"
import Header from "../component/header"
import "../design/main.css"
function MainPage() {
    const [modalopen, setModalopen] = useState(false);
    const [modalopen2, setModalopen2] = useState(true);

    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1
    });

    // Lightbox를 여는 함수입니다.
    const openLightboxOnSlide = (slide) => {
        setLightboxController({
            toggler: !lightboxController.toggler,
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
                <div className="main-work-box">
                    <ul>
                        <li>
                            <img src={sideView} style={{width: "100px", height: "100px"}}
                                 onClick={() => openLightboxOnSlide(1)}/>
                        </li>
                        <li>
                            <img src={sideView} style={{width: "100px", height: "100px"}}
                                 onClick={() => openLightboxOnSlide(2)}/>
                        </li>
                        <li>
                            <img src={sideView} style={{width: "100px", height: "100px"}}
                                 onClick={() => openLightboxOnSlide(3)}/>
                        </li>
                    </ul>
                    <h1 style={{color:"white"}}>Benz actrocs</h1>
                </div>

                <FsLightbox
                    toggler={lightboxController.toggler}
                    sources={[
                        sideView,
                        'https://i.imgur.com/3egL60k.jpg',
                        'https://i.imgur.com/RpzrMR2.jpg'
                    ]}
                    slide={lightboxController.slide}
                />
            </div>
        </>
    );
}

export default MainPage;