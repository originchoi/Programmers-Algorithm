function solution(a, b) {
    let result = 0;
    
    for (const i in a) {
        result += a[i] * b[i]
    }
    
    return result;
}
