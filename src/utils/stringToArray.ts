const stringToArray = (inputString: string): number[] => {
  if (inputString === ' ' || inputString === '') {
    throw Error('Input must contain at least one number');
  }

  const onlyDigitsAndSpace = inputString.match(/^[0-9 ]+$/);

  if (onlyDigitsAndSpace) {
    const inputArray = inputString.split(' ').map(((numberString) => parseInt(numberString, 10)));
    return inputArray;
  }

  throw Error('Input must only contain numbers');
};

export default stringToArray;
