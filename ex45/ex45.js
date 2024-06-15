//Question 45: cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that%E2%80%99s returned to make sure all the information was stored correctly.
function createCar(manufacturer, modelName, ...options) {
    const car = {
        manufacturer,
        modelName,
    };
    for (const option of options) {
        Object.assign(car, option);
    }
    return car;
}
const carInfo = createCar("Toyota", "Camry", {
    color: "Blue",
    year: 2022,
    features: ["Navigation", "Sunroof"],
});
console.log(carInfo);
export {};
