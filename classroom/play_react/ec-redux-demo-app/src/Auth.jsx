import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getIsSignedIn } from './reducks/users/selectors';
import { listenAuthState } from './reducks/users/operations';

const Auth = ({ children }) => {

  const dispatch = useDispatch()
  const selector = useSelector(state => state);
  const isSingedIn = getIsSignedIn(selector);

  useEffect(() => {
    if (!isSingedIn) {
      dispatch(listenAuthState());
    }
  }, [])

  if (!isSingedIn) {
    return <></>
  } else {
    return children
  }
}

export default Auth;
