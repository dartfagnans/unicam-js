var a;
console.log("value of " + a + ": " + typeof a);

a = undefined;
console.log("value of " + a + ": " + typeof a);

a = null;
console.log("value of " + a + ": " + typeof a);

a = { b: "c" };
console.log("value of " + a + ": " + typeof a);

a = ["a", 9];
console.log("value of " + a + ": " + typeof a);

a = "hello world";
console.log("value of " + a + ": " + typeof a);

a = 42;
console.log("value of " + a + ": " + typeof a);

a = Math.PI;
console.log("value of " + a + ": " + typeof a);

a = true;
console.log("value of " + a + ": " + typeof a);

var x = 0;

console.log('While');
console.log('................\n');

while (x < 10) {
    console.log(x);
    x++;
}

console.log('\nDo While');
console.log('................\n');

x = 20;

do {
    console.log(x);
    x++;
}while (x < 10);

console.log('\nFor');
console.log('................\n');

for(x = 0;x < 10;x++){
    console.log(x);
}

console.log('\nIf');
console.log('................\n');

x = true;

if(x){
    console.log('Here');
}

console.log('\nIf/Else');
console.log('................\n');

x = false;

if(x){
    console.log('Here');
}else{
    console.log('There');
}

console.log('\nIf/Else if');
console.log('................\n');

x = 3;

if(x == 1){
    console.log('Here');
}else if(x == 2){
    console.log('There');
}else{
    console.log('Far away');
}

console.log('\nSwitch');
console.log('................\n');

switch(x) {
    case 1:
        console.log('Here');
        break;
    case 2:
        console.log('There');
        break;
    default:
        console.log('Far away');
}

console.log('\nAnd/Or');
console.log('................\n');

//And / Or / Not

if(true && false){
    console.log('true && false is true');
}else{
    console.log('true && false is false');
}

if(true || false){
    console.log('true || false is true');
}else{
    console.log('true || false is false');
}

if(!true){
    console.log('!true is true');
}else{
    console.log('!true is false');
}

console.log('\nTry/Catch');
console.log('................\n');

try{
    throw new Error('Oh My God! We are doomed!');
}catch (e){
    console.log(e.message);
}

console.log('Coercion');
console.log('................\n');

var answer = "42";
var doubleAnswer = answer * 2;

console.log(answer, typeof answer);
console.log(doubleAnswer, typeof doubleAnswer);

answer = 42;
doubleAnswer = (answer * 2) + "";

console.log(answer, typeof answer);
console.log(doubleAnswer, typeof doubleAnswer);

console.log('\nTruthy & Falsy');
console.log('................\n');

if(false){
    console.log('false is true');
}else{
    console.log('false is false');
}

if(""){
    console.log('"" is true');
}else{
    console.log('"" is false');
}

if(0){
    console.log('0 is true');
}else{
    console.log('0 is false');
}

if(NaN){
    console.log('NaN is true');
}else{
    console.log('NaN is false');
}

if(null){
    console.log('null is true');
}else{
    console.log('null is false');
}

if(undefined){
    console.log('undefined is true');
}else{
    console.log('undefined is false');
}

if("0"){
    console.log('"0" is true');
}else{
    console.log('"0" is false');
}

if("false"){
    console.log('"false" is true');
}else{
    console.log('"false" is false');
}

console.log('\nQuick boolean cast');
console.log('................\n');

console.log(!!"");

console.log('\nOr operator for defaults');
console.log('................\n');

var a = null;
var b = a || 1;

console.log("b", b);

console.log('\nEquality');
console.log('................\n');

a = "42";
b = 42;

console.log('a == b',a == b);
console.log('a === b',a === b);

console.log('\nSpecial cases');
console.log('................\n');

a = 0/0; //NaN
b = NaN;

console.log('a === b',a === b);
console.log('b === a',b === a);
console.log('isNaN(a) && isNaN(b)',isNaN(a) && isNaN(b));
