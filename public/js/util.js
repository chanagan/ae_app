// make sure hours, minutes and seconds show up with leading zeroes

/**
 * 
 * 
 * @param {any} inputNum
 * @param {any} charCnt
 * @returns
 */
function leftPad(inputNum, charCnt) {
    var retLen = (arguments.length > 1) ? charCnt : 2;
    var padNum = '000' + inputNum;
    var retNum = padNum.substr(padNum.length - retLen);
    return retNum;
}