const arrayToString = (inputArray: number[] | undefined): string => {
  if (inputArray) {
    const outputString = inputArray.toString();

    return outputString.replace(/,/g, ' ');
  }

  throw Error('No values found');
};

export default arrayToString;
