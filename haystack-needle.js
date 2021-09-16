// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    if (!needle.length) return 0;
    for (let i in haystack) if (haystack[i] === needle[0] && haystack.substring(i, Number(i) + needle.length) === needle) return i;
    return -1;
};

console.log(strStr("mississippi",
"issip"))