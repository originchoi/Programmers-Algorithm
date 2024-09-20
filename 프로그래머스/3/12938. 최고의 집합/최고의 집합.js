function solution(n, s) {
    if (n > s) return [-1];
    
    const quotient = Math.floor(s / n);
    const remainder = s % n;
    const answer = Array(n).fill(quotient);
    
    for (let i = 0; i < remainder; i++) {
        answer[n - 1 - i]++;
    }
    
    return answer;
}
