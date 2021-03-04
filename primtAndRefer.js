let name1 = "Nicholas";
// 使用new关键字，对创建一个Object类型的实例
let name2 = new String("Matt");
name1.age = 27;
name2.age = 26;
console.log(name1.age); //  undefined
console.log(name2.age); //  26
console.log(typeof name1);  //  string
console.log(typeof name2);  //  object



// 参数是按值传递
// num是一个局部变量
function addTen(num) {
    num+=10;
    return num;
}

let count = 20;
let result = addTen(count);
// num、count的值互不干扰
console.log(count);
console.log(result);

function setName(obj){
    obj.name = "Nicholas";
}
let person = new Object();
setName(person);
console.log(person.name);