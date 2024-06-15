import styled from "styled-components"


import Html from "../assets/Html 5.jpg"
import Css from "../assets/CSS3.jpg"
import act from "../assets/React Native.jpg"
import Javascript from "../assets/js.jpg"
import Firebase from "../assets/Firebase.jpg"
import Figma from "../assets/Figma.jpg"
import Git from "../assets/git.jpg"
import { useEffect, useState } from "react"
import { H3, H4 } from "./Home"
export const Aboutme = styled.div`
    width: 100%;
    height: 100vh;
    /* background-color: dodgerblue; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`


export const TitleTob = styled.div`
    width: 100%;
    max-width: 1614px;
    height: 112px;
    /* background-color: yellow; */
    margin: 0 auto;
    display: flex;
    align-items: center;
    border-bottom: 1px solid black;
`
export const TitleBottom = styled.div`
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
export const Aboutmecontent = styled.div`
    width: 100%;
    max-width: 1440px;
    height: 800px;
    /* background-color: yellowgreen; */
    margin: 0 auto;
    display: flex;
    @media (max-width: 1735px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }   
`
const Aboutleft = styled.div`
    width: 50%;
    height: 100%;
    /* background-color: pink; */
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    @media (max-width: 1735px) {
        width: 100%;
        /* flex-direction: row; */
        align-items: center;
    }   
`
const Aboutright = styled.div`
    width: 50%;
    height: 100%;
    /* background-color: blueviolet; */
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    @media (max-width: 1735px) {
        width: 100%;
    }   
`

const Rightbox = styled.div`
    width: 100%;
    height: 70px;
    /* background-color: white; */
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const RightImg = styled.div`
    width: 48px;
    height: 48px;
    /* background-color: black; */
`
export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Notcolor = styled.div`
    width: 658px;
    height: 60px;
    background-color: #eee;
    position: relative;
    overflow: hidden;
    border-radius: 99px;
    @media (max-width: 1735px) {
        width: 300px;
        height: 40px;

    }   
`
const Rightcolor = styled.div`
    width: 90%;
    height: 60px;
    background-color:  yellow;
    border-radius: 99px;
    position: absolute;
    transition: all 1s linear;
    left: ${(props) => (props.height ? "0" : "-100%")};
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1735px) {
        width: 90%;
        height: 40px;
        
    }   
`
const Rightcolor1 = styled.div`
    width: 85%;
    height: 60px;
    background-color: yellow;
    position: absolute;
    transition: all 1s linear;
    left: ${(props) => (props.height ? "0" : "-100%")};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 99px;
    @media (max-width: 1735px) {
        width: 85%;
        height: 40px;
        
    }   
`
const Rightcolor2 = styled.div`
    width: 80%;
    height: 60px;
    background-color: yellow;
    position: absolute;
    transition: all 1s linear;
    left: ${(props) => (props.height ? "0" : "-100%")};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 99px;
    @media (max-width: 1735px) {
        width: 80%;
        height: 40px;
        
    }   
`
const Rightcolor3 = styled.div`
    width: 75%;
    height: 60px;
    background-color: yellow;
    position: absolute;
    transition: all 1s linear;
    left: ${(props) => (props.height ? "0" : "-100%")};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 99px;
    @media (max-width: 1735px) {
        width: 75;
        height: 40px;
        
    }   
`
const Rightcolor4 = styled.div`
    width: 40%;
    height: 60px;
    background-color: yellow;
    position: absolute;
    transition: all 1s linear;
    left: ${(props) => (props.height ? "0" : "-100%")};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 99px;
    @media (max-width: 1735px) {
        width: 40;
        height: 40px;
        
    }   
`
const Rightcolor5 = styled.div`
    width: 55%;
    height: 60px;
    background-color: yellow;
    position: absolute;
    transition: all 1s linear;
    left: ${(props) => (props.height ? "0" : "-100%")};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 99px;
    @media (max-width: 1735px) {
        width: 55;
        height: 40px;
        
    }   
`
const Rightcolor6 = styled.div`
    width: 30%;
    height: 60px;
    background-color: yellow;
    position: absolute;
    transition: all 1s linear;
    left: ${(props) => (props.height ? "0" : "-100%")};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 99px;
    @media (max-width: 1735px) {
        width: 30%;
        height: 40px;
        
    }   
`

function About() {
    const [height, setHeight] = useState(false)

    useEffect(()=>{
        const scroll = ()=>{
            const scroll = window.scrollY;
            console.log("scroll", scroll);
            if(scroll > 660){
                setHeight(true)
            }else{
                setHeight(false)
            }
        }

        window.addEventListener("scroll", scroll);
        return () => {
            window.removeEventListener("scroll", scroll);
        };
    },[])
    return (
        <>
            <Aboutme>
                <TitleTob><H3>About Me &gt;</H3></TitleTob>
                <Aboutmecontent>
                    <Aboutleft>
                        <H4>이름 : 전준희</H4>
                        <H4>생년월일 : 99.03.28</H4>
                        <H4>주소 : 대전광역시 동구</H4>
                        <H4>연락처 : 010-2387-7417</H4>
                        <H4>이메일 : wwg0328@naver.com</H4>
                    </Aboutleft>
                    <Aboutright>
                        <Rightbox>
                            <RightImg><Img src={Html}/></RightImg>
                            <Notcolor>
                                <Rightcolor height={height}>
                                    90%
                                </Rightcolor>
                            </Notcolor>
                        </Rightbox>
                            <Rightbox>
                            <RightImg><Img src={Css}/></RightImg>
                                <Notcolor>
                                    <Rightcolor1 height={height}>
                                        85%
                                    </Rightcolor1>
                                </Notcolor>
                            </Rightbox>
                        <Rightbox>
                            <RightImg><Img src={act}/></RightImg>
                                <Notcolor>
                                    <Rightcolor2 height={height}>
                                        80%
                                    </Rightcolor2>
                                </Notcolor>
                            </Rightbox>
                        <Rightbox>
                            <RightImg><Img src={Javascript}/></RightImg>
                                <Notcolor>
                                    <Rightcolor3 height={height}>
                                        75%
                                    </Rightcolor3>
                                </Notcolor>
                        </Rightbox>
                        <Rightbox>
                            <RightImg><Img src={Firebase}/></RightImg>
                                <Notcolor>
                                    <Rightcolor4 height={height}>
                                        40%
                                    </Rightcolor4>
                                </Notcolor>
                        </Rightbox>
                        <Rightbox>
                            <RightImg><Img src={Figma}/></RightImg>
                                <Notcolor>
                                    <Rightcolor5 height={height}>
                                        55%
                                    </Rightcolor5>
                                </Notcolor>
                        </Rightbox>
                        <Rightbox>
                            <RightImg><Img src={Git}/></RightImg>
                                <Notcolor>
                                    <Rightcolor6 height={height}>
                                        30%
                                    </Rightcolor6>
                                </Notcolor>
                        </Rightbox>
                    </Aboutright>
                </Aboutmecontent>
                <TitleBottom><H3> &lt; Skill</H3></TitleBottom>
            </Aboutme>
        </>
    );
}

export default About;