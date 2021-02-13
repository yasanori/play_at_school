import axios from 'axios';
import { restaurantsIndex } from '../urls/indes';

export const fetchRestaurants = async () => {
  return await axios.get(restaurantsIndex)
    .then(res => {
      return res.data
    })
    .catch((e) => console.log(e))
}
