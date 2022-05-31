/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
const hasAllCodes = function(s, k) {
    if (k === 0) return true;
    
    if (s.length < k) return false;
    
    const max = 1 << k;
    const set = new Set();

    for (let i = 0, n = s.length - k; i <= n; i++) {
        set.add(s.substr(i, k));
        if (set.size === max) return true;
    }

    return false;
};