function findMinAndRemoveSorted(arr){
    return arr.shift();
}

function merge(arr1, arr2){
    let sorted = [];
    while(arr1.length > 0 && arr2.length > 0){
        if(arr1[0] < arr2[0]){
            sorted.push(findMinAndRemoveSorted(arr1));
        } else {
            sorted.push(findMinAndRemoveSorted(arr2));
        }
    }
    return sorted.concat(arr1).concat(arr2)
}

function mergeSort(array){
    let midpoint = array.length/2
    let firstHalf = array.slice(0, midpoint)
    let secondHalf = array.slice(midpoint, array.length)
 
    if(array.length < 2){
      return array
    } else {
      return merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
}