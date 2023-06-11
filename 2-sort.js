const arr =
   //0,1,2,3,4,5, 6, 7
    [7,3,2,6,5,40,69,11];
   //  [1,2,4,6,8,10,15,18];
let count = 0;

console.log(qSort(arr));

/**
 * O(n^2) по времени, О(1) по памяти
 * @param arr
 * @returns {string}
 */
function bubbleSort(arr) {
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = i+1; j < arr.length; j++) {
            count++
            if (arr[i] > arr[j]) {
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp
            }
        }
    }
    return `count = ${count}\narray - [${arr}]`
}

/**
 * O(nlog2n) по времени, О(n) по памяти
 * @param arr
 * @returns {*[]|*|*[]}
 */
function qSort(arr) {
    const middle = Math.floor(arr.length/2);
    const less = [];
    const greater = [];
    arr.forEach((item, index) => {index!== middle && (item <= arr[middle] ? less.push(item) : greater.push(item))})
    if (arr.length <= 1) return arr;
    return [...qSort(less), arr[middle], ...qSort(greater)];
}