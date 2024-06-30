function solution(n) {
    const countOnes = (num) => num.toString(2).split("").filter(bit => bit === "1").length;
    const numOfOnes = countOnes(n);
    let nextNum = n + 1;
    
    while (countOnes(nextNum) !== numOfOnes) {
        nextNum++;
    }
    
    return nextNum;
}
