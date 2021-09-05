// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// don't use standard methods like reverse

function revString(arr) {
    let l = 0;
    let r = arr.length - 1;
    const swap = function (l, r) {
        const s = arr[l]
        arr[l] = arr[r];
        arr[r] = s;
    }
    while (l <= r) {
        swap(l, r);
        l++;
        r--;
    }
  
    return arr;
}

console.log(revString(["h", "e", "l", "l", "o"]));