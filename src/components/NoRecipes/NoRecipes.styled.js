import styled from 'styled-components';
export const SectionNoRecipes = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;


export const NoRecipesText = styled.h1`
  background-color: transparent;
  border: none;
  text-align: center;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.4;
  color: #00d4ff;
  text-shadow: 1px 1px 3px #5c5757;
  padding: 0;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 28px;
    margin-top: 60px;
  }
  
  @media (min-width: 1440px) {
    font-size: 34px;
   
  }
`;

export const NoRecipesImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
 
`;