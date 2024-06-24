function solution(array, n) {
    let answer = 0;
    
    for (const digit of array) {
        if (digit === n) {
            answer++;
        }
    }
    
    return answer;
}
