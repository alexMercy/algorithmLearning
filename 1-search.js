const arr =
   //0,1,2,3,4,5, 6, 7
    [1,2,4,6,8,10,15,18];
let count = 0;

console.log(binaryRecursionSearch(8, arr));
count = 0;
console.log(binarySearch(8));
count = 0;
console.log(linearSearch(8));
count = 0;

function binaryRecursionSearch(item, arr, startI=0, endI=arr.length) {
    if (startI >= endI) return `Not found \ncount    = ${count}`;
    count++;
    const middleI = Math.floor((endI + startI) /2);
    switch (true) {
        case (arr[middleI] === item):
            return `position = ${middleI}\ncount    = ${count}`;
        case (arr[middleI] < item):
            return binaryRecursionSearch(item,arr, middleI + 1, endI)
        default:
            return binaryRecursionSearch(item, arr, startI, middleI -1)
    }
}

function binarySearch(item) { //O(log2n) по времени, O(1) по памяти. Работает только в отсотированном массиве

    let startI = 0;
    let endI = arr.length;

    while(startI < endI) {
        count++;
        const middleI = Math.floor((endI + startI) /2);

        switch (true) {
            case (arr[middleI] === item):
                return `position = ${middleI}\ncount    = ${count}`;
            case (arr[middleI] < item):
                startI = middleI + 1
                break;
            default:
                endI = middleI -1
        }
    }

    return `Not found \ncount    = ${count}`
}

function linearSearch(item) { //O(n) по времени, O(1) по памяти
    for (let i = 0; i < arr.length; i++) {
        count++;
        if (arr[i] === item) {
            return `position = ${i}\ncount    = ${count}`
        }
    }
    return `Not found \ncount    = ${count}`;
}

