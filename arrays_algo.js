// CHALLENGE 1: PRINT VALUES AND SUM

var testArr = [6,3,5,1,2,4];
sum =0
for(var i = 0; i<testArr.length; i++){
    sum=sum+testArr[i];
    console.log("Num "+testArr[i]+", Sum "+sum);
}

// OUTPUT:
// Num 6, Sum 6
// Num 3, Sum 9
// Num 5, Sum 14
// Num 1, Sum 15
// Num 2, Sum 17
// Num 4, Sum 21



// CHALLENGE 2: VALUE * POSITION

var testArr = [6,3,5,1,2,4];
for(var j = 0; j<testArr.length; j++){
    testArr[j]=j*testArr[j];
}
console.log(testArr);

// OUTPUT:
// [ 0, 3, 10, 3, 8, 20 ]


