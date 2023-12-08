import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        value: '',
        items: []
    },
    reducers: {
        addValue(state, discriptor) {
            console.log('asdfdsf', discriptor);

            state.value = discriptor.payload;

        },
        addItem(state) {

            state.items = [...state.items, state.value];

        }
    }
})

export const todoActions = todoSlice.actions;
const TodoReducer = todoSlice.reducer;
export default TodoReducer;