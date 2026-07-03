const array = [38, 27, 43, 3, 9, 82, 10, 62];

// selection sort
const selectionSort = (array) => {
  let result = [];
  let tempArray = [...array];

  while (tempArray.length > 0) {
    let maxIndex = 0;
    for (let i = 0; i < tempArray.length; i++) {
      if (tempArray[i] < tempArray[maxIndex]) {
        maxIndex = i;
      }
    }
    result.push(tempArray[maxIndex]);
    tempArray.splice(maxIndex, 1);
  }

  return result;
};

console.log(selectionSort(array));

//bubble sort
const bubbleSort = (array) => {
  let tempArray = [...array];

  for (let i = 0; i < tempArray.length; i++) {
    for (let j = 0; j < tempArray.length - 1 - i; j++) {
      if (tempArray[j] > tempArray[j + 1]) {
        [tempArray[j], tempArray[j + 1]] = [tempArray[j + 1], tempArray[j]];
      }
    }
  }

  return tempArray;
};

console.log(bubbleSort(array));

// merge sort

const merge = (leftArray, rightArray) => {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < leftArray.length && j < rightArray.length) {
    if (leftArray[i] < rightArray[j]) {
      result.push(leftArray[i]);
      i++;
    } else {
      result.push(rightArray[j]);
      j++;
    }
  }

  while (i < leftArray.length) {
    result.push(leftArray[i]);
    i++;
  }

  while (j < rightArray.length) {
    result.push(rightArray[j]);
    j++;
  }

  return result;
};

const mergeSort = (array) => {
  if (array.length <= 1) return array;
  const mid = Math.floor(array.length / 2);
  let [left, right] = [array.slice(0, mid), array.slice(mid)];
  let sortedLeft = mergeSort(left);
  let sortedRight = mergeSort(right);
  return merge(sortedLeft, sortedRight);
};

console.log(mergeSort(array));
