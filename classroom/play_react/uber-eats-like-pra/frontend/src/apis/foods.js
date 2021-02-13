import axios from 'axios';
import { foodsIndex } from '../urls/indes';

export const fetchFoods = async (restaurantId) => {
  return await axios.get(foodsIndex(restaurantId))
    .then(res => {
      return res.data
    })
    .catch(e => {
      console.log(e)
    })
}
