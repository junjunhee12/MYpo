import styled from "styled-components";
import { Container, H1 } from "./Home";

const FootBox = styled.div`
    width: 100%;
    height: 300px;
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`


function Foot(){
    return(
        <>
            <Container>
                <FootBox>
                    <H1>감사합니다!!</H1>
                </FootBox>
            </Container>
        </>
    )
}

export default Foot