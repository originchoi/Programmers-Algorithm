function solution(s) {
    const expandAroundCenter = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        
        return right - left - 1;
    };

    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        const len1 = expandAroundCenter(i, i);
        const len2 = expandAroundCenter(i, i + 1);
        const currentMax = Math.max(len1, len2);
        
        maxLength = Math.max(maxLength, currentMax);
    }

    return maxLength;
}
