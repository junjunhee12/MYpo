import FTT1 from "../assets/ftt1.jpg"
import FTT2 from "../assets/ftt2.jpg"
import FTT3 from "../assets/ftt3.jpg"
import FTT4 from "../assets/ftt4.jpg"
import Buddiz1 from "../assets/buddiz1.jpg"
import Buddiz2 from "../assets/buddiz2.jpg"
import Buddiz3 from "../assets/buddiz3.jpg"
import Buddiz4 from "../assets/buddiz4.jpg"
import Buddiz5 from "../assets/buddiz5.jpg"
import 포트폴리오1 from "../assets/포트폴리오1.jpg"
import 포트폴리오2 from "../assets/포트폴리오2.jpg"
// Import Swiper React components
import 로미지안1 from "../assets/로미지안1.jpg"
import 로미지안2 from "../assets/로미지안2.jpg"
import 로미지안3 from "../assets/로미지안3.jpg"
import 로미지안4 from "../assets/로미지안4.jpg"
import 로미지안5 from "../assets/로미지안5.jpg"
import 로미지안6 from "../assets/로미지안6.jpg"

import 애경1 from "../assets/애경1.jpg"
import 애경2 from "../assets/애경2.jpg"
import 애경3 from "../assets/애경3.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useRef } from "react"
import { Div, Flex, Flexcolumn, Flexspacebet, H3, H4, H5 } from "./Home"
import { Img } from "./About"
import styled from "styled-components"

const Alink = styled.a`
/* text-align: start; */

    
`;

// ----------------------------------------

const Portfolio = styled.div`
    width: 100%;
    height: 100%;
    /* background-color: dodgerblue; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 32px;
`

const PortfolioTob = styled.div`
    width: 100%;
    max-width: 1614px;
    height: 112px;
    /* background-color: yellow; */
    margin: 0 auto;
    display: flex;
    align-items: center;
    border-bottom: 1px solid black;
`
const PortfolioBottom = styled.div`
    width: 100%;
    max-width: 1614px;
    height: 112px;
    /* background-color: yellow; */
    margin: 0 auto;
    display: flex;
    justify-content: end;
    align-items: center;
    padding-right: 12px;
    border-top: 1px solid black;
`
const Portfoliocontent = styled.div`
    width: 100%;
    max-width: 1440px;
    height: 600px;
    background-color: #eee;
    margin: 0 auto;
    display: flex;
    border-radius: 16px;
    @media (max-width: 1735px) {
        height: 100vh;
        flex-direction: column;
    }  
`
const Portfolioleft = styled.div`
    width: 50%;
    height: 100%;
    /* background-color: yellow; */
    padding: 1rem;
    display: flex;
    align-items: center;
    @media (max-width: 1735px) {
        width: 100%;
    }  
`
const Portfolioright = styled.div`
    width: 100%;
    height: 100%;
    /* background-color: pink; */
    display: flex;
    justify-content: center;
`

const Rightcontent = styled.div`
    width: 513px;
    height: 100%;
    /* background-color: khaki; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;

`
export const Portfoliop = styled.p`
    font-size: 16px;
    /* color: white; */
    @media (max-width: 1735px) {
        font-size: 8px;
    }   
`;
const Pborder = styled.p`
    font-size: 16px;
    border-bottom: 1px solid black;
    padding: 0 0 2rem 0;
    @media (max-width: 1735px) {
        font-size: 8px;
        padding: 0 1rem 2rem 1rem;
    }   
`;

const swiperimg = [
    [Buddiz1, Buddiz2, Buddiz3,Buddiz4,Buddiz5],
    [FTT1, FTT2, FTT3, FTT4],
    [포트폴리오1, 포트폴리오2],
    [로미지안1, 로미지안2, 로미지안3,로미지안4, 로미지안5, 로미지안6],
    [애경1, 애경2, 애경3]
]

