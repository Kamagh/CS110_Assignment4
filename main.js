const { beautyLog, sumOfMatrices, matrixProduct, sumOfEachRow } = require('./utils');
const matUtil = require('./utils');

let mat1 = [
    [1, 1],
    [1, 2]
];
let mat2 = [
    [0, 1],
    [2, 2]
];

let mat3 = [
    [1, 1],
    [1, 2],
    [1, 2]

];
let mat4 = [
    [0, 1, 1],
    [2, 2, 1]
];
beautyLog(matrixProduct(mat3, mat4))
beautyLog(sumOfMatrices(mat1, mat2));
console.log(sumOfEachRow(mat3));