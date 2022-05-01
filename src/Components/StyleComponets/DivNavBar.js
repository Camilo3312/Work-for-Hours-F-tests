import styled from "styled-components";

export const DivNavBar = styled.div`
    height: calc(100vh - 40px) ;
    border-radius: var(--border-radius-2);
    box-shadow: 0 0 10px var(--gray-shadow-1);
    background: #FFFF;
    overflow: hidden;
    position: fixed;
    top: 20px;
    right: ${props => props.isOcult ? '-300px' : '20px'};
    transition: all .2s ease-in-out;
    z-index: 3;
`;