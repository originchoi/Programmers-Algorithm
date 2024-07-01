function solution(k, tangerine) {
    const frequency = {};
    
    tangerine.forEach(size => {
        if (frequency[size]) {
            frequency[size]++;
        } else {
            frequency[size] = 1;
        }
    });
    
    const counts = Object.values(frequency).sort((a, b) => b - a);
    
    let sum = 0;
    let varietyCount = 0;
    
    for (const count of counts) {
        sum += count;
        varietyCount++;
        
        if (sum >= k) {
            break;
        }
    }
    
    return varietyCount;
}
