import { CarGallaryWrap} from './CarGallary.styled';
import { CarCard } from '../CarCard/CarCard';


export const CarGallary = ({ cars }) => {
  return (
    <div>
      <CarGallaryWrap>
        {cars?.map(car => (
          <li key={car.id}>
            <CarCard car={car} />
          </li>
        ))}
      </CarGallaryWrap>
    </div>
  );
};



