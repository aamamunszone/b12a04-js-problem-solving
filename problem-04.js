function isSame(arr1, arr2) {
  if (Array.isArray(arr1) && Array.isArray(arr2)) {
    if (arr1.length === arr2.length) {
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  } else {
    return 'Invalid';
  }
}

console.log(isSame([1, 2, 3], [1, 2, 3]));
