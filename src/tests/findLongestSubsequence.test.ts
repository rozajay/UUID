import findLongestSubsequence from '../utils/findLongestSubsequence'
import { testCase01, testCase02, testCase03, testCase04, testCase05, testCase06, testCase07, testCase08, testCase09, testCase10, testCase11 } from './testData'

describe('Find the longest increasing subsequence.', () => {

    it.each([
        ['1', '1'],
        ['1 2', '1 2'],
        ['2 1', '2'],
        ['1 2 1', '1 2'],
        ['1 2 3 1', '1 2 3'],
        ['7 2 4 6', '2 4 6']
    ])('calculates with valid number strings: ', (inputString, expected) => {

        expect(findLongestSubsequence(inputString)).toBe(expected);

    });

    it('Test Case 01', () => {

        expect(findLongestSubsequence(testCase01)).toEqual('1 5 9')
        expect(findLongestSubsequence('7 2 4 6 8')).toEqual('2 4 6 8')
        expect(findLongestSubsequence('7 2 4 6 8 2')).toEqual('2 4 6 8')
        expect(findLongestSubsequence('7 2 4 6 8 2 4 6 8 10')).toEqual('2 4 6 8 10')

    })

    it('Test Case 02', () => {

        expect(findLongestSubsequence(testCase02)).toEqual('1710 2461 9288 10195 10431 12485')

    })

    it('Test Case 03', () => {

        expect(findLongestSubsequence(testCase03)).toEqual('10298 10897 12291 15037 18446 23435 25333 27266')

    })

    it('Test Case 04', () => {

        expect(findLongestSubsequence(testCase04)).toEqual('3862 16353 22813 28735')

    })

    it('Test Case 05', () => {

        expect(findLongestSubsequence(testCase05)).toEqual('11084 11970 24975 30922')

    })

    it('Test Case 06', () => {

        expect(findLongestSubsequence(testCase06)).toEqual('3808 3908 10386 19306')

    })

    it('Test Case 07', () => {

        expect(findLongestSubsequence(testCase07)).toEqual('125 1841 5882 18464 28317 31497')

    })

    it('Test Case 08', () => {

        expect(findLongestSubsequence(testCase08)).toEqual('9139 17687 25106 26202 27592 30937')

    })

    it('Test Case 09', () => {

        expect(findLongestSubsequence(testCase09)).toEqual('918 1089 5133 7725 18035 24605 26716 27095')

    })

    it('Test Case 10', () => {

        expect(findLongestSubsequence(testCase10)).toEqual('2 4 6')

    })

    it('Test Case 11', () => {

        expect(findLongestSubsequence(testCase11)).toEqual('1 5 9')

    })

    it.each(['', ' '])('Throws error attempting to convert array of numbers with invalid input', (inputString) => {

        expect(() => findLongestSubsequence(inputString)).toThrow('Input must contain at least one number')

    })

})
