import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "../../Commons/components/header/Header";
import { useEffect } from "react";
import { authActions } from "../../store/slices/auth-slice";
import { SharedLoader } from "../../Shared/components/shared-loader/SharedLoader";

export function RootLayout() {

  let name = "prasad";

  const navigate = useNavigation();

  const isLoggedIn = useSelector(store => { return store.auth.isLoggedIn; })

  const dispatch = useDispatch();

  const storedLoggedInfo = localStorage.getItem('isLoggedIn');

  useEffect(() => {
    if (storedLoggedInfo === '1') {

      dispatch(authActions.login())

    }
  }, [storedLoggedInfo, dispatch])


  return (
    <>
      {isLoggedIn && <Header name={name}></Header>}
      {navigate.state === 'loading' && <SharedLoader></SharedLoader>}
      <Outlet />
    </>
  )

}