function solution(storey) {
    let answer = 0;
    
    while (storey > 0) {
        const digit = storey % 10;
        
        storey = Math.floor(storey / 10);
        
        if (digit > 5) {
            answer += (10 - digit);
            storey += 1;
        } else if (digit == 5 && (storey % 10) >= 5) {
            answer += 5;
            storey += 1;
        } else {
            answer += digit;
        }
    }
    
    return answer;
}
