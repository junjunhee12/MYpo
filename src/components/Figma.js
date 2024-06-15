import { useEffect, useState } from "react";
import { Aboutme, Aboutmecontent, Img, TitleBottom, TitleTob } from "./About";
import { H3, H4 } from "./Home";
import styled from "styled-components";
import Figma1 from "../assets/피그마1.jpg"
import Figma2 from "../assets/피그마2.jpg"
import Figma3 from "../assets/피그마3.jpg"
import Figma4 from "../assets/피그마4.jpg"
const FigmaC = styled(Aboutme)`
    height: 100%;
    
`
const FigmaTitleTob = styled(TitleTob)`

`
const FigmaTitlBott = styled(TitleBottom)`

`
const Figmacontent = styled(Aboutmecontent)`
    /* display: flex; */
    padding: 2rem 0;
    height: 100%;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
`
const FigmaImg = styled.div`
    width: 1440px;
    height: 600px;
    /* background-color: yellow; */
    border-radius: 16px;
    border: 1px solid black;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    @media (max-width: 1735px) {
        width: 100%;
        height: 100vh;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }   
    @media (max-width: 499px) {
        height: 50vh;
    }   
`
const FigmaImgwrap = styled.div`
    /* width: 360px; */
    width: 1000px;
    height: 100%;
    @media (max-width: 1735px) {
        width: 700px;
        height: 500px;
    }   
    @media (max-width: 499px) {
        width: 300px;
        height: 200px;
    }   
    /* background-color: gray; */
`

const Figmatext = styled.div`
    width: 440px;
    height: 100%;
    /* background-color: green; */
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1735px) {
        width: 100%;
        height: 300px;
    }   
    @media (max-width: 499px) {
        height: 80px;
        text-align: center;
    }   
`

const img = [
    { src: Figma1, text: "현재 보고있는 페이지를 피그마로 만든후 작성해보았습니다." },
    { src: Figma2, text: "피그마로 Buddiz와 FTT에서 내가 만들어준 페이지를 설명해주는 이미지 입니다." },
    { src: Figma3, text: "웹페이지들(나이키 등)을 리뉴얼 해본 이미지입니다." },
    { src: Figma4, text: "빽다방 메인페이지를 2가지 방법으로 피그마로 리뉴얼 해보았습니다." }
  ];
function Figma() {
    return (
        <>
            <FigmaC>
                <FigmaTitleTob><H3>Figma &gt;</H3></FigmaTitleTob>
                    <Figmacontent>
                        {img.map((text, index) =>(
                            <FigmaImg  key={index}>
                            <FigmaImgwrap>
                                <Img src={text.src} />
                            </FigmaImgwrap>
                            <Figmatext>
                                <H4>{text.text}</H4>
                            </Figmatext>
                        </FigmaImg>
                        ))}
                    </Figmacontent>
                <FigmaTitlBott><H3> &lt; Figma</H3></FigmaTitlBott>
            </FigmaC>
        </>
    );
}

export default Figma;