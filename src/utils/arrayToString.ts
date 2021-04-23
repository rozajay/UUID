

const arrayToString = (inputArray: number[]): string => {

    let outputString = inputArray.toString()

    return outputString.replace(/,/g, ' ')

}

export default arrayToString