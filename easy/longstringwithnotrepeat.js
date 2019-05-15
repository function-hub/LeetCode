var lengthOfLongestSubstring = function (s) {
    const maxlength = 0;
    const start = 0;
    const end = 0;
    for (let i = 0; i < s.length; i++) {
        console.log(s[i]);

    }

};

var lengthOfLongestSubstring = function (s) {
    let resultStr = "";
    let currentStr = "";
    for (let i = 0; i < s.length; i++) {
        let current = s[i];
        let index = currentStr.indexOf(current);
        if (index == -1) {
            currentStr += current;
            resultStr = resultStr.length < currentStr.length ? currentStr : resultStr;
        } else {
            currentStr = currentStr.slice(index + 1) + current;
        }
    }
    return resultStr.length;
};

var lengthOfLongestSubstring = function (e) {
    let resultStr = '';
    let currentStr = '';
    for (let i = 0; i < s.length; i++) {
        let current = s[i];
        let index = currentStr.indexOf(current);
        if (index == -1) {
            currentStr += current;
            resultStr = resultStr.length < currentStr.length ? currentStr : resultStr;
        } else {
            currentStr = currentStr.slice(index + 1) + current;
        }
    }
    return resultStr.length;
}

var lengthOfLongestSubstring = function (e) {
    let resultStr = '';
    let currentStr = '';
    for (let i = 0; i < s.length; i++) {
        let current = s[i];
        let index = currentStr.indexOf(current);
        if (index === -1) {
            currentStr += current;
            resultStr = resultStr.length < currentStr.length ? currentStr : resultStr;
        } else {
            currentStr = currentStr.slice(index + 1) + current;
        }

    }
    return resultStr.length;
}

const a = lengthOfLongestSubstring('wadase');