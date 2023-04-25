let a = +prompt(`Enter 1st number`);
let b = +prompt(`Enter 2nd number`);
let result = 1;
(b < 0) ? (a = 1 / a) && (b = -b) : a, b;

for (let i = 1; i <= b; i++) {
    result *= a;
}
document.write(`<h5>${result}</h5>`);

