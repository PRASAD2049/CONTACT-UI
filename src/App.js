import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.css';

import ContactSummaryPage from './Contacts/components/contact-summary-page/ContactSummaryPage';
import ContactAddPage, { ContactDetailLoader } from './Contacts/components/contact-add-page/ContactAddPage';
import Login from './Authentication/components/login/Login';
import { authActions } from './store/slices/auth-slice';
import { ContactDetailPage } from './Contacts/components/contact-detail-page/ContactDetailPage';
// import AuthContext from './store/auth-context';
import { ThemeContextProvider } from './store/theme-context';
import { RootLayout } from './Contacts/root/Root';
import { ErrorPage } from './Commons/pages/error-page/error-page';


const router = createBrowserRouter([
  {
    path: '/', element: <RootLayout />,
    children: [
      { path: '/', element: <Login /> },
      { path: '/contact/summary', element: <ContactSummaryPage />, },
      { path: '/contact/add', element: <ContactAddPage /> },
      { path: '/contact/edit/:id', id: 'editContact', element: <ContactAddPage /> , loader: ContactDetailLoader, errorElement: <ErrorPage />},
      { path: '/contact/:id', element: <ContactDetailPage /> },
    ],
    errorElement: <ErrorPage />
  },

  // { path: "*", element: <PageNotFound /> }

])

function App() {

  const dispatch = useDispatch();


  const storedLoggedInfo = localStorage.getItem('isLoggedIn');

  useEffect(() => {
    if (storedLoggedInfo === '1') {

      // dispatch({type: 'LOGIN'})

      dispatch(authActions.login())

    }
  }, [storedLoggedInfo, dispatch])


  return (
    <div className="App">
      <ThemeContextProvider>
        {/* <Provider store={Store}> */}
        {/* <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler }}> */}
        {/* {!isLoggedIn && <Login onLogin={loginHandler}></Login>} */}
        {/* {isLoggedIn && <Header name={name}></Header>} */}
        {/* </AuthContext.Provider> */}
        {/* </Provider> */}
        <RouterProvider router={router}></RouterProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
