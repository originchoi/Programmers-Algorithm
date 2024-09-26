function solution(word) {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    const words = [];

    function generate(currentWord, length) {
        if (length > 5) return;
        if (currentWord) words.push(currentWord);

        for (let i = 0; i < vowels.length; i++) {
            generate(currentWord + vowels[i], length + 1);
        }
    }

    generate("", 0);

    return words.indexOf(word) + 1;
}
