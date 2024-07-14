function solution(s) {
    let zeroCount = 0;
    let transformCount = 0;
    
    while (s !== "1") {
        let newStr = "";
        let zeros = 0;
        
        for (let i = 0; i < s.length; i++) {
            if (s[i] === "0") {
                zeros++;
            } else {
                newStr += s[i];
            }   
        }
        
        zeroCount += zeros;
        
        const newLength = newStr.length;
    
        s = newLength.toString(2);
        transformCount++;
    }
    
    return [transformCount, zeroCount];
}
