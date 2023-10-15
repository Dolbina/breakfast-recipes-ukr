import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import LogoImg from '../../assets/images/logo.jpg';
// import LogoSVG from '../../assets/images/logo.svg';

export const Container = styled.div`
  width: 100%;
  padding: 0 10px;
  margin: 0 auto;

  @media (min-width: 420px) {
    width: 400px;
  }
  @media (min-width: 768px) {
    width: 768px;
  }
  @media (min-width: 1440px) {
    width: 1440px;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 2px solid #00d4ff;

  > nav {
    display: flex;
  }
`;

export const LogoWrap = styled.div`
  width: 75px;
  height: 48px;
  margin-right: 8px;

  background: url(${LogoImg}) no-repeat center center;
  background-size: contain;
  fill: #ff5b3d;
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-size: 12px;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #00d4ff;
  }

  @media (min-width:768px) {
    font-size: 14px;
  }
`;



export const ContactInfo = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    font-size: 14px;
    flex-direction: column;
    color: #121417;
  }
`;
export const Logo = styled.div`
  width: 40px;
  height: 40px;
  background: url(${LogoImg}) no-repeat center center;
  background-size: contain;

  @media (min-width: 768px) {
    width: 60px;
    height: 60px;
  }
  @media (min-width: 1440px) {
    width: 80px;
    height: 80px;
  }
`;