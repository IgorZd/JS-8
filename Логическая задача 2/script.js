let arr = [15, 1, 2, 3, 0, 12, 4],
    countArr = [],
    boxArr = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i++]) {
        boxArr.push(arr[i]);
    }
    console.log(boxArr);
}
console.log(boxArr);
console.log(arr[0]);