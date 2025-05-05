
// console.log(reverseSentence("hello world"));
// console.log(reverseSentence("adithyan binu mern stack"));


// function reverseEachWord(str) {

//     let word = ""
//     let result = ""

//     for (let i = 0; i <= str.length; i++) {
//         if (str[i] === " " || i === str.length) {

//             for (let j = word.length - 1; j >= 0; j--) {
//                 result += word[j]
//             }

//             if (1 !== str.length) result += " "
//             word = " "

//         } else {
//             word += str[i]
//         }
//     }

//     return result
// }


// function reverseSentence(str) {
//     let result = ""

//     for (let i = str.length - 1; i >= 0; i--) {
//         result += str[i]
//     }
//     return result
// }



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function secondLargest(arr) {

    if (arr.length < 2) {
        return null
    }
    let lar = -Infinity
    let seclar = - Infinity

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > lar) {
            seclar = lar
            lar = arr[i]
        }

        if (arr[i] > seclar && arr[i] < lar) {
            seclar = arr[i]
        }
    }
    return seclar
}

console.log(secondLargest([2, 5, 8, 4, 71, 72]));