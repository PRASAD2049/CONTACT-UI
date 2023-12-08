import { useState } from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import './Header.css'
import Button from '@mui/material/Button';
import Logout from '../../../Authentication/components/logout/logout';
import { NavMenu } from '../menu/Menu';
// import AuthContext from '../../../store/auth-context';

function Header(props) {

    const isLoggedIn = useSelector(store => {return store});

    const [logout, setLogout] = useState(false);

    const logoutHandler = function () {
        setLogout(true);
    }

    return (
        // <AuthContext.Consumer >
        //     {
        //         (ctx) => {

                     <header className="header">
                        <NavMenu></NavMenu>
                        <div className='spacer'></div>
                        <h1>Hi {props.name}</h1>
                        {isLoggedIn && <Button variant="contained" color='success' onClick={logoutHandler}>Logout</Button>}
                        {logout && ReactDOM.createPortal(<Logout />, document.getElementById('logout-root'))}
                    </header>

        //         }
        //     }

        // </AuthContext.Consumer>
    )
}

export default Header;