const palce = ["Buddiz","FTT","Portfolio","로미지안 퍼블리싱", " 애경 퍼블리싱"]
const palce1 = ["/Team","/Team","/Solo","/Solo", " /Solo"]
const palce2 = ["배포","github","개발담당","stack"]
const palce3 = ["https://junjunhee12.github.io/Buddiz/","https://jeonsunam.github.io/Project1_FTT/","https://myportfolio-brown-psi.vercel.app/","https://mywebsite-chi-murex.vercel.app/","https://aekyung-publishing.vercel.app/"]
const palce4 = ["https://github.com/junjunhee12/Buddiz","https://github.com/RH603/FTT","https://github.com/junjunhee12/MYpo","https://github.com/junjunhee12/Web/tree/main/src","https://github.com/junjunhee12/Aekyung-Publishing"]
const palce5 = ["회원가입, 로그인, 로그아웃, 비밀번호 변경, 비밀번호 찾기","레이아웃, 검색","ALL","ALL","ALL"]
const palce6 = ["React, styles, styeld-components, Firebase, Figma","Html, Css, Javascript","React, styeld-components, Swiper /반응형","React, styeld-components, Swiper","React, styeld-components, Swiper /반응형"]
const palce7 = [
    "다양한 매체에 운동하는 영상이 많이 나오고 있습니다. 그로 인해 사람들이 운동에 대해 관심이 생겨서 많은 사람들이 운동을 하려고 시도하고는 있으나 막상 어떻게 해야될지도 모릅니다. 또한 내 주위에는 운동하는 친구들이 없어서 같이 운동도 하고 소통할 수 있는 페이지를 제작해 보았습니다.",
    "교육기관에서의 첫 프로젝트였습니다. 현재까지 배운것을 완벽하게 이해하지도 못했으며 레이아웃도 힘들어서 OTT사이트를 만들면서 복습하는 생각으로 만들었습니다.",
    "첫번째 포트폴리오는 이렇지 않았습니다. 그냥 느낌대로 가는 것 또는 제 생각에 멋있는 것들을 넣었습니다. 나중에 확인하니까 복잡하고 난잡해서 다시 만들어 주었습니다.",
    "교육기관을 이수하고 아무것도 하지 않으면 다 까먹을거 같았기 때문에 시작해주었습니다. 퍼블리셔에도 관심이 생기던 중이라서 레이아웃 잡는 연습과 코드 중복를 만들면서 부족한 부분을 확인할 수 있는 사이트였습니다.",
    "한번도 반응형을 만들지 않았기 때문에 한번 만들어 보았습니다. 위에서 로미지안을 하면서 코드의 중복과 변수명을 생각을 하면서 했지만 아직 많이 부족하다고 느낌을 많이 받으면서 만들었습니다. 또한 처음으로 언어을 변경할 수 있게 만들어 보았습니다."
]
const palce8 = ["2024.01.15 ~ 2024.02.16"," 2023.11.22 ~ 2023.12.06","2024.06.12 ~ 진행중","2024.04.22 ~ 2024.0513","2024.06.10 ~ 2024.06.14"]
function Portfol(){
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return(
        <>
            <Portfolio>
                <PortfolioTob><H3>Portfolio &gt;</H3></PortfolioTob>
                {palce.map((text,index) =>(
                    <Portfoliocontent>
                    <Portfolioleft>
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                            }}
                            pagination={{
                            clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            onAutoplayTimeLeft={onAutoplayTimeLeft}
                            className="mySwiper"
                        >
                            {swiperimg[index] && swiperimg[index].map((img, imgIndex) => (
                                    <SwiperSlide key={imgIndex}>
                                        <Img src={img} alt={`slide-${imgIndex}`} />
                                    </SwiperSlide>
                                ))}
                            <div className="autoplay-progress" slot="container-end">
                            <svg viewBox="0 0 48 48" ref={progressCircle}>
                                <circle cx="24" cy="24" r="20"></circle>
                            </svg>
                            <span ref={progressContent}></span>
                            </div>
                        </Swiper>
                    </Portfolioleft>
                    <Portfolioright>
                        <Rightcontent>
                            <Div>
                                <Flex>
                                    <H3>{text}</H3>
                                    <H4>{palce1[index]}</H4>
                                </Flex>
                                <Div>
                                        <Portfoliop>{palce8[index]}</Portfoliop>
                                </Div>
                            </Div>
                            
                            <Flex>
                                <Pborder>{palce7[index]}</Pborder>
                            </Flex>
                            <Flexcolumn>
                                {palce2.map((content, index1) => (
                                    <Flexspacebet key={index1}>
                                        <H5>{content} &gt;</H5>
                                        {index1 === 0 && (
                                            <Alink href={palce3[index]}>
                                                <Portfoliop>{palce3[index]}</Portfoliop>
                                            </Alink>
                                        )}
                                        {index1 === 1 && (
                                            <Alink href={palce3[index]}>
                                                <Portfoliop>{palce4[index]}</Portfoliop>
                                            </Alink>
                                        )}
                                        {index1 === 2 && (
                                            
                                                <Portfoliop>{palce5[index]}</Portfoliop>
                                            
                                        )}
                                        {index1 === 3 && (
                                            
                                                <Portfoliop>{palce6[index]}</Portfoliop>
                                            
                                        )}
                                    </Flexspacebet>
                                ))}
                            </Flexcolumn>
                        </Rightcontent>
                    </Portfolioright>
                </Portfoliocontent>
                ))}
                
                <PortfolioBottom><H3>&lt; Portfolio </H3></PortfolioBottom>
            </Portfolio>
        </>
    )
}

export default Portfol