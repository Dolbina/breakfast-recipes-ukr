import { useEffect, useState } from 'react';


import { CarGallary } from 'components/CarGallary/CarGallary';
import { Loader } from '../components/Loader/Loader';
import { fetchCars } from '../services/api';
import { ErrorMessage } from '../components/ErrorMessage.styled';

import { TitleHidden } from '../components/CarGallary/CarGallary.styled';

import { ButtonLoadMore, ButtonWrap } from 'components/ButtonLoadMore/ButtonLoadMore.styled';



const Catalog = () => {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [visibleCars, setVisibleCars] = useState(8);
  const [showLoadMore, setShowLoadMore] = useState(true);


  const loadMoreCars = () => {
    const totalVisibleCars = visibleCars + 8;
    if (totalVisibleCars >= cars.length) {
      setShowLoadMore(false);
    }
    setVisibleCars(totalVisibleCars);
  };

  useEffect(() => {
    const fetchCars2 = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const results = await fetchCars();
        console.log(results);
        setCars(results);
        
      } catch (error) {
        setError('Error, try reloading the page');
      } finally {
        setIsLoading(false);
      }
    };
    fetchCars2();
  }, []);
 


  return (
    <main>
      <TitleHidden>Рецепти сніданків</TitleHidden>
      {!isLoading && error && <ErrorMessage>{error}</ErrorMessage>}
      {isLoading && <Loader />}
      {!error && cars.length > 0 && (
        <>
          <CarGallary cars={cars.slice(0, visibleCars)} />

          {showLoadMore && cars.length > 8 && (
            <ButtonWrap>
              <ButtonLoadMore type="button" onClick={loadMoreCars}>
                Завантажити ще
              </ButtonLoadMore>
            </ButtonWrap>
          )}
        </>
      )}
      {!error && cars.length > 0 && cars.length === 0 && (
        <ErrorMessage>Неправильні параметри. Не знайшло рецепт.</ErrorMessage>
      )}
    </main>
  );
};


export default Catalog;


