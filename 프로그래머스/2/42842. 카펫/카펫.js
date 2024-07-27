function solution(brown, yellow) {
    const CARPET_SIZE = brown + yellow;
    const result = [];
    
    for (let i = 3; i < CARPET_SIZE; i++) {
        const width = CARPET_SIZE / i;
        const height = i;
        
        if (width < height) continue;
        
        if ((width - 2) * (height - 2) === yellow) {
            result[0] = width;
            result[1] = height;
        }
    }
    
    return result;
}
