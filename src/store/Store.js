import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './slices/auth-slice';
import TodoReducer from './slices/todo-slice';

const store = configureStore({
    reducer: { 
        auth: AuthReducer,
        todo: TodoReducer
    }
})

export default store;