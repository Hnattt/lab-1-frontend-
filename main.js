//Task 1.2
console.log("Task 1.2");
let x = -1;
let y = 2;
let condition1 = Math.cos(x) < 1;
let condition2 = x + y >= 5;
console.log(`cos(${x}) < 1 → ${condition1}`);
console.log(`${x} + ${y} ≥ 5 → ${condition2}`);

//Task 2.1
console.log("Task 2.1");
let k = 14;
let m = 0.42;
x = Math.pow(Math.sqrt(k + 6.1), 3);
y = Math.log(k ** 4) + Math.log10(m ** -6);
let phi = Math.acos((x ** 2 / 0.13) ** -1) + Math.abs(Math.log(y ** -1));
console.log(`x = √((k + 6.1)³) = ${x.toFixed(4)}`);
console.log(`y = ln(k⁴) + lg(m⁻⁶) = ${y.toFixed(4)}`);
console.log(`φ = arccos((x² / 0.13)⁻¹) + |ln(y⁻¹)| = ${phi.toFixed(4)}`);

//Task 3.1
console.log("Task 3.1");
let c = 12; 
x = -2;    
let result;

if (c > 9 && x <= -1) {
    result = Math.cbrt(c * x);
} else if (c < 0 && -1 < x && x <= 1) {
    result = 1 / Math.tan(c / x);
} else if (c > 0 && x < c) {
    result = Math.log(Math.abs(c ** 2 - x ** 2));
} else {
    result = "Невизначене значення";
}

console.log(`c = ${c}, x = ${x}`);
console.log(`y = ${result}`);

//Task 4.1
console.log("Task 4.1");
let t = 2.4;
let tMax = 6.9;
let deltaT = 0.4;
while (t <= tMax) {
    let z = (t + Math.sin(2 * t)) / (t ** 2 - 3);
    console.log(`t = ${t.toFixed(2)}, z = ${z.toFixed(4)}`);
    t += deltaT;
}

console.log("Task 4.2");
t = 3.1;
deltaT = 0.8;
let n = 6;
for (let i = 0; i < n; i++) {
    let z = (t + Math.sin(2 * t)) / (t ** 2 - 3);
    console.log(`t = ${t.toFixed(2)}, z = ${z.toFixed(4)}`);
    t += deltaT;
}

//Task 5.1
console.log("Task 5.1");
let S = 0;
for (let i = 10; i <= 30; i++) {
    S += (i ** 3 + 3 * i ** 2 + 7) / (3 * i + 8);
}
console.log(`S = ${S.toFixed(4)}`);
let i = 5;
let j = 11;
let Z = 1;
for (let k = i; k <= j; k++) {
    Z *= ((k + 3) ** 2) / ((k + 7) * (k + 9));
}
console.log(`Z = ${Z.toFixed(4)}`);
