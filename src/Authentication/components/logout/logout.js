// import { useContext } from "react";
import {useDispatch} from 'react-redux';
import { authActions } from '../../../store/slices/auth-slice';
// import AuthContext from "../../../store/auth-context";
import { Button } from "@mui/material";

const Logout = function () {

    // const ctx = useContext(AuthContext);

    const dispatch = useDispatch();
    
    const logoutHandler = () => {
        dispatch(authActions.logout());
    }

    return <div>
        <h2>Do you want to Logout!</h2>
        {/* <button type="button" onClick={ctx.onLogout}>logout</button> */}

        <Button variant='outlined' type="button" color='secondary' onClick={logoutHandler}>logout</Button>

    </div>
}

export default Logout;