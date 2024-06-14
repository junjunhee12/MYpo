import { defer } from "react-router-dom";
import { Aboutme, Aboutmecontent, Img, TitleBottom, TitleTob } from "./About";
import { H3, H4 } from "./Home";
import styled from "styled-components";
import { useState } from "react";
import 표창장 from "../assets/학원3.jpg"
import 수료증 from "../assets/학원.jpg" 
import 이수증 from "../assets/학원2.jpg" 
const AcEducation = styled(Aboutme)`
    /* background-color: dodgerblue; */
`
const EducationContent = styled(Aboutmecontent)`
    /* background-color: yellow; */
    justify-content: space-between;
    align-items: center;
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
    background-color: yellow;
    border-radius: 16px;
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

                    </ContentRight>
                </EducationContent>
                <EducationTitleBottom><H3> &lt; Education</H3></EducationTitleBottom>
            </AcEducation>
        </>
    )
}

export default Education