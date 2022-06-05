/**
 * @param {string} s
 * @return {number}
 */
const maxLengthBetweenEqualCharacters = s => {
    const map = s.split('').reduce((o, c, i) => {
        if (c in o) o[c].push(i);
        else o[c] = [i];
        return o;
    }, {});
    
    return Object.keys(map).reduce((max, key) => {
        const val = map[key];
        
        if (val.length > 1) {
            const start = Math.min(...val) + 1;
            const end = Math.max(...val);
            const len = s.substring(start, end).length;
            return Math.max(max, len);
        }
        
        return max;
    }, -1);
};