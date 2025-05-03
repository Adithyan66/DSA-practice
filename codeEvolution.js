

// const fibnochi = (n) => {
//     let arr = [0, 1]
//     for (let i = 2; i < n; i++) {
//         arr[i] = arr[i - 2] + arr[i - 1]
//     }
//     return arr
// }

// console.log(fibnochi(7));




// function factorial(n) {
//     if (n == 0) {
//         return 1
//     }
//     return n * factorial(n - 1)
// }

// console.log(factorial(5));


// let arr = [2, 4, 6, 7, 22, 34, 67, 335, 897, 78]
// let t = 78
// let i = 0
// let k = arr.length - 1
// for (i, k; i < k; i++, k--) {
//     if (arr[i] == t || arr[k] == t) {
//         console.log(arr[i] == t ? i : k)
//     }
// }






// binary search 
// it will only works on sorted arrays



// let arr = [132, 235, 287, 345, 569, 674, 876, 908, 953]

// let leftind = 0

// let rightind = arr.length - 1

// let mid

// function hii(t) {

//     while (leftind <= rightind) {
//         mid = Math.floor((leftind + rightind) / 2)
//         if (arr[mid] === t) {
//             return mid
//         }
//         if (arr[mid] < t) {
//             leftind = mid + 1
//         } else {
//             rightind = mid - 1
//         }
//     }
//     return -1
// }
// console.log(hii(5629));


// Recrusive approch for binary search


// function recrusiveApproch(arr, t) {
//     return search(arr, t, 0, arr.length - 1)
// }

// function search(arr, t, left, right) {
//     if (left > right) {
//         return -1
//     }
//     let mid = Math.floor((left + right) / 2)
//     if (arr[mid] === t) {
//         return mid
//     }

//     if (t > arr[mid]) {
//         return search(arr, t, mid + 1, right)
//     } else {
//         return search(arr, t, left, mid - 1)
//     }
// }

// console.log(recrusiveApproch([132, 235, 287, 345, 569, 674, 876, 908, 953], 56329));
