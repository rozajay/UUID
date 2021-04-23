

const arrayToString = (inputArray: number[] | undefined): string => {

    if (inputArray) {
        let outputString = inputArray.toString()

        return outputString.replace(/,/g, ' ')
    }

    throw Error('No values found')

}

export default arrayToString