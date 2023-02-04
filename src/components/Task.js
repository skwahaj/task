const a = [1, 3, 5, 2, 4];
const result1 = a.filter(x => x % 2 !== 0);
console.log(result1)



const b = [1, 3, 5, 2, 4];
const result2 = a.map(x => x * x);
console.log(result2)


const c = [1, 3, 5, 2, 4];
const result3 = a.filter(x => x % 2 !== 0).map(x => x * x);
console.log(result3)