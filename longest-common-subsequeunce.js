/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
 var longestCommonSubsequence = function(text1, text2) {
    const n = text1.length;
    const m = text2.length;
    const mat = [];

    let max = 0;
    
    for (let i = 0; i < n; i++) {
        mat.push(new Array(m).fill(0));
    }
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (text1[i] === text2[j]) {
                mat[i][j] = (mat[i - 1] && mat[i - 1][j - 1] ? mat[i - 1][j - 1] : 0) + 1;
            } else {
                mat[i][j] = Math.max(mat[i - 1] ? mat[i - 1][j] : 0, mat[i][j - 1] || 0);
            }
            
            max = Math.max(max, mat[i][j]);
        }
    }
    
    return max;
};

longestCommonSubsequence("abcde","ace")