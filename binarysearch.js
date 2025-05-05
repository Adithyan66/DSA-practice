


let arr = [1, 3, 5, 7, 9, 34]


function binarySearch(arr, f) {

    let start = 0
    let end = arr.length - 1


    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (arr[mid] === f) {
            return mid
        }
        else if (arr[mid] < f) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }
    return -1
}



console.log(binarySearch(arr, 34));
