const singleNonDuplicate = (nums: number[]): number => nums.reduce((ans, n) => ans ^ n, 0);