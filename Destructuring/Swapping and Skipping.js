/* Swapping */

let mon = "Sat";
let sat = "Mon";

[sat, mon] = [mon, sat];

/*
[sat, mon] = ["Sat, "Mon];
*/

/* Skipping */

const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];

const [,,,thu, fri] = days;

console.log(thu, fri);