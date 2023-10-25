import styled from 'styled-components';

export const CarGallaryWrap = styled.ul`
display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
`;

export const TitleHidden = styled.h1`
 
    position: absolute;
    white-space: nowrap;
    width: 1px;
    height: 1px;
    overflow: hidden;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    margin: -1px;
  
`;

