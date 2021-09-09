// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".
// Input: strs = ["flower","flow","flight"]
// Output: "fl"


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    const iterationLength = (strs.reduce((a, b) => a.length <= b.length ? a : b)).length;
    let visited = {}
    let lcp = ''


    // a dictionary which could store each character and count is better
    // if count matches the length of array then proceed else return false
    for (let i = 0; i < iterationLength; i++) {
      visited={}
        for (let value of strs) {

            if (!visited[value[i]]) {
                visited[value[i]] = 1;
            } else {
                visited[value[i]]++
            }
        }
        for (const [key, value] of Object.entries(visited)) {
            if (value !== strs.length) {
                i = iterationLength;
                break;
            }else{
                lcp+=key;
            }
        }

    }

    if (!lcp) { return '' }
    return lcp;
};

console.log(longestCommonPrefix(["aa","aa"]))