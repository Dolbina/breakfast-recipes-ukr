import Recipes from '../../assets/images/Recipe book-rafiki_2.png';
import {
  SectionNoRecipes,NoRecipesText,
  NoRecipesImg,
} from './NoRecipes.styled';
export const NoRecipes = () => {
    return (
      <SectionNoRecipes>
        <NoRecipesText>Ваш список улюблених рецептів пустий</NoRecipesText>
        <NoRecipesImg src={Recipes} alt="recipe book" />
      </SectionNoRecipes>
    );
}
