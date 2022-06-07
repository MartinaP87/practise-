let items = ["A","B","C"];
let obj = {
[items]: "Hello"
}
console.log(obj); // A,B,C: "Hello"
console.log(obj["A,B,C"]); // Hello
console.log(items[0]); // A
