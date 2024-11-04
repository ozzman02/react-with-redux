import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { removeCar } from "../store";

const memoizedCars = createSelector(
  [(state) => state.cars.data, (state) => state.cars.searchTerm],
  (data, searchTerm) =>
    data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
);

function CarList() {

    const dispatch = useDispatch();

    const cars = useSelector(memoizedCars);

    const name = useSelector((state) => state.form.name);

    /*
        Original function before using derived state

            const cars = useSelector((state) => {
                return state.cars.data;
            });

        Derived State: Look at cars.data and return only cars that have a name that contains searchTerm!

            Instead of using the complete state object we are using destructuring 
            to get only the properties that we need and to make to code more
            readable.

                const cars = useSelector(({ cars: { data, searchTerm }}) => {
                    return data.filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()));
                });

        Highlighting existing cars:

            We need to return both the list of cars and the current name property.

                const cars = useSelector(({ form, cars: { data, searchTerm }}) => {
                    const filteredCars = data.filter((car) => 
                        car.name.toLowerCase().includes(searchTerm.toLowerCase())
                    );
                    return { 
                        cars: filteredCars,
                        name: form.name
                    }
                });

            Using destructuring:

                const { cars, name } = useSelector(({ form, cars: { data, searchTerm }}) => {
                    const filteredCars = data.filter((car) => 
                        car.name.toLowerCase().includes(searchTerm.toLowerCase())
                    );
                    return { 
                        cars: filteredCars,
                        name: form.name
                    }
                });

    */
    /*const { name } = useSelector(({ form, cars: { data, searchTerm }}) => {
        const filteredCars = data.filter((car) => 
            car.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        return { 
            cars: filteredCars,
            name: form.name
        }
    });*/

    const handleCarDelete = (car) => {
        dispatch(removeCar(car.id));
    };

    /* 
        Highlighting existing cars:

        - We do not want to change the data model just to suit the needs of the UI.
        - In this case is better to include this functionality inside this function and not in the useSelector function.
        - Here we want to decide if the car should be bold. (state.form.name)
    */
    const renderedCars = cars.map((car) => {

        // name is obtained from useSelector
        const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

        return (
            <div key={car.id} className={`panel ${bold && 'bold'}`}>
                <p>{car.name} - ${car.cost}</p>
                <button 
                    className="button is-danger"
                    onClick={() => handleCarDelete(car)}
                >
                    Delete
                </button>
            </div>
        );
    });

    return (
        <div className="car-list">
            {renderedCars}
            <hr />
        </div>
    );
}

export default CarList;