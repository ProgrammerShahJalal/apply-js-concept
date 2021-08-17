function inchToFeet(inch) {
    var feet = inch / 12;
    return feet;
}
var dadiInch = 432;
var myInch = 234;
var feet = inchToFeet(dadiInch);
console.log('feet result is', feet);

function mileToKilometer(mile) {
    var km = mile * 1.609;
    return km;
}
var dadamile = 45;
var km = mileToKilometer(dadamile);
console.log('mile to kilometer is', km);
