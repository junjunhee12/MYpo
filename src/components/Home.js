import { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import Head from './Header';
import About, { Img } from './About';
import Education from './Education';
import Portfol from './Portfolio';
// 공통 부분 --------------------------------------------
export const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
// 공통 부분 --------------------------------------------
export const Flexspacebet = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* border-top: 1px solid black; */
`
export const Flexcolumn = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    gap: 2rem;
    @media (max-width: 1735px) {
        padding: 0 1rem;
    }   
`
export const Div = styled.div`
    text-align: center;
`
export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
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


// ----------------------------------------


function Home() {
    
    return (
        <Container>
            <Head />
            <About />
            <Education />
            <Portfol />
            <About />
        </Container>
    );
}

export default Home;
