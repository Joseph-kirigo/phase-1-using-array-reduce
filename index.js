const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// let totalBatteries = batteryBatches.reduce((total, batch) => {
//     return total + batch;

let totalBatteries  = batteryBatches.reduce(function(accum, initial){
    return initial + accum;
},0)

console.log(totalBatteries)