import axios from "axios";

export const fetchCars = async () => {
  const { data } = await axios.get(
    `https://6529972055b137ddc83f0439.mockapi.io/recipes`
  );
  return data;
}











