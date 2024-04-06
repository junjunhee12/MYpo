import styles from "./Portfoliohover.module.css"
import buddiz from "../assets/버디.jpg"
import buddiz1 from "../assets/로그인1 (1).jpg"
import buddiz2 from "../assets/로그인2.jpg"
import buddiz3 from "../assets/로그인3.jpg"
import FTT from "../assets/FTT.jpg"
import site from "../assets/사이트.jpg"
import { Swiper, SwiperSlide } from 'swiper/react'; // Swiper와 SwiperSlide import
import 'swiper/css'; // Swiper의 CSS 파일 import
import { useState } from "react"
import { Img1, Img2, Img3 } from "./Imghover"

function Portfoliohover({setBuddizClick, buddizClick}) {
    console.log(buddizClick);
    console.log("setBuddiz", setBuddizClick);
    
    const del = () => {
        setBuddizClick(false);
    }
    const del1 = ()=>{
        setImg(false)
        setImg2(false)
        setImg3(false)
    }
    const [img, setImg] = useState(false)
    const [img2, setImg2] = useState(false)
    const [img3, setImg3] = useState(false)
    const imgClick = ()=>{
        setImg(true)
        setImg2(true)
        setImg3(true)
    }
        
   
    return (
        <>
            {
                buddizClick === "0" && (
                    <>
                        <div className={styles.container}>
                <div className={styles.left}>
                    <img onClick={imgClick} src={buddiz} alt=""/>
                    {
                        img && (
                            <Img1 del1={del1}/>
                        )
                    }
                </div>
                <div className={styles.right}>
                    <div className={styles.right_wrap}>
                        <header className={styles.right_wrap_header}>
                            <div className={styles.header_1}>
                                <h1>Buddiz</h1>
                                <span>Team</span>
                            </div>
                            
                            <p>
                                <strong>배포</strong>
                                <div className={styles.padding}><a href="https://junjunhee12.github.io/Buddiz/">https://junjunhee12.github.io/Buddiz/</a></div>
                            </p>
                            <p>
                                <strong className={styles.padding}>github</strong>
                                <div><a href="https://github.com/junjunhee12/Buddiz/tree/main/src">https://github.com/junjunhee12/Buddiz/tree/main/src</a></div>
                            </p>
                        </header>
                        <main className={styles.right_wrap_main}>
                            <div className={styles.padding}>
                                <h3>프로젝트 소개</h3>
                                <div>
                                    다양한 매체에 운동하는 영상이 많이 나오고 있습니다. 그로 인해 사람들이 운동에 대해 관심이 생겨서 
                                    많은 사람들이 운동을 하고 있지만 막상 같이할 수 있는 사람은 적었습니다. 그렇기 때문에 같이 운동할
                                    수 있는 친구를 찾을 수 있고 소통할 수 있게 제작해 보았습니다.
                                </div>
                            </div>
                            <div>
                                <h3>개발 담당</h3>
                                <div>
                                    로그인, 회원가입, 아이디 찾기, 비밀번호 찾기, 회원정보 수
                                    정 / 주소 변경하기, 카카오 로그인(인증 용도), 구글 로그인(인증 용도), 
                                    Emailjs(비번찾기 때 사용) 
                                </div>
                            </div>
                        </main>
                        <footer className={styles.right_wrap_footer}>
                            <strong>stack</strong>
                            <div>
                                React, Css, Firebase, Github
                            </div>
                        </footer>
                    </div>
                    
                </div>
            </div>
            <button className={`${img ? styles.buttonDel : styles.button}`} onClick={del}>X</button>
                    </>
                )
            }
            
            {
                buddizClick === "1" && (
                    <>
                        <div className={styles.container}>
                            <div className={styles.left}>
                                <img onClick={imgClick} src={FTT} alt="FTT" />
                                {
                                    img2 && (
                                        <Img2 del1={del1}/>
                                    )
                                }
                            </div>
                            <div className={styles.right}>
                    <div className={styles.right_wrap}>
                        <header className={styles.right_wrap_header}>
                            <div className={styles.header_1}>
                                <h1>FTT</h1>
                                <span>Team</span>
                            </div>
                            
                            <p>
                                <strong>배포</strong>
                                <div className={styles.padding}><a href="https://jeonsunam.github.io/Project1_FTT/">https://jeonsunam.github.io/Project1_FTT/</a></div>
                            </p>
                            <p>
                                <strong className={styles.padding}>github</strong>
                                <div><a href="https://github.com/RH603/FTT/tree/main/index">https://github.com/RH603/FTT/tree/main/index</a></div>
                            </p>
                        </header>
                        <main className={styles.right_wrap_main}>
                            <div className={styles.padding}>
                                <h3>프로젝트 소개</h3>
                                <div>
                                    교육기관에서의 처음 시작한 프로젝트입니다. 다양한 OTT 사이트들을 보면서 한번 만들어 보고 싶었습니다. 그리고 제작하면서
                                    알지 못했던 내용을들 확인하고 한번더 이해시키자는 생각으로 제작해보았습니다.
                                </div>
                            </div>
                            <div>
                                <h3>개발 담당</h3>
                                <div>
                                    메인페이지, 디자인, 영화검색
                                </div>
                            </div>
                        </main>
                        <footer className={styles.right_wrap_footer}>
                            <strong>stack</strong>
                            <div>
                                Html, Css, Javascript, Firebase
                            </div>
                        </footer>
                    </div>
                    
                </div>
                        </div>
                        <button className={`${img ? styles.buttonDel : styles.button}`} onClick={del}>X</button>
                    </>
                )
            }
            {
                buddizClick === "2" && (
                    <>
                        <div className={styles.container}>
                            <div className={styles.left}>
                                <img onClick={imgClick} src={site} alt="Portfolio" />
                                {
                        img3 && (
                            <Img3 del1={del1}/>
                        )
                    }
                            </div>
                            <div className={styles.right}>
                    <div className={styles.right_wrap}>
                        <header className={styles.right_wrap_header}>
                            <div className={styles.header_1}>
                                <h1>Portfolio</h1>
                                <span>Solo</span>
                            </div>
                            
                            <p>
                                <strong>배포</strong>
                                <div className={styles.padding}><a href="https://myportfolio-brown-psi.vercel.app/">https://myportfolio-brown-psi.vercel.app/</a></div>
                            </p>
                            <p>
                                <strong className={styles.padding}>github</strong>
                                <div><a href="https://github.com/junjunhee12/MYpo">https://github.com/junjunhee12/MYpo</a></div>
                            </p>
                        </header>
                        <main className={styles.right_wrap_main}>
                            <div className={styles.padding}>
                                <h3>프로젝트 소개</h3>
                                <div>
                                교육기관에서 OTT와 Buddiz인 2개의 프로젝트를 만들었습니다. 
                            하지만 반응형(아이패드)으로 만들어주지는 못하였습니다. 특히 Buddiz는
                            리액트로 만들어보는 첫 프젝트였기 때문에 리액트와 친해지는 것이 더 중요했습니다.
                            이때문에 포트폴리오는 반응형(아이패드)이 될 수 있게 만들면서 React의 복습을 하기 위해 사이트로 만들어 보았습니다.
                                </div>
                            </div>
                            <div>
                                <h3>개발 담당</h3>
                                <div>
                                    ALL
                                </div>
                            </div>
                        </main>
                        <footer className={styles.right_wrap_footer}>
                            <strong>stack</strong>
                            <div>
                                React, css, Styled-component, Three.js(예정)
                            </div>
                        </footer>
                    </div>
                    
                </div>
                        </div>
                        <button className={`${img ? styles.buttonDel : styles.button}`} onClick={del}>X</button>
                    </>
                )
            }
        </>
    )
}

export default Portfoliohover;
