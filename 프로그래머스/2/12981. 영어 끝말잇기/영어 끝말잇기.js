function solution(n, words) {
    const usedWords = new Set();
    let lastChar = words[0][0];
    
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const playerNumber = (i % n) + 1;
        const turnNumber = Math.floor(i / n) + 1;
        
        if (usedWords.has(word) || word[0] !== lastChar) {
            return [playerNumber, turnNumber];
        }
        
        usedWords.add(word);
        lastChar = word[word.length - 1];
    }
    
    return [0, 0];
}
