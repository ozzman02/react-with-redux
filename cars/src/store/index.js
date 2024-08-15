import { configureStore } from "@reduxjs/toolkit";
import { carsReducer, addCar, removeCar, changeSearchTerm } from "./slices/carsSlice";
import { formReducer, changeName, changeCost } from "./slices/formSlice";

/*
    Our Big State Object in the store is:

    {
        cars: {
            searchTerm: 'Su',
            data: [ { id: 'a', name: 'Subaru', cost: 150 } ]
        }
        form: {
            name: 'abc',
            cost: 150
        }
    }
*/
const store = configureStore({
    reducer: {
        cars: carsReducer,
        form: formReducer
    }
});

// action creators
export { store, changeName, changeCost, addCar, removeCar, changeSearchTerm }; 