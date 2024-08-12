import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        cars: []
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        addCar(state, action) {
            /* Assumption: action.payload === { name: 'carName', cost: 140 } */
            state.cars.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid()
            });
        },
        removeCar(state, action) {
            /* Assumption: action.payload === the id of the car we want to remove */
            const updated = state.cars.filter((car) => {
                /* If the comparison returns true, we want to keep the value if not, value is not added */
                return car.id !== action.payload
            });
            state.cars = updated;
        }
    }
});

// Action objects
export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;

// Combined reducer
export const carsReducer = carsSlice.reducer;