import getLength from './getLength';
//TODO : Add 3digits and more numbers.
/**
 *  Convert given number into Words
 *  NOTE : it only handles 2 digit numbers only. @see TODO
 * @param num
 * @returns {*}
 */
export default function convertNumToWords(num) {
    let words = {};
    //var words = new Array();
    words[0] = "";
    words[1] = "One";
    words[2] = "Two";
    words[3] = "Three";
    words[4] = "Four";
    words[5] = "Five";
    words[6] = "Six";
    words[7] = "Seven";
    words[8] = "Eight";
    words[9] = "Nine";
    words[10] = "Ten";
    words[11] = "Eleven";
    words[12] = "Twelve";
    words[13] = "Thirteen";
    words[14] = "Fourteen";
    words[15] = "Fifteen";
    words[16] = "Sixteen";
    words[17] = "Seventeen";
    words[18] = "Eighteen";
    words[19] = "Nineteen";
    words[20] = "Twenty";
    words[30] = "Thirty";
    words[40] = "Forty";
    words[50] = "Fifty";
    words[60] = "Sixty";
    words[70] = "Seventy";
    words[80] = "Eighty";
    words[90] = "Ninety";
    words[100] = "Hundred";

    if (words[num]) {
        return words[num];
    }

    switch (getLength(num)) {
        case 2:
            let rem = num % 10;
            return words[num - rem] + " " + words[rem];
        default:
    }
}

