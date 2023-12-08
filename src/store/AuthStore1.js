import { createStore } from 'redux';

const counterReducer = (state = { isLoggedIn: false }, action) => {

    if(action.type === "LOGIN") {

        localStorage.setItem('isLoggedIn', '1');
        return {
            isLoggedIn: true
        }

    }

    if(action.type === "LOGOUT") {

        localStorage.removeItem('isLoggedIn');
        return {
            isLoggedIn: false
        }

    }

    return {
        isLoggedIn: false
    }

}

const authStore1 = createStore(counterReducer);

export default authStore1;