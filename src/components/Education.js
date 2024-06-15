import { defer } from "react-router-dom";
import { Aboutme, Aboutmecontent, Img, TitleBottom, TitleTob } from "./About";
import { H3, H4, P } from "./Home";
import styled from "styled-components";
import { useState } from "react";
import 표창장 from "../assets/학원3.jpg"
import 수료증 from "../assets/학원.jpg" 
import 이수증 from "../assets/학원2.jpg" 
import 아카데미 from "../assets/아카데미.jpg" 
const AcEducation = styled(Aboutme)`
    /* background-color: dodgerblue; */
`
const EducationContent = styled(Aboutmecontent)`
    /* background-color: yellow; */
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1735px) {
        height: 100vh;
    }   
        padding: 1rem 0;
`
const EducationTitleTob = styled(TitleTob)`
    justify-content: space-between;
`
const EducationTitleBottom = styled(TitleBottom)`

`
const EducationImg = styled.div`
    width: 500px;
    max-width: 1196px;
    height: 650px;
    /* background-color: yellowgreen; */
    border-radius: 16px;
    overflow: hidden;
    @media (max-width: 1735px) {
        width: 300px;
        /* height: 650px; */
    }   
`

const TitleTobcontent = styled.div`
    height: 100%;
    /* background-color: yellow; */
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 1rem;
    padding-right: 12px;
    cursor: pointer;
`
const ContentRight = styled.div`
    width: 700px;
    height: 650px;
    /* background-color: yellow; */
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1735px) {
        width: 300px;
        height: 300px;
    }   
`

const EdImg = styled.div`
    width: 100%;
    height: 600px;
    background-color: yellowgreen;
`

const Edp = styled.p`
    font-weight: 16px;
`
const img = [수료증, 이수증, 표창장 ]
function Education(){

    const [index, setIndex] = useState(0);

    const handleIndexChange = (newIndex) => {
        setIndex(newIndex);
    };
    return(
        <>
            <AcEducation>
                <EducationTitleTob>
                    <H3>Education &gt; </H3>
                    <TitleTobcontent>
                        <H4>&gt;</H4>
                        <H4 onClick={() => handleIndexChange(0)}>수료증</H4>
                        <H4 onClick={() => handleIndexChange(1)} >이수증</H4>
                        <H4 onClick={() => handleIndexChange(2)}>표창장</H4>
                    </TitleTobcontent>
                </EducationTitleTob>
                <EducationContent>
                    <EducationImg>
                        <Img src={img[index]}/>
                    </EducationImg>
                    <ContentRight>
                        <Edp>우측 상단에 수료증 이수증 표창장을 클릭하면 좌측 이미지가 바뀝니다.</Edp>
                        {/* <Edp></Edp> */}
                        <EdImg>
                            <Img src={아카데미}/>
                        </EdImg>
                        <Edp>좌측은 교육기관을 이수한 이수증과 수료증 표창장이 나오는 곳입니다.</Edp>
                    </ContentRight>
                </EducationContent>
                <EducationTitleBottom><H3> &lt; Education</H3></EducationTitleBottom>
            </AcEducation>
        </>
    )
}

export default Education