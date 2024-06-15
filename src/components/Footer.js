import styled from "styled-components";
import { Container, H1, P } from "./Home";

const FootBox = styled.div`
    width: 100%;
    height: 300px;
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


function Foot(){
    return(
        <>
            <Container>
                <FootBox>
                    <P>웹사이트로 최대한 깔끔하게 만들어 보았습니다.</P>
                    <H1>감사합니다!!  -- 작성자 : 전준희</H1>
                </FootBox>
            </Container>
        </>
    )
}

export default Foot