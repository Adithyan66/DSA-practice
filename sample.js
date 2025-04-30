


// // ✅ BRUTE FORCE METHOD - Time: O(n²), Space: O(1)
// function findOut(arr, target) {
//     // Loop through each element
//     for (let i = 0; i < arr.length - 1; i++) {
//         // Compare with every element after it
//         for (let j = i + 1; j < arr.length; j++) {
//             // If sum of pair equals target, return it
//             if (arr[i] + arr[j] == target) {
//                 return [arr[i], arr[j]];
//             }
//         }
//     }
//     return []; // If no pair found
// }


// // ✅ OPTIMIZED METHOD USING SET - Time: O(n), Space: O(n)

// function findOut(arr, target) {

//     let setArr = new Set();

//     // Loop through each number in array
//     for (let i = 0; i < arr.length; i++) {
//         let match = target - arr[i]; // Value needed to make the sum
//         if (setArr.has(match)) {
//             // If match is already in Set, return the pair
//             return [match, arr[i]];
//         } else {
//             // Otherwise, add the current number to the Set
//             setArr.add(arr[i]);
//         }
//     }
// }


// // 🔢 Sample input
// let arr = [3, 4, 5, 6, 7, 8];
// let target = 10;

// // 📢 Output
// let ans = findOut(arr, target);
// console.log(ans);  // Output could be [4, 6] or [3, 7], etc.



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// let arr = [6, 3, 5, 8, 0, 1, 6, 3, 5, 6, 8, 3, 6, 5, 7, 9]
// let target = 6

// for (let i = 0, j = arr.length - 1; i <= j; i++) {

//     if (arr[j] == target) {
//         j--
//     }
//     if (arr[i] == target) {
//         [arr[j], arr[i]] = [arr[i], arr[j]]
//         j--
//     }
// }

// console.log(arr)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////