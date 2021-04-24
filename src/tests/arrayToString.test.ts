import arrayToString from '../utils/arrayToString';

describe('Convert array of number to string', () => {
  it('Successful conversion', () => {
    expect(arrayToString([6, 1, 5, 9, 2])).toEqual('6 1 5 9 2');
  });

  it('Input undefined', () => {
    expect(() => arrayToString(undefined)).toThrow('No values found');
  });
});
