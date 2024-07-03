function solution(s) {
    const chars = s.split(" ").map(word => {
        if (word.length === 0) return word;
        
        const firstChar = word[0].toUpperCase();
        const restChars = word.slice(1).toLowerCase();
        
        return firstChar + restChars;
    }).join(" ");
    
    return chars;
}
