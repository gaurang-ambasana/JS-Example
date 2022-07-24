/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
    let col = matrix[0].length - 1;
    let row = 0;
    
    while (row < matrix.length && col > -1)
        if (matrix[row][col] === target)
            return true;
        else if (matrix[row][col] > target)
            --col;
        else ++row;

    return false;
}