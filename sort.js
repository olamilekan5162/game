// Merge sort

const array = [38, 27, 43, 3, 9, 82, 10];

const maxValue = (array) => {
  let maxIndex = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[maxIndex]) {
      maxIndex = i;
    }
  }
  return maxIndex;
};

const sortArray = (array) => {
  let sortedArray = [];
  const length = array.length;
  for (let i = 0; i < length; i++) {
    let index = maxValue(array);
    sortedArray.push(array[index]);
    array.splice(index, 1);
  }

  return sortedArray;
};

console.log(sortArray(array));

const selectionSort = (array) => {
  let result = [];
  let tempArray = [...array];

  while (tempArray.length > 0) {
    let maxIndex = 0;
    for (let i = 0; i < tempArray.length; i++) {
      if (tempArray[i] > tempArray[maxIndex]) {
        maxIndex = i;
      }
    }
    result.push(tempArray[maxIndex]);
    tempArray.splice(maxIndex, 1);
  }

  return result;
};

console.log(selectionSort(array));
