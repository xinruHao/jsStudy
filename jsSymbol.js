// 符号是初试值，且符号实例是唯一、不可变的。
// 符号的用途是确保对象属性使用唯一标识符，不会发生属性冲突的危险
let sym = Symbol();
console.log(typeof sym);

// Symbol()函数不能与ne关键字一起作为构造函数使用。这样做是为了避免创建符号包装对象，
// 像使用Boolean、String或Number那样，它们都支持构造函且可用于初始化包含原始值的包装对象
// let mySymbol = new Symbol();    
// Console: TypeError: Symbol is not a constructor at new Symbol (<anonymous>)

// 可借用Object()函数包装对象
let mySymbol = Symbol();
let myWrappedSymbol = Object(mySymbol);
console.log(typeof myWrappedSymbol);