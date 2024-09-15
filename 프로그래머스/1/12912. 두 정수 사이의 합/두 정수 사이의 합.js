function solution(a, b) {
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    
    // 등차수열의 합 공식 사용하기!
    const answer = (max - min + 1) * (min + max) / 2;
    
    return answer;
}
