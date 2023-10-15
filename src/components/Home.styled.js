import styled from 'styled-components';

import HomeCar3 from '../assets/images/hotel-breakfast-room-service.jpg';



export const MainWrapper = styled.div`
  display: flex;

  width: 100%;
  height: 100vh;
  background: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.3),
      rgba(47, 48, 58, 0.5)
    ),
    url(${HomeCar3});

  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;

 
`;



export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
  gap: 10px;
  width: 320px;
  height: 100%;
  /* margin-left: auto; */
  align-items: center;

  @media (min-width: 768px) {
    margin-right: 30px;
    gap: 20px;
    width: 620px;
    align-items: flex-start;
    margin-left: auto;
  }
  @media (min-width: 1440px) {
    margin-right: 40px;
    gap: 30px;
    width: 800px;
    align-items: flex-start;
  }
`;

export const TitleHome = styled.h1`
  color: #00d4ff;
  font-weight: 600;
  font-size: 34px;
  line-height: 1.6;
  text-shadow: 1px 1px 3px #5c5757;

  @media (min-width: 768px) {
    font-size: 60px;
    line-height: 1.4;
  }
  @media (min-width: 1440px) {
    font-size: 84px;
    line-height: 1.2;
    font-weight: 900;
  }
 
`;

export const TextHome = styled.p`
 
  color: #ffeeca;

  font-weight: 400;
  font-size: 18px;
  line-height: 1.2;
  text-shadow: 1px 1px 3px #5c5757;

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 1.4;
  }
  @media (min-width: 1440px) {
    font-size: 40px;
    line-height: 1.4;
    
  }
`;




