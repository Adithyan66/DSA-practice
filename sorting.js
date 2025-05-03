


//bubble sort
//poor sorting method 


// let arr = [25, 85, 634, 83, 2, 83, 647, 94, 6487, 6383, 92]

// let sorted = false
// do {
//     sorted = false
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] > arr[i + 1]) {
//             sorted = true;
//             [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
//         };
//     };
// }
// while (sorted)

// console.log(arr)



//insertion sort

// let arr = [758, 85, 634, 83, 2, 83, 647, 94, 6487, 6383, 92]
// let nti
// let j
// for (let i = 1; i < arr.length; i++) {
//     nti = arr[i]
//     j = i - 1
//     while (arr[j] > nti && j >= 0) {
//         arr[j + 1] = arr[j]
//         j--
//     }
//     arr[j + 1] = nti
// }

// console.log(arr)


//quick sort

let arr = [758, 85, 634, 83, 2, 83, 647, 94, 6487, 6383, 92]


function quickSort(arr) {
    if (arr.length < 2) {
        return arr
    }

    let pivot = arr[arr.length - 1]
    let small = []
    let big = []

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            small.push(arr[i])
        } else {
            big.push(arr[i])
        }
    }
    return [...quickSort(big), pivot, ...quickSort(small)]
}


console.log(quickSort(arr));















