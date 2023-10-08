import {
  MainWrapper,
 
  TextContainer,
  TitleHome,
  TextHome,
  
} from '../components/Home.styled';



const Home = () => {

  return (
    <main>
      <MainWrapper>
        <TextContainer>
          <TitleHome>Що сьогодні на сніданок?</TitleHome>
          <TextHome>
            Ласкаво просимо на нашу сторінку, де ми пропонуємо вам ідеї та
            рецепти смачних та здорових сніданків! 
          </TextHome>
        </TextContainer>
      </MainWrapper>
    </main>
  );
};

export default Home;
