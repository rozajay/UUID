import stringToArray from '../utils/stringToArray';
import { testCase01 } from './testData';

describe('Convert string to array of numbers', () => {
  it('Test Case 01', () => {
    expect(stringToArray(testCase01)).toEqual([6, 1, 5, 9, 2]);
  });

  it('Single number', () => {
    expect(stringToArray('2')).toEqual([2]);
  });

  it.each(['', ' '])('Throws error attempting to convert array of numbers with empty', (inputString) => {
    expect(() => stringToArray(inputString)).toThrow('Input must contain at least one number');
  });

  it.each(['a b c d e', 'a b 1 2 3.'])('Throws error attempting to convert array of numbers with invalid input', (inputString) => {
    expect(() => stringToArray(inputString)).toThrow('Input must only contain numbers');
  });
});
