marks = 85;
if(marks >= 80 && marks <= 100){
    console.log('A grade');
}
else if(marks >= 60 && marks <= 79){
    console.log('B grade');
}
else if(marks >= 50 && marks <= 59){
    console.log('C grade');
}
else if(marks >= 40 && marks <= 49){
    console.log('D grade');
}
else if(marks >= 33 && marks <= 39){
    console.log('F grade');
}
else if(marks > 100){
    console.log('invalid number');
}
else{
    console.log('Try Next Year. Good Luck.')
}