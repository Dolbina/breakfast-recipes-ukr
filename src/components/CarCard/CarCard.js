
import { useState } from 'react';

import {
  CardWrap,
  Img,
  ImageContainer,
  IconWrap,
  SubtitleCard,
  SubtitleCardBlue,
  SubtitleWrap,
  TextWrap,
  IconHeart,
  IconHeartEmpty,
  TextWrapAddress,
} from './CarCard.styled';

import { ButtonLearnMore } from '../ButtonLearnMore/ButtonLearnMore';



function toggleFavorite(carId) {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  const carIndex = favorites.indexOf(carId);
  if (carIndex !== -1) {
    
    favorites.splice(carIndex, 1);
  } else {
   
    favorites.push(carId);
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
}


export const CarCard = ({ car }) => {
 
  const [isFavorites, setIsFavorites] = useState(
    JSON.parse(localStorage.getItem('favorites'))?.includes(car.id) || false
  );

  const toggleFavorites = () => {
    setIsFavorites(!isFavorites);
    toggleFavorite(car.id);
  };


  return (
    <CardWrap>
      <ImageContainer>
        <Img src={car.img} alt={car.title} />
        <IconWrap>
          {isFavorites ? (
            <IconHeart aria-label="heart" onClick={toggleFavorites} />
          ) : (
            <IconHeartEmpty aria-label="heart" onClick={toggleFavorites} />
          )}
        </IconWrap>
      </ImageContainer>

      <TextWrap>
        <SubtitleWrap>
          <div>
            <SubtitleCard>
              {`${car.title} `}
              <SubtitleCardBlue>{`Час: ${car.time} хв., порції: ${car.person}`}</SubtitleCardBlue>
             
            </SubtitleCard>
           
          </div>
          <div>
            <SubtitleCard></SubtitleCard>
          </div>
        </SubtitleWrap>
        <TextWrapAddress></TextWrapAddress>
      </TextWrap>
      <ButtonLearnMore car={car}>Learn more</ButtonLearnMore>
    </CardWrap>
  );
};


