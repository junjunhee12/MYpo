import { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import Head from './Header';
import About, { Img } from './About';
import Education from './Education';

// -------삭제 할 것

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 예제이미지 from '../assets/자연3.webp';

// 여기 위까지 삭제 --------







// 공통 부분 --------------------------------------------
const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
// 공통 부분 --------------------------------------------
const Flexspacebet = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    /* border-top: 1px solid black; */
`
const Flexcolumn = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    gap: 2rem;
`
const Div = styled.div`
    text-align: center;
`
export const Container = styled.div`
    width: 100%;
    height: 100%;
`;

export const H1 = styled.h1`
    font-weight: bold;
    font-size: 40px;
    @media (max-width: 1735px) {
        font-size: 20px;
    }   
`;

export const H2 = styled.h2`
`;

export const H3 = styled.h3`
    padding-left: 12px;
    font-size: 30px;
    font-weight: bold;
    
    @media (max-width: 1735px) {
        font-size: 15px;
    }   
`;

export const H4 = styled.h4`
    font-size: 24px;
    font-weight: 300;
    @media (max-width: 1735px) {
        font-size: 12px;
    }   
`;
export const H5 = styled.h5`
    font-size: 16px;
    font-weight: bold;
    @media (max-width: 1735px) {
        font-size: 8px;
    }   
`;

export const P = styled.p`
    font-size: 28px;
    @media (max-width: 1735px) {
        font-size: 14px;
    }   
`;


export const Smallp = styled.p`
    font-size: 24px;
    color: white;
    @media (max-width: 1735px) {
        font-size: 12px;
    }   
`; 

const Alink = styled.a`
/* text-align: start; */

    
`;

// ----------------------------------------

const Portfolio = styled.div`
    width: 100%;
    height: 100%;
    background-color: dodgerblue;
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
    background-color: yellowgreen;
    margin: 0 auto;
    display: flex;
`
const Portfolioleft = styled.div`
    width: 50%;
    height: 100%;
    background-color: yellow;
    padding: 1rem;
`
const Portfolioright = styled.div`
    width: 100%;
    height: 100%;
    background-color: pink;
    display: flex;
    justify-content: center;
`

const Rightcontent = styled.div`
    width: 513px;
    height: 100%;
    background-color: khaki;
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
    }   
`;

const palce = ["Buddiz","FTT","Portfolio","로미지안 사이트", " 애경 사이트"]
const palce1 = ["/Team","/Team","/Solo","/Solo", " /Solo"]
const palce2 = ["배포","github","개발담당","stack"]
const palce3 = ["https://junjunhee12.github.io/Buddiz/","https://jeonsunam.github.io/Project1_FTT/","https://vercel.com/junjunhee12s-projects/myportfolio","stack11"]
function Home() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <Container>
            <Head />
            <About />
            <Education />
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
                            <SwiperSlide>Slide 1</SwiperSlide>
                            <SwiperSlide>Slide 2</SwiperSlide>
                            <SwiperSlide>Slide 3</SwiperSlide>
                            <SwiperSlide>Slide 4</SwiperSlide>
                            <SwiperSlide>Slide 5</SwiperSlide>
                            <SwiperSlide>Slide 6</SwiperSlide>
                            <SwiperSlide>Slide 7</SwiperSlide>
                            <SwiperSlide>Slide 8</SwiperSlide>
                            <SwiperSlide>Slide 9</SwiperSlide>
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
                                    <H4>/Team</H4>
                                </Flex>
                                <Div>
                                        <Portfoliop>2020.02.05</Portfoliop>
                                </Div>
                            </Div>
                            
                            <Flex>
                                <Pborder>다양한 매체에 운동하는 영상이 많이 나오고 있습니다. 그로 인해 사람들이 운동에 대해 관심이 생겨서 많은 사람들이 운동을 하려고 시도하고는 있으나 막상 어떻게 해야될지도 모릅니다. 또한 내 주위에는 운동하는 친구들이 없어서 같이 운동도 하고 소통할 수 있는 페이지를 제작해 보았습니다.</Pborder>
                            </Flex>
                            <Flexcolumn>
                                {palce2.map((content, index1) => (
                                    <Flexspacebet key={index1}>
                                        <H5>{content} &gt;</H5>
                                        {index1 === 0 && (
                                            <Alink href={palce3[index]}>
                                                <Portfoliop>https://junjunhee12.github.io/Buddiz/</Portfoliop>
                                            </Alink>
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
        </Container>
    );
}

export default Home;
