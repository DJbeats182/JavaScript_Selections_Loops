
// Exercise 1: Ignore Even
console.log("EXERCISE 1:\n==========\n");
for (let i = 0; i <= 100; i++) { 
    if (i % 2 == 0){
        continue;
    } else {
        console.log(i);
    }
}


// Exercise 2: FIZZBUZZ
console.log("EXERCISE 2:\n==========\n");
let fb = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 15 == 0) {    
        console.log(i, "FIZZBUZZ");
        fb++;
    } else if (i % 5 == 0) {       
        console.log(i, "BUZZ");
    } else if (i % 3 == 0) {        
        console.log(i, "FIZZ");
    }
}
console.log(`There are ${fb} FIZZBUZZes`);

// Exercise 3: Repeat with While and DO/While
console.log("EXERCISE 3:\n==========\n");
// Exercise 1 with a While Loop
let j = 0;
while (j <= 100) {
   if (j % 2 !=0) {
    console.log(j);
    }
    j++;
}

// Exercise 2 with a Do/While
let x = 1;
do {
    if (x % 15 == 0) {    
        console.log(x, "FIZZBUZZ");        
    } else if (x % 5 == 0) {       
        console.log(x, "BUZZ");
    } else if (x % 3 == 0) {        
        console.log(x, "FIZZ");
    }
    x++;
} while (x <= 100)

// Exercise 4 Find Value
console.log("EXERCISE 4:\n==========\n");
let value = Math.round((Math.random() * 500));
let a = Math.round(Math.random() * (500 - 100) + 100);

for (let i = 1; i <= a; i++) {
    if (i == value) {
        console.log("Found Value!")
        break;
    } else {
        console.log("Did not find value");        
    }
}

// Exercise 5 Customized FIZZBUZZ
console.log("EXERCISE 5:\n==========\n");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let fizzbuzz = fizzDivisor * buzzDivisor;
let n = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);
let i = 1;
for (start; i <= n; i++) {
        if (i % fizzbuzz == 0) {    
        console.log(i, "FIZZBUZZ");        
    } else if (i % buzzDivisor == 0) {       
        console.log(i, "BUZZ");
    } else if (i % fizzDivisor == 0) {
        console.log(i, "FIZZ")
    }
}