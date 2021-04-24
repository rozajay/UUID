import arrayToString from './arrayToString';
import stringToArray from './stringToArray';

const findLongestSubsequence = (inputString: string): string => {
  // Step 1: Convert input into array of numbers
  const inputArray = stringToArray(inputString);

  // Step 2: If input just contains one number, return that one number
  if (inputArray.length === 1) {
    return arrayToString(inputArray);
  }

  // Step 3: Save a list of all of the arrays
  let currentArray: number[] = [];
  let prevValue = inputArray[0];
  const savedData: any = [];

  inputArray.forEach((value: number, i: number) => {
    if (i === 0) {
      currentArray.push(value);
      savedData.push(currentArray);
    }

    if (i >= 1) {
      if (value < prevValue) {
        if (currentArray.length > 1) {
          savedData.push(currentArray);
        }
        currentArray = [];
        currentArray.push(value);
        prevValue = value;
      }
      if (value > prevValue) {
        currentArray.push(value);
        prevValue = value;
        if (i === inputArray.length - 1) {
          savedData.push(currentArray);
        }
      }
    }
  });

  // Step 4: Find the length of the longest array
  const maxLength = Math.max(...(savedData.map((el: number[]) => el.length)));
  const longestArrays = savedData.filter((elem: number[]) => elem.length === maxLength);

  // Step 5: Return the first entry from the list of longest arrays
  const outputString = arrayToString(longestArrays[0]);

  return outputString;
};

export default findLongestSubsequence;
