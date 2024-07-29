// import React from "react"
// import {useState} from "react";
// import FsLightbox from 'fslightbox-react'
// import sideView from "../image/sideView.jpg"
// import Header from "../component/header"
// import "../design/main.css"
// function MainPage() {
//     const [modalopen, setModalopen] = useState(false);
//     const [modalopen2, setModalopen2] = useState(true);
//
//     const [firstlightboxController, firstsetLightboxController] = useState({
//         toggler: false,
//         slide: 1
//     });
//
//     const openfirstLightboxOnSlide = (slide) => {
//         firstsetLightboxController({
//             toggler: !firstlightboxController.toggler,
//             slide: slide
//         });
//     };
//
//     const [secondlightboxController, secondsetLightboxController] = useState({
//         toggler: false,
//         slide: 1
//     });
//
//     // Lightbox를 여는 함수입니다.
//     const openLightboxOnSlide = (slide) => {
//         secondsetLightboxController({
//             toggler: !secondlightboxController.toggler,
//             slide: slide
//         });
//     };
//
//     const modalOpen1 =() =>{
//         setModalopen(true);
//     }
//
//     const modalOpen2 =() =>{
//         setModalopen2(true);
//     }
//
//     return (
//         <>
//             <Header/>
//             <div className="main-container">
//                 <div className="main-work-box" onClick={modalOpen1}>
//                     <ul>
//                         <li style={{marginRight:"0px"}}>
//                             <img src={sideView} style={{width: "150px", height: "150px"}}/>
//                         </li>
//                         <li>
//                             <img src={sideView} style={{width: "150px", height: "150px"}}/>
//                         </li>
//                         <li>
//                             <img src={sideView} style={{width: "150px", height: "150px"}}/>
//                         </li>
//                     </ul>
//                     <h1 style={{color: "white"}}>Benz actrocs</h1>
//                 </div>
//
//                 <div className="main-work-box">
//                     <ul>
//                         <li>
//                             <img src={sideView} style={{width: "150px", height: "150px"}}
//                                  onClick={() => openLightboxOnSlide(1)}/>
//                         </li>
//                         <li>
//                             <img src={sideView} style={{width: "150px", height: "150px"}}
//                                  onClick={() => openLightboxOnSlide(2)}/>
//                         </li>
//                         <li>
//                             <img src={sideView} style={{width: "150px", height: "150px"}}
//                                  onClick={() => openLightboxOnSlide(3)}/>
//                         </li>
//                     </ul>
//                     <h1 style={{color: "white"}}>JEEP Wrangler</h1>
//                 </div>
//
//                 <FsLightbox
//                     toggler={firstlightboxController.toggler}
//                     sources={[
//                         sideView,
//                         'https://i.imgur.com/3egL60k.jpg',
//                         'https://i.imgur.com/RpzrMR2.jpg'
//                     ]}
//                     slide={firstlightboxController.slide}
//                 />
//             </div>
//             {modalopen &&(
//                 <div className="modal-container">
//                     <div className="modal-content">
//                         <div style={{
//                             margin: "20px",
//                             justifyContent: "center",
//                             display: "flex",
//                             alignItems: 'center',
//                             flexDirection: "column",
//                             color: "white"
//                         }}>
//                             <img src={sideView} style={{width: "150px", height: "150px"}}/>
//                             <h1>Benz actrocs</h1>
//                             <img src={sideView} style={{width: "150px", height: "150px"}} onClick={openfirstLightboxOnSlide(1)}/>
//                             <p>글글글그르그그를르르르르르르그를르그ㅏ르가르가르가륵르</p>
//
//                             <p onClick={() => {
//                                 setModalopen(false)
//                             }} style={{color: "white"}}>X</p>
//                         </div>
//                     </div>
//
//                 </div>
//             )}
//         </>
//     );
// }
//
// export default MainPage;
import React, { useState } from "react";
import FsLightbox from 'fslightbox-react';
import sideView from "../image/sideView.jpg";
import Header from "../component/header";
import "../design/main.css";

function MainPage() {
    const [modalOpen, setModalOpen] = useState(false);

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

    return (
        <>
            <Header />
            <div className="main-container">
                <div className="main-work-box" onClick={openModal}>
                    <ul>
                        <li style={{ marginRight: "0px" }}>
                            <img src={sideView} alt="Side view" style={{ width: "150px", height: "150px" }} />
                        </li>
                        <li>
                            <img src={sideView} alt="Side view" style={{ width: "150px", height: "150px" }} />
                        </li>
                        <li>
                            <img src={sideView} alt="Side view" style={{ width: "150px", height: "150px" }} />
                        </li>
                    </ul>
                    <h1 style={{ color: "white" }}>Benz actrocs</h1>
                </div>

                <div className="main-work-box">
                    <ul>
                        <li>
                            <img src={sideView} alt="Side view" style={{ width: "150px", height: "150px" }}
                                 onClick={() => openSecondLightboxOnSlide(1)} />
                        </li>
                        <li>
                            <img src={sideView} alt="Side view" style={{ width: "150px", height: "150px" }}
                                 onClick={() => openSecondLightboxOnSlide(2)} />
                        </li>
                        <li>
                            <img src={sideView} alt="Side view" style={{ width: "150px", height: "150px" }}
                                 onClick={() => openSecondLightboxOnSlide(3)} />
                        </li>
                    </ul>
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

            {modalOpen && (
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
                            <p onClick={() => setModalOpen(false)} style={{color: "white"}}>X</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default MainPage;
