import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Container, H1, H3, P, Smallp } from "./Home";
import { FaArrowUp } from 'react-icons/fa';
// 공통 스타일 정의

const TextboxwrapStyle = css`
    display: flex;
    justify-content: start;
    align-items: center;
    background-color: #F08080;
    z-index: 9999;
    cursor: pointer;
`;
const boxdiv = css`
    width: 100%;
    height: 100px;
    background-color: black;
    position: absolute;
    transition: all 0.5s linear;
    @media (max-width: 1735px) {
        height: 80px;
    }   
    @media (max-width :499px) {
        height: 50px;
    } 
`;

const Headh3 = styled.h3`
    position: absolute;
    z-index: 999;
    transition: all 0.5s linear;
    color: ${(props) => (props.hover ? "white" : "black")};
    padding-left: ${(props) => (props.height ? "0px" : "12px")};
    font-size: 30px;
    font-weight: bold;
    
    @media (max-width: 1735px) {
        font-size: 15px;
    }   
`
// -----------------------------------------
const Header = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #282828;
    display: flex;
    position: relative;
    @media (max-width: 1735px) {
        position: static;
        display:block ;
    }   
`;

const Tawon = styled.div`
    width: 100%;
    height: 100%;
    background-color: #9c9c9c;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    position: absolute;
    right: 50%;
    @media (max-width: 1735px) {
        width: 100%;
        height: 50%;
        border-radius: 8px;
        position: static;
    }   
`;

const Tawonwrap = styled.div`
    width: 600px;
    height: 800px;
    position: absolute;
    left: 1113px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 1735px) {
        height: 100%;
        position: static;
        justify-content: space-around;
        padding: 0 1rem;
    }   
`;

const Textbox = styled.div`
    width: 50%;
    height: 100%;
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
    padding: 0 153px 0 12px;
    @media (max-width: 1735px) {
        width: 100%;
        height: 50%;
        position: static;
        padding: 0 1rem;
    }   
`;

const Textboxwrap = styled.div`
    width: 100%;
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    position: relative;
    /* position: fixed; */
    overflow: hidden;
    @media (max-width: 1735px) {
        width: 100%;
        height: 100%;
        padding: 1rem 0;
    }   
`;



const TextboxwrapHome = styled.div`
    ${TextboxwrapStyle}
    /* width: 100%; */
    width: ${(props) => (props.height ? "50px" : "100%")};
    height: ${(props) => (props.height ? "50px" : "100px")};
    position:  ${(props) => (props.height ? "fixed" : "")};
    bottom:${(props) => (props.height ? "30px" : "")} ;
    right:${(props) => (props.height ? "30px" : "")} ;
    transition: all 0.5s linear;
    display: flex;
    justify-content: ${(props) => (props.height ? "center" : "")};
    align-items: ${(props) => (props.height ? "center" : "")};
    &:hover{
        background-color: ${(props) => (props.height ? "black" : "")};
    }
    @media (max-width: 1735px) {
        height: ${(props) => (props.height ? "50px" : "80px")};
    }   
    @media (max-width :499px) {
        height: 50px;
    }   
`;
const HomeDiv = styled.div`
    ${boxdiv}
    display: ${(props) => (props.height ? "none" : "")};
    left: ${(props) => (props.hover ? "0" : "100%")};
`;


const TextboxwrapAbout = styled.div`
    ${TextboxwrapStyle}
    width: 95%;
    height: 100px;
    @media (max-width: 1735px) {
        height: 80px;
    }   
    @media (max-width :499px) {
        height: 50px;
    } 
`;
const AboutDiv = styled.div`
    ${boxdiv}
    left: ${(props) => (props.hover ? "5%" : "100%")};
`;


const TextboxwrapEd = styled.div`
    ${TextboxwrapStyle}
    width: 90%;
    height: 100px;
    @media (max-width: 1735px) {
        height: 80px;
    }   
    @media (max-width :499px) {
        height: 50px;
    } 
`;
const EdDiv = styled.div`
    ${boxdiv}
    left: ${(props) => (props.hover ? "10%" : "100%")};
`;

const TextboxwrapPo = styled.div`
    ${TextboxwrapStyle}
    width: 85%;
    height: 100px;
    @media (max-width: 1735px) {
        height: 80px;
    }   
    @media (max-width :499px) {
        height: 50px;
    } 
