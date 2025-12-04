
console.log(`5 + 7 = ${5 + 7}`);
console.log(`Line 1
Line 2
Line 3`);
const firstName = "John", lastName = "Doe";
console.log(`${firstName} ${lastName}`);


const square = n => n * n;
const obj = { value: 50, test: () => console.log(this.value) };
obj.test();
const obj2 = { value: 50, test() { console.log(this.value) } };
obj2.test();

const product = { name: "Pen", price: 10 };
const productCopy = { ...product };
const aObj = { x: 1 }, bObj = { y: 2 };
const mergedObj = { ...aObj, ...bObj };
const maxValue = (...nums) => Math.max(...nums);

const arr = [10, 20, 30];
const [a, b] = arr;
const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;
const info = {};
console.log(info?.user?.name);

for (var i = 0; i < 3; i++) {}
console.log(i);
for (let j = 0; j < 3; j++) {}
const pi = 3.14;

let speed = kmph > 60 ? "Fast" : "Normal";
console.log(age >= 18 ? "Adult" : "Minor");
console.log(num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative");

const nums = [1, 2, 3];
const newNums = [...nums, 4, 5];
const arr1 = ["x","y"], arr2 = ["z"];
const combined = [...arr1, ...arr2];
const printNames = (...names) => names;

const user = { id: 101, status: "active" };
const id = 101, role = "admin";
const userShorthand = { id, role };
const objShorthand = { id, role, greet() { console.log("Hello") } };

console.log(`Today is ${new Date().toDateString()}`);
const name = "Alex", score = 85;
console.log(`Hello ${name}, your score is ${score}/100`);


const add = (x, y) => x + y;
const isAdult = age => age >= 18;
const double = n => n * 2;

const arrClone = [...nums];
const arrWith100 = [100, ...nums];
const obj1 = { a: 1, b: 2 }, obj2b = { b: 3, c: 4 };
const mergedOverride = { ...obj1, ...obj2b };


const userObj = { name: "Alex", address: { city: "Bangalore" } };
console.log(userObj.address?.city);
console.log(userObj.job?.title);
const data = {};
console.log(data.a?.b?.c);
