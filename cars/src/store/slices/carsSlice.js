import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        data: []
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        addCar(state, action) {
            /* 
                Assumption: action.payload === { name: 'carName', cost: 140 } 
                
                nanoid: function to create a random id
            */
            state.data.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid()
            });
        },
        removeCar(state, action) {
            /* Assumption: action.payload === the id of the car we want to remove */
            const updated = state.data.filter((car) => {
                /* If the comparison returns true, we want to keep the value if not, value is not added */
                return car.id !== action.payload
            });
            state.data = updated;
        }
    }
});

// Action objects
export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;

// Combined reducer
export const carsReducer = carsSlice.reducer;