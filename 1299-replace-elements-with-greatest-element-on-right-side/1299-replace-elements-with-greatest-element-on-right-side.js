const replaceElements = arr => arr.slice(0, arr.length - 1).map((_, i) => arr.slice(i + 1).reduce((max, n) => max < n ? n : max, 0)).concat([-1]);