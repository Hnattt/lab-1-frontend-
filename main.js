function task1() {
    let x = -1;
    let y = 2;
    let condition1 = Math.cos(x) < 1;
    let condition2 = x + y >= 5;
    let result = `cos(${x}) < 1 → ${condition1} \n`;
    result += `${x} + ${y} ≥ 5 → ${condition2}`;
    document.getElementById("result").innerText = result;
    console.log("Задача 1:\n", result);
}
function task2() {
    let k = 14;
    let m = 0.42;
    let x = Math.pow(Math.sqrt(k + 6.1), 3);
    let y = Math.log(k ** 4) + Math.log10(m ** -6);
    let phi = Math.acos((x ** 2 / 0.13) ** -1) + Math.abs(Math.log(y ** -1));
    let result = `x = √((k + 6.1)³) = ${x.toFixed(4)}\n`;
    result += `y = ln(k⁴) + lg(m⁻⁶) = ${y.toFixed(4)}\n`;
    result += `φ = arccos((x² / 0.13)⁻¹) + |ln(y⁻¹)| = ${phi.toFixed(4)}`;
    document.getElementById("result").innerText = result;
    console.log("Задача 2:\n", result);
}
function task3() {
    let c = parseFloat(prompt("Введіть значення c:"));
    let x = parseFloat(prompt("Введіть значення x:"));
    let y;
    if (c > 9 && x <= -1) {
        y = Math.cbrt(c * x); 
    } else if (c < 0 && -1 < x && x <= 1) {
        y = 1 / Math.tan(c / x); 
    } else if (c > 0 && x < c) {
        y = Math.log(Math.abs(c ** 2 - x ** 2)); 
    } else {
        y = "Невизначене значення (умови не виконані)";
    }
    let result = `c = ${c}, x = ${x}\n`;
    result += `y = ${y}`;
    document.getElementById("result").innerText = result;
    console.log("Задача 3:\n", result);
}
function task4() {
    let choice = prompt("Виберіть умову:\n1 - Варіант (а)\n2 - Варіант (б)");
    let results = "";
    if (choice === "1") {
        let t = 2.4;
        let tMax = 6.9;
        let deltaT = 0.4;
        while (t <= tMax) {
            let z = (t + Math.sin(2 * t)) / (t ** 2 - 3);
            results += `t = ${t.toFixed(2)}, z = ${z.toFixed(4)}\n`;
            t += deltaT;
        }
    } else if (choice === "2") {
        let t = 3.1;
        let deltaT = 0.8;
        let n = 6;
        for (let i = 0; i < n; i++) {
            let z = (t + Math.sin(2 * t)) / (t ** 2 - 3);
            results += `t = ${t.toFixed(2)}, z = ${z.toFixed(4)}\n`;
            t += deltaT;
        }
    } else {
        results = "Невірний вибір!";
    }
    document.getElementById("result").innerText = results;
    console.log("Задача 4:\n", results);
}
function task5() {
    let S = 0;
    for (let i = 10; i <= 30; i++) {
        S += (i ** 3 + 3 * i ** 2 + 7) / (3 * i + 8);
    }
    let i = 5;
    let j = 11;
    let Z = 1;
    for (let k = i; k <= j; k++) {
        Z *= ((k + 3) ** 2) / ((k + 7) * (k + 9));
    }
    let result = `S = ${S.toFixed(4)}\n`;
    result += `Z = ${Z.toFixed(4)}`;
    document.getElementById("result").innerText = result;
    console.log("Задача 5:\n", result);
}
