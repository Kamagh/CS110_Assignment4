function beautyLog(matrix) {
    for (let row = 0; row < matrix.length; ++row) {
        console.log(matrix[row])
    }
}
function getBlankMatrix(matrix) {
    let newMat = [];
    for (let row = 0; row < matrix.length; ++row) {
        newMat[row] = [];
    }
    return newMat;
}

function sumOfMatrices(mat1, mat2) {
    if (mat1.length !== mat2.length || mat1[0].length !== mat2[0].length) {
        console.log("The dimension of the matrices are not equal");
    }
    let sum = getBlankMatrix(mat1);

    for (let row = 0; row < mat1.length; ++row) {
        for (let col = 0; col < mat1[0].length; ++col) {
            sum[row][col] = mat1[row][col] + mat2[row][col]
        }
    }
    return sum;
}

function matrixProduct(mat1, mat2) {
    let mul = getBlankMatrix(mat1);
    if (mat1.length !== mat2[0].length || mat1[0].length !== mat2.length) {
        console.log("the column of the first matix is not equal to the row of the second matrix");

    } else {
        for (let r = 0; r < mat1.length; ++r) { //the row of the mat1
            for (let c = 0; c < mat2[0].length; ++c) { //col of mat2
                mul[r][c] = 0;
                for (let i = 0; i < mat1[0].length; ++i) {
                    mul[r][c] += mat1[r][i] * mat2[i][c]; //how many(depends on rows) times shoul we add it
                }
            }
        }

    }
    return mul;
}
function sumOfArray(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum +=arr[i];
    }
    return sum;
}

function sumOfEachRow(mat){
    let array = [];
    let sumrow = 0;
    for (let row = 0; row < mat.length; ++row) {
        sumrow = sumOfArray(mat[row]);
        array.push(sumrow);

    }
    return array;
}    
module.exports = {
    beautyLog,
    sumOfMatrices,
    matrixProduct,
    sumOfEachRow
}