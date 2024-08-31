function isValid(s) {
    const stack = [];
    const brackets = {
        ")": "(",
        "]": "[",
        "}": "{"
    };

    for (const char of s) {
        if (char === "(" || char === "[" || char === "{") {
            stack.push(char);
        } else if (char === ")" || char === "]" || char === "}") {
            if (stack.length === 0 || stack.pop() !== brackets[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

function solution(s) {
    let validCount = 0;
    const n = s.length;

    for (let i = 0; i < n; i++) {
        const rotated = s.slice(i) + s.slice(0, i);
        
        if (isValid(rotated)) {
            validCount++;
        }
    }

    return validCount;
}
