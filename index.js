const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers() {
    let firstDuo; 
    firstDuo = drivers.slice(0, 2);
    return firstDuo;
}

function returnLastTwoDrivers() {
    let lastDuo;
    lastDuo = drivers.slice(-2)
    return lastDuo;
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function(value) {
        return value * multiplier;
    }

}

function fareDoubler(fare) {
    let price = 10;
    fare = price * 2;
    return fare;
}

function fareTripler(fare) {
    let price = 12;
    fare = price  * 3; 
    return fare;
}

function selectDifferentDrivers(drivers, driverSelectFunction) {
    return driverSelectFunction(returnFirstTwoDrivers);
}

function selectDifferentDrivers(drivers, driverSelectFunction) {
    return driverSelectFunction(returnLastTwoDrivers);
}
