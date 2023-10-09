import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import LogoSVG from '../../assets/images/logo.svg';

export const Container = styled.div`
  width: 320px;
  padding: 0 10px;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 768px;
    padding: 0 20px;
    margin: 0 auto;
  }
  @media (min-width: 1440px) {
    width: 1440px;
    padding: 0 20px;
    margin: 0 auto;
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

export const LogoWrap = styled.p`
  margin-right: 8px;
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-size: 14px;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #00d4ff;
  }
`;



export const ContactInfo = styled.div`
  display: flex;
  font-size: 14px;
  flex-direction: column;
  color: #121417;
`;
export const Logo = styled.div`
  width: 80px;
  height: 80px;
  background: url(${LogoSVG}) no-repeat center center;
  background-size: contain;
`;