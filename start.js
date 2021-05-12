const array = [1, 2, 3, 4, 5, 6]

function squareNumber(no) {
    return no ** 2;

}

const squareArray = (array, callback) => array.map(element => callback(element))


console.log(squareArray(array, squareNumber));