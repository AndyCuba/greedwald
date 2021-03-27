import styled from 'styled-components';

const StyledDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-template-rows: 1fr;
    grid-gap: 2vw;
    justify-content: center;
    align-items: start;
    h1 + p {
        text-indent: 1rem;
    }
    p + p {
        text-indent: 1rem;
    }
    a { 
        font-size: 1.5rem;
        text-decoration: none;
        text-align:center;
        color: red;      
    }
`;

export { StyledDiv };