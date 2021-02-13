import React, { useEffect, useReducer } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COLORS } from '../style_constants';
import { LocalMallIcon } from '../components/Icons';
import { fetchFoods } from '../apis/foods';
import { initialState as foodsinItialState, foodsActionTypes, foodsReducer } from '../reducers/foods';
import { REQUEST_STATE } from '../constants';
import { FoodWrapper } from '../components/FoodWrapper';
import Skeleton from '@material-ui/lab/Skeleton';

// image
import MainLogo from '../images/logo.png';
import FoodImage from '../images/food-image.jpg';

const HeaderfWraper = styled.div`
display: flex;
justify-content: space-between;
padding: 8px 32px;
`

const BagIconWrapper = styled.div`
  padding-top: 24px;
`;

const ColoredBagIcon = styled(LocalMallIcon)`
  color: ${COLORS.MAIN};
`;

const MainLogoImage = styled.img`
  height: 90px;
`

const FoodsList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 50px;
`;

const ItemWrapper = styled.div`
  margin: 16px;
`;

export const Foods = ({ match }) => {
  const [foodsState, dispatch] = useReducer(foodsReducer, foodsinItialState)

  useEffect(() => {
    dispatch({ type: foodsActionTypes.FETCHING });
    fetchFoods(match.params.restaurantsId)
      .then((data) => {
        dispatch({
          type: foodsActionTypes.FETCH_SUCCESS,
          payload: {
            foods: data.foods
          }
        })
      })
  }, [])

  return (
    <>
      <HeaderfWraper>
        <Link to="restaurants">
          <MainLogoImage src={MainLogo} alt='main logo' />
        </Link>
        <BagIconWrapper>
          <Link to="/orders">
            <ColoredBagIcon fontSize="large" />
          </Link>
        </BagIconWrapper>
      </HeaderfWraper>
      <FoodsList>
        {
          foodsState.fetchState === REQUEST_STATE.LOADING ?
            <>
              {
                [...Array(12).keys()].map(i =>
                  <ItemWrapper key={i}>
                    <Skeleton key={i} variant="rect" width={450} height={180} />
                  </ItemWrapper>
                )
              }
            </>
            :
            foodsState.foodsList.map(food =>
              <ItemWrapper key={food.id}>
                <FoodWrapper
                  food={food}
                  onClickFoodWrapper={food => console.log(food)}
                  imageUrl={FoodImage}
                />
              </ItemWrapper>
            )
        }
      </FoodsList>
    </>
  )
}
