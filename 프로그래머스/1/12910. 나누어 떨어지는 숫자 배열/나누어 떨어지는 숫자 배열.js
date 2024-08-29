function solution(arr, divisor) {
    const filtered = arr.filter(num => num % divisor === 0);

    if (filtered.length === 0) {
        return [-1];
    } else {
        return filtered.sort((a, b) => a - b);
    }
}
