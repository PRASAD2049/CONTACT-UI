import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: { isLoggedIn: false },
    reducers: {

        login(state) {

            localStorage.setItem('isLoggedIn', '1');

            return {
                isLoggedIn: true
            }
        },

        logout(state) {

            localStorage.removeItem('isLoggedIn');

            localStorage.removeItem('token');

            return {
                isLoggedIn: false
            }

        }

    }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;