`;
const PoDiv = styled.div`
    ${boxdiv}
    left: ${(props) => (props.hover ? "15%" : "100%")};
`;

const TextboxwrapFi = styled.div`
    ${TextboxwrapStyle}
    width: 80%;
    height: 100px;
    @media (max-width: 1735px) {
        height: 80px;
    }   
    @media (max-width :499px) {
        height: 50px;
    } 
`;
const FiDiv = styled.div`
    ${boxdiv}
    left: ${(props) => (props.hover ? "20%" : "100%")};
`;
function Head() {
    const [hoverHome, setHoverHome] = useState(false);
    const [hoverAbout, setHoverAbout] = useState(false);
    const [hoverEd, setHoverEd] = useState(false);
    const [hoverPo, setHoverPo] = useState(false);
    const [hoverFi, setHoverFi] = useState(false);
    const [height, setHeight] = useState(false)

    const onMouseEnter = (setHover) => {
        setHover(true);
    };

    const onMouseLeave = (setHover) => {
        setHover(false);
    };
    const handleClick = (setHover, position) => {
        setHover(true);
        window.scrollTo({
            top: position,
            behavior: 'smooth',
        });
    };
    useEffect(()=>{
        const scroll = ()=>{
            const scroll = window.scrollY;
            console.log("scroll", scroll);
            if(scroll){
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

    const scroll =window.screenY
    console.log(scroll);
    return (
            <Header>
                <Tawon>
                    <Tawonwrap>
                        <H1>
                            프론트엔드 개발자<br />&<br />
                            웹퍼블리셔<br />
                            희망하는 전준희입니다.
                        </H1>
                        <P>
                            저는 프론트엔드 개발과 웹퍼블리셔를 공부하고 있는 전준희 입니다.
                            React와 JavaScript를 주로 다루며, 웹 개발을 통해 사용자 경험을
                            개선하는 것을 즐기고 있습니다.
                        </P>
                        <Smallp>
                            좋게봐주시면 감사하겠습니다.!!<br />
                            잘부탁드립니다.
                        </Smallp>
                    </Tawonwrap>
                </Tawon>
                <Textbox>
                    <Textboxwrap>
                        <TextboxwrapHome
                            height={height}
                            onMouseEnter={() => onMouseEnter(setHoverHome)}
                            onMouseLeave={() => onMouseLeave(setHoverHome)}
                            onClick={() => handleClick(setHoverAbout,0)}
                        >
                            <Headh3 height={height} hover={hoverHome}>{height ? <FaArrowUp /> : "Home" }</Headh3>
                            <HomeDiv height={height} hover={hoverHome}></HomeDiv>
                        </TextboxwrapHome>
                        <TextboxwrapAbout
                            onMouseEnter={() => onMouseEnter(setHoverAbout)}
                            onMouseLeave={() => onMouseLeave(setHoverAbout)}
                            onClick={() => handleClick(setHoverAbout,950)}
                        >
                            <Headh3 hover={hoverAbout}>About Me</Headh3>
                            <AboutDiv hover={hoverAbout}></AboutDiv>
                        </TextboxwrapAbout>
                        <TextboxwrapEd
                            onMouseEnter={() => onMouseEnter(setHoverEd)}
                            onMouseLeave={() => onMouseLeave(setHoverEd)}
                            onClick={() => handleClick(setHoverPo,1880)}
                        >
                            <Headh3 hover={hoverEd}>Education</Headh3>
                            <EdDiv hover={hoverEd}></EdDiv>
                        </TextboxwrapEd>
                        <TextboxwrapPo
                            onMouseEnter={() => onMouseEnter(setHoverPo)}
                            onMouseLeave={() => onMouseLeave(setHoverPo)}
                            onClick={() => handleClick(setHoverPo,2850)}
                        >
                            <Headh3 hover={hoverPo}>Portfolio</Headh3>
                            <PoDiv hover={hoverPo}></PoDiv>
                        </TextboxwrapPo>
                        <TextboxwrapFi
                            onMouseEnter={() => onMouseEnter(setHoverFi)}
                            onMouseLeave={() => onMouseLeave(setHoverFi)}
                            onClick={() => handleClick(setHoverPo,6275)}
                        >
                            <Headh3 hover={hoverFi}>Figma</Headh3>
                            <FiDiv hover={hoverFi}></FiDiv>
                        </TextboxwrapFi>
                    </Textboxwrap>
                </Textbox>
            </Header>
    );
}

export default Head;