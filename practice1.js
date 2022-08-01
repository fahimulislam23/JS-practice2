var fruits =['Apple', 'Banana', 'Orange']
var index = fruits.indexOf('Banana');
console.log(index);

fruits.splice(index, 1, 'Mango'); //replace banana to mango
console.log(fruits);

var fruit =['Apple', 'Banana', 'Orange']
fruit.pop();
console.log(fruit);
fruit.push('Watermelon');
console.log(fruit);

