function solution(s){
    const bracketList = s.split("");
    const stack = [];
    
    if (bracketList[0] === ")" || bracketList[0] === "}" || bracketList[0] === "]") return false;

    for (let i = 0; i < bracketList.length; i++) {
        if (stack[stack.length - 1] === "(" && bracketList[i] === ")") {
            stack.pop();
        } else {
            stack.push(bracketList[i]);
        }
    }

    return !stack.length;
}
