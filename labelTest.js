let num1 = 0;
let num2 = 0;

// outermost标签标识的第一个for语句
outermost:
for(let i=0; i<10; i++){
    for(let j=0; j<10;j++){
        if(i==5 && j==5){
            // 添加标签使break语句不仅退出内部j循环，同时退出外部i循环
            break outermost;
        }
        num1 ++;
    }
}
console.log(num1);  //  55


outermost1:
for(let i=0; i<10; i++){
    for(let j=0; j<10;j++){
        if(i==5 && j==5){
            // 添加标签使continue语句跳出至外部循环，
            // 强制继续执行外部循环，使得内部循环少执行5次
            continue outermost1;
        }
        num2 ++;
    }
}
console.log(num2);  //  95