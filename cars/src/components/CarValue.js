import { useSelector } from "react-redux";

function CarValue() {

    /*
        Original:
        --------------------------------------------------------------------------------------------------------
        const totalCost = useSelector(({ cars: { data, searchTerm }}) => {
            const filteredCars = data.filter((car) => {
                return car.name.toLowerCase().includes(searchTerm.toLowerCase());
            });
            let cost = 0;
            for (let car of filteredCars) {
                cost += car.cost;
            }
            return cost;
        });


        Simplification 1:
        --------------------------------------------------------------------------------------------------------
        const totalCost = useSelector(({ cars: { data, searchTerm }}) => {
            const filteredCars = data.filter((car) => {
                return car.name.toLowerCase().includes(searchTerm.toLowerCase());
            });
            return filteredCars.reduce((acc, car) => {
                return acc + car.cost;
            }, 0)
        });


        Simplification 2:
        --------------------------------------------------------------------------------------------------------
        const totalCost = useSelector(({ cars: { data, searchTerm }}) => {
            const filteredCars = data.filter((car) => {
                return car.name.toLowerCase().includes(searchTerm.toLowerCase());
            });
            return filteredCars.reduce((acc, car) => acc + car.cost, 0)
        });


        Simplification 3:
        --------------------------------------------------------------------------------------------------------
        const totalCost = useSelector(({ cars: { data, searchTerm }}) => {
            return data
                .filter((car) => {
                    return car.name.toLowerCase().includes(searchTerm.toLowerCase());
                })
                .reduce((acc, car) => acc + car.cost, 0);
        });


        Simplification 4:
        --------------------------------------------------------------------------------------------------------
        const totalCost = useSelector(({ cars: { data, searchTerm }}) => {
            return data
                .filter((car) => 
                    car.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .reduce((acc, car) => acc + car.cost, 0);
        });

        
        Simplification 5:
        --------------------------------------------------------------------------------------------------------
        const totalCost = useSelector(({ cars: { data, searchTerm }}) => 
            data
                .filter((car) => 
                    car.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .reduce((acc, car) => acc + car.cost, 0)
        );

    */

    const totalCost = useSelector(({ cars: { data, searchTerm }}) => 
        data
            .filter((car) => 
                car.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .reduce((accumulator, car) => 
                accumulator + car.cost, 0
            ) 
    );


    return (
        <div className="car-value">
            Total Cost: ${totalCost}
        </div>
    );
}

export default CarValue;