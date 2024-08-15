import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./carsSlice";

const formSlice = createSlice({
    name: 'form',
    initialState: {
        name: '',
        cost: 0
    },
    reducers: { 
        changeName(state, action) {
            state.name = action.payload;
        },
        changeCost(state, action) {
            state.cost = action.payload;
        }
    },
    extraReducers(builder) {
        /*
            First argument is equivalent to cars/addCar.
            Second argument is the mini reducer function but we do not care about the action.
        */
       builder.addCase(addCar, (state, action) => {
            state.name = '';
            state.cost = 0;
       }); 
    }
});

export const { changeName, changeCost } = formSlice.actions; // Action objects
export const formReducer = formSlice.reducer; // Combined reducer