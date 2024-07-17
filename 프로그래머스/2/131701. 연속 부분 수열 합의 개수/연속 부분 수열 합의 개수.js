function solution(elements) {
    const n = elements.length; 
    const sumSet = new Set();
    
    for (let i = 0; i < n; i++) {
        let sum = 0;
        
        for (let j = i; j < i + n; j++) {
            sum += elements[j % n];
            sumSet.add(sum);
        }
    }
    
    return sumSet.size;
